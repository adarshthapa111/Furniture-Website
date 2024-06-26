"use client"
import { createContext, useEffect, useContext, useState } from "react";
import { ref, set, get } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut as firebaseSignOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, db } from "../firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);

  const signUp = async (email, password, firstName, lastName) => {
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      console.error("Invalid email format");
      return Promise.reject("Invalid email format");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;
      await set(ref(db, `users/${uid}`), { firstName, lastName, email, role: "user" });
      setCurrentUser({ ...userCredential.user, firstName, lastName, role: "user" });
      return userCredential.user;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };

  const logIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;
      const snapshot = await get(ref(db, `users/${uid}`));

      if (snapshot.exists()) {
        const userData = snapshot.val();
        setCurrentUser({ ...userCredential.user, ...userData });
      }

      return userCredential.user;
    } catch (error) {
      console.error("Error logging in user:", error);
      throw error;
    }
  };

  const googleSignIn = async () => {
    const googleAuthProvider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, googleAuthProvider);
      const user = userCredential.user;
      const [firstName, ...rest] = user.displayName.split(' ');
      const lastName = rest.join(' ');
      await set(ref(db, `users/${user.uid}`), { firstName, lastName, email: user.email });
      return user;
    } catch (error) {
      console.error("Error signing in with Google:", error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setCurrentUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  };

  const forgotPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      setError(null);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        localStorage.setItem("currentUser", JSON.stringify(user));
      } else {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
      }
    });

    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }

    return unsubscribe;
  }, []);

  const contextValue = {
    user: currentUser,
    error,
    signUp,
    logIn,
    signOut,
    googleSignIn,
    forgotPassword,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => useContext(UserContext);

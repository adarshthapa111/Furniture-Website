"use client"

import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { auth, db } from "../firebase";
import { ref, get } from "firebase/database";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = UserAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      console.log("Logging in with email and password...");
      await logIn(email, password);

      const userRef = ref(db, `users/${auth.currentUser.uid}`);
      const snapshot = await get(userRef);
      const userData = snapshot.val();

      if (userData && userData.role) {
        toast.success("Logged in successfully!");
        router.push(userData.role === "admin" ? "/Admin" : "/");
      } else {
        router.push("/");
        toast.success("Logged In successfully");
      }

      console.log("Logged in successfully!");
    } catch (err) {
      console.log("Error logging in:", err);
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      router.push("/");
      toast.success("Logged In successfully");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md p-6 sm:p-8">
        <div className="flex justify-center mb-6">
          <h1 className="font-josefin text-xl font-bold">Hamro Furniture</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                  prefetch={false}
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                placeholder="Enter your password!"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </CardContent>
        </form>
        <div className="text-center mt-4">
          <Button className="w-full" onClick={handleGoogleSignIn}>
            Sign In with Google
          </Button>
        </div>
        <CardFooter className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="/Signup"
            className="font-medium hover:underline"
            prefetch={false}
          >
            Sign up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}


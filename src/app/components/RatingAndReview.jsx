// "use client";

// import { useState, useEffect } from "react";
// import { supabase } from "../Supabase/config";
// import { toast } from "react-toastify";
// import { db } from "../firebase";
// import { UserAuth } from "../context/AuthContext";
// import { ref, get } from "firebase/database";
// import StarRating from "./StarRating";
// import Image from "next/image";

// const RatingAndReview = ({ furnitureId }) => {
//   //Use state management
//   const [rating, setRating] = useState("5");
//   const [title, setTitle] = useState("");
//   const [review, setReview] = useState("");
//   const [reviews, setReviews] = useState([]);
//   const [fetchError, setFetchError] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;
//   const { user: currentUser } = UserAuth();

//   //   Data Fetching from Rating and Review
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data, error } = await supabase
//           .from("RatingAndReview")
//           .select("*")
//           .eq("FurnitureId", furnitureId);
//         if (error) {
//           console.log("Cannot fetch the data", error);
//           setFetchError(error);
//           setReviews(null);
//         }
//         if (data) {
//           setReviews(data);
//           setFetchError(null);
//           console.log(data);
//         }
//       } catch {
//         console.log("Error fetching data!!");
//         fetchError("Unknow erorr");
//       }
//     };
//     fetchData();
//   });

//   //On Submit data..
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     let firstName, lastName;

//     try {
//       const userInfo = ref(db, `users/${currentUser.uid}`);
//       const userSnapshot = await get(userInfo);
//       const userData = userSnapshot.val();
//       firstName = userData.firstName;
//       lastName = userData.lastName;
//     } catch {
//       console.log("Error Fetching firstname and last name!!!");
//     }
//     const { data, error } = await supabase.from("RatingAndReview").insert([
//       {
//         Rating: rating,
//         Review: review,
//         Title: title,
//         FirstName: firstName,
//         LastName: lastName,
//         FurnitureId: furnitureId,
//       },
//     ]);
//     if (error) {
//       console.log("Error inserting data", error);
//     } else {
//       toast.success("Review has been added sucessfully!");
//       //   setRating(5);
//       setTitle("");
//       setReview("");
//     }
//   };

//   //For Pagination of rating and Review!!!!!!!

//   const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1), 1);
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) =>
//       prevPage * itemsPerPage < reviews.length ? prevPage + 1 : prevPage
//     );
//   };

//   const startPage = (currentPage - 1) * itemsPerPage;
//   const currentItems = reviews.slice(startPage, startPage + itemsPerPage);

//   return (
//     <div>
//       <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
//         <div className="grid gap-12">
//           <div className="grid gap-6">
//             <div className="grid gap-2">
//               <h2 className="text-2xl font-bold font-great-vibes">
//                 Submit a Review
//               </h2>
//               <p className="text-gray-500 dark:text-gray-400">
//                 Share your experience and help others make informed decisions.
//               </p>
//             </div>
//             <div className="bg-white rounded-lg shadow-md border border-gray-300 shadow-gray-400 p-6">
//               <form className="grid gap-6" onSubmit={handleSubmit}>
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div className="grid gap-2">
//                     <label htmlFor="rating" className="font-medium">
//                       Rating
//                     </label>
//                     <div id="rating" className="space-y-2">
//                       <div className="flex items-center gap-2">
//                         <input
//                           type="radio"
//                           name="rating"
//                           value="5"
//                           id="rating-5"
//                           defaultChecked
//                           className=""
//                           onChange={(e) => setRating(Number(e.target.value))}
//                         />
//                         <label
//                           htmlFor="rating-5"
//                           className="flex items-center gap-1 cursor-pointer"
//                         >
//                           {Array.from({ length: 5 }, (_, i) => (
//                             <StarIcon
//                               key={i}
//                               className="w-5 h-5 fill-current text-gray-900"
//                             />
//                           ))}
//                         </label>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <input
//                           type="radio"
//                           name="rating"
//                           value="4"
//                           id="rating-4"
//                           className=""
//                           onChange={(e) => setRating(Number(e.target.value))}
//                         />
//                         <label
//                           htmlFor="rating-4"
//                           className="flex items-center gap-1 cursor-pointer"
//                         >
//                           {Array.from({ length: 4 }, (_, i) => (
//                             <StarIcon
//                               key={i}
//                               className="w-5 h-5 fill-current text-gray-900"
//                             />
//                           ))}
//                           <StarIcon className="w-5 h-5 fill-current text-gray-300" />
//                         </label>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <input
//                           type="radio"
//                           name="rating"
//                           value="3"
//                           id="rating-3"
//                           className=""
//                           onChange={(e) => setRating(Number(e.target.value))}
//                         />
//                         <label
//                           htmlFor="rating-3"
//                           className="flex items-center gap-1 cursor-pointer"
//                         >
//                           {Array.from({ length: 3 }, (_, i) => (
//                             <StarIcon
//                               key={i}
//                               className="w-5 h-5 fill-current text-gray-900"
//                             />
//                           ))}
//                           {Array.from({ length: 2 }, (_, i) => (
//                             <StarIcon
//                               key={i}
//                               className="w-5 h-5 fill-current text-gray-300"
//                             />
//                           ))}
//                         </label>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <input
//                           type="radio"
//                           name="rating"
//                           value="2"
//                           id="rating-2"
//                           className=""
//                           onChange={(e) => setRating(Number(e.target.value))}
//                         />
//                         <label
//                           htmlFor="rating-2"
//                           className="flex items-center gap-1 cursor-pointer"
//                         >
//                           {Array.from({ length: 2 }, (_, i) => (
//                             <StarIcon
//                               key={i}
//                               className="w-5 h-5 fill-current text-gray-900"
//                             />
//                           ))}
//                           {Array.from({ length: 3 }, (_, i) => (
//                             <StarIcon
//                               key={i}
//                               className="w-5 h-5 fill-current text-gray-300"
//                             />
//                           ))}
//                         </label>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <input
//                           type="radio"
//                           name="rating"
//                           value="1"
//                           id="rating-1"
//                           className="text-gray-900"
//                           onChange={(e) => setRating(Number(e.target.value))}
//                         />
//                         <label
//                           htmlFor="rating-1"
//                           className="flex items-center gap-1 cursor-pointer"
//                         >
//                           <StarIcon className="w-5 h-5 fill-current text-gray-900" />
//                           {Array.from({ length: 4 }, (_, i) => (
//                             <StarIcon
//                               key={i}
//                               className="w-5 h-5 fill-current text-gray-300"
//                             />
//                           ))}
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="grid gap-2">
//                     <label htmlFor="title" className="font-medium">
//                       Review Title
//                     </label>
//                     <input
//                       type="text"
//                       id="title"
//                       placeholder="Enter a title for your review"
//                       className="block w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300 focus:border-indigo-300"
//                       value={title}
//                       onChange={(e) => setTitle(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="grid gap-2">
//                   <label htmlFor="review" className="font-medium">
//                     Review
//                   </label>
//                   <textarea
//                     id="review"
//                     placeholder="Share your thoughts and experiences"
//                     rows={4}
//                     value={review}
//                     className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300 focus:border-indigo-300"
//                     onChange={(e) => setReview(e.target.value)}
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:ring focus:ring-opacity-50 focus:ring-indigo-300"
//                 >
//                   Submit Review
//                 </button>
//               </form>
//             </div>
//           </div>
//           <div className="grid gap-6">
//             <div className="grid gap-2">
//               <h2 className="text-2xl font-bold">All Reviews</h2>
//               <p className="text-gray-500 dark:text-gray-400">
//                 See what other travelers have to say about their stay.
//               </p>
//             </div>
//             <div className="grid gap-4">
//               {/* <div className="flex items-center justify-between">
//                                 <div className="relative inline-block">
//                                     <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:ring focus:ring-opacity-50 focus:ring-indigo-300">
//                                         <ListOrderedIcon className="w-4 h-4 mr-2" />
//                                         Sort by
//                                     </button>
//                                     <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg">
//                                         <div className="py-1">
//                                             <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 Newest
//                                             </button>
//                                             <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 Oldest
//                                             </button>
//                                             <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 Highest Rating
//                                             </button>
//                                             <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 Lowest Rating
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="relative inline-block">
//                                     <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:ring focus:ring-opacity-50 focus:ring-indigo-300">
//                                         <FilterIcon className="w-4 h-4 mr-2" />
//                                         Filter
//                                     </button>
//                                     <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg">
//                                         <div className="py-1">
//                                             <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 <input type="checkbox" className="mr-2" />5 Stars
//                                             </div>
//                                             <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 <input type="checkbox" className="mr-2" />4 Stars
//                                             </div>
//                                             <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 <input type="checkbox" className="mr-2" />3 Stars
//                                             </div>
//                                             <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 <input type="checkbox" className="mr-2" />2 Stars
//                                             </div>
//                                             <div className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                                                 <input type="checkbox" className="mr-2" />1 Star
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div> */}
//               {reviews && (
//                 <div className="grid gap-6">
//                   <div className="grid gap-4">
//                     {currentItems.map((review) => (
//                       <div className="flex items-start gap-4" key={review.id}>
//                         <div className=" rounded-full">
//                           <Image
//                             src="/Image/icon.png"
//                             alt="@username"
//                             className="h-12 w-12"
//                             height={40}
//                             width={40}
//                           />
//                         </div>
//                         <div className="grid gap-2">
//                           <div className="flex items-center gap-2">
//                             <div className="font-medium capitalize">
//                               {review.FirstName + " " + review.LastName}
//                               {console.log(
//                                 review.FirstName + " " + review.LastName
//                               )}
//                             </div>
//                             <div>
//                               <StarRating rating={review.Rating} />
//                             </div>
//                           </div>
//                           <h3 className="text-lg font-semibold capitalize">
//                             {review.Title}
//                           </h3>
//                           <p className="text-gray-500 dark:text-gray-400 capitalize">
//                             {review.Review}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//           {/* // Pagination */}
//           <div className="flex justify-between mt-8">
//             <button
//               className="px-4 py-2 mx-2 text-white bg-gray-900 rounded shadow-lg shadow-white disabled:bg-gray-300"
//               onClick={handlePreviousPage}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </button>
//             <button
//               className="px-4 py-2 mx-2 text-white bg-gray-900 rounded disabled:bg-gray-300"
//               onClick={handleNextPage}
//               disabled={currentPage * itemsPerPage >= reviews.length}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// function FilterIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
//     </svg>
//   );
// }

// function ListOrderedIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="10" x2="21" y1="6" y2="6" />
//       <line x1="10" x2="21" y1="12" y2="12" />
//       <line x1="10" x2="21" y1="18" y2="18" />
//       <path d="M4 6h1v4" />
//       <path d="M4 10h2" />
//       <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
//     </svg>
//   );
// }

// function StarIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
//   );
// }

// export default RatingAndReview;

"use client";

import { useState, useEffect } from "react";
import { supabase } from "../Supabase/config";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { ref, get } from "firebase/database";
import StarRating from "./StarRating";
import Image from "next/image";

const RatingAndReview = ({ furnitureId }) => {
  //Use state management
  const [rating, setRating] = useState("5");
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]); // Initialize with an empty array
  const [fetchError, setFetchError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const { user: currentUser } = UserAuth();

  //   Data Fetching from Rating and Review
  useEffect(() => {
    console.log("This is furniture id", furnitureId);
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("RatingAndReview")
          .select("*")
          .eq("FurnitureId", furnitureId);
        if (error) {
          console.log("Cannot fetch the data", error);
          setFetchError(error);
          setReviews([]); // Set to an empty array on error
        }
        if (data) {
          setReviews(data);
          setFetchError(null);
          console.log(data);
        }
      } catch {
        console.log("Error fetching data!!");
        setFetchError("Unknown error");
        setReviews([]); // Set to an empty array on catch
      }
    };
    fetchData();
  }, [furnitureId]); // Add furnitureId as a dependency to refetch when it changes

  //On Submit data..
  const handleSubmit = async (event) => {
    event.preventDefault();
    let firstName, lastName;

    try {
      const userInfo = ref(db, `users/${currentUser.uid}`);
      const userSnapshot = await get(userInfo);
      const userData = userSnapshot.val();
      firstName = userData.firstName;
      lastName = userData.lastName;
    } catch {
      console.log("Error Fetching firstname and last name!!!");
    }
    const { data, error } = await supabase.from("RatingAndReview").insert([
      {
        Rating: rating,
        Review: review,
        Title: title,
        FirstName: firstName,
        LastName: lastName,
        FurnitureId: furnitureId,
      },
    ]);
    if (error) {
      console.log("Error inserting data", error);
    } else {
      toast.success("Review has been added successfully!");
      setTitle("");
      setReview("");
    }
  };

  //For Pagination of rating and Review!!!!!!!

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage * itemsPerPage < reviews.length ? prevPage + 1 : prevPage
    );
  };

  const startPage = (currentPage - 1) * itemsPerPage;
  const currentItems = reviews.slice(startPage, startPage + itemsPerPage);

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-12">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold font-great-vibes">
                Submit a Review
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Share your experience and help others make informed decisions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md border border-gray-300 shadow-gray-400 p-6">
              <form className="grid gap-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="rating" className="font-medium">
                      Rating
                    </label>
                    <div id="rating" className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="rating"
                          value="5"
                          id="rating-5"
                          defaultChecked
                          className=""
                          onChange={(e) => setRating(Number(e.target.value))}
                        />
                        <label
                          htmlFor="rating-5"
                          className="flex items-center gap-1 cursor-pointer"
                        >
                          {Array.from({ length: 5 }, (_, i) => (
                            <StarIcon
                              key={i}
                              className="w-5 h-5 fill-current text-gray-900"
                            />
                          ))}
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="rating"
                          value="4"
                          id="rating-4"
                          className=""
                          onChange={(e) => setRating(Number(e.target.value))}
                        />
                        <label
                          htmlFor="rating-4"
                          className="flex items-center gap-1 cursor-pointer"
                        >
                          {Array.from({ length: 4 }, (_, i) => (
                            <StarIcon
                              key={i}
                              className="w-5 h-5 fill-current text-gray-900"
                            />
                          ))}
                          <StarIcon className="w-5 h-5 fill-current text-gray-300" />
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="rating"
                          value="3"
                          id="rating-3"
                          className=""
                          onChange={(e) => setRating(Number(e.target.value))}
                        />
                        <label
                          htmlFor="rating-3"
                          className="flex items-center gap-1 cursor-pointer"
                        >
                          {Array.from({ length: 3 }, (_, i) => (
                            <StarIcon
                              key={i}
                              className="w-5 h-5 fill-current text-gray-900"
                            />
                          ))}
                          {Array.from({ length: 2 }, (_, i) => (
                            <StarIcon
                              key={i}
                              className="w-5 h-5 fill-current text-gray-300"
                            />
                          ))}
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="rating"
                          value="2"
                          id="rating-2"
                          className=""
                          onChange={(e) => setRating(Number(e.target.value))}
                        />
                        <label
                          htmlFor="rating-2"
                          className="flex items-center gap-1 cursor-pointer"
                        >
                          {Array.from({ length: 2 }, (_, i) => (
                            <StarIcon
                              key={i}
                              className="w-5 h-5 fill-current text-gray-900"
                            />
                          ))}
                          {Array.from({ length: 3 }, (_, i) => (
                            <StarIcon
                              key={i}
                              className="w-5 h-5 fill-current text-gray-300"
                            />
                          ))}
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="rating"
                          value="1"
                          id="rating-1"
                          className="text-gray-900"
                          onChange={(e) => setRating(Number(e.target.value))}
                        />
                        <label
                          htmlFor="rating-1"
                          className="flex items-center gap-1 cursor-pointer"
                        >
                          <StarIcon className="w-5 h-5 fill-current text-gray-900" />
                          {Array.from({ length: 4 }, (_, i) => (
                            <StarIcon
                              key={i}
                              className="w-5 h-5 fill-current text-gray-300"
                            />
                          ))}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="title" className="font-medium">
                      Review Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      placeholder="Enter a title for your review"
                      className="block w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300 focus:border-indigo-300"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="review" className="font-medium">
                    Your Review
                  </label>
                  <textarea
                    id="review"
                    placeholder="Write your review"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-300 focus:border-indigo-300"
                    rows="5"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <span className="text-sm font-semibold tracking-wide">
                    Submit Review
                  </span>
                </button>
              </form>
            </div>
          </div>
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold font-great-vibes font-josefin">
              Customer Reviews
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Read what others have to say about this product.
            </p>
          </div>
          {fetchError && (
            <div className="text-red-500">
              <p>Error: {fetchError.message}</p>
            </div>
          )}
          <div className="grid gap-6 md:gap-8">
            {currentItems.map((review) => (
              <div className="flex items-start gap-4" key={review.id}>
                <div className=" rounded-full">
                  <Image
                    src="/img/icon.png"
                    alt="@username"
                    className="h-12 w-12"
                    height={40}
                    width={40}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <div className="font-medium capitalize">
                      {review.FirstName + " " + review.LastName}
                      {console.log(review.FirstName + " " + review.LastName)}
                    </div>
                    <div>
                      <StarRating rating={review.Rating} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold capitalize">
                    {review.Title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 capitalize">
                    {review.Review}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex justify-between gap-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-200 border border-transparent rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage * itemsPerPage >= reviews.length}
                className={`px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-200 border border-transparent rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
                  currentPage * itemsPerPage >= reviews.length
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StarIcon = ({ className }) => (
  <svg
    className={`w-5 h-5 fill-current text-red-600 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 15l-5.878 3.09 1.122-6.54L0 6.91l6.56-.955L10 0l3.44 5.955L20 6.91l-5.244 4.64L15.878 18z" />
  </svg>
);

export default RatingAndReview;

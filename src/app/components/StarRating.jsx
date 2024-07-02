import React from "react";

const StarRating = ({ rating }) => {

  const totalStars = 5;
  const validRating = Math.min(Math.max(rating, 0), totalStars);
  const filledStars = Math.floor(validRating);
  const unfilledStars = totalStars - filledStars;

  return (
    <div className="flex items-center gap-0.5 text-xs">
      {Array.from({ length: filledStars }, (_, i) => (
        <StarIcon key={i} className="w-4 h-4 fill-current text-gray-900" />
      ))}
      {Array.from({ length: unfilledStars }, (_, i) => (
        <StarIcon
          key={i + filledStars}
          className="w-5 h-5 fill-current text-gray-300"
        />
      ))}
    </div>
  );
};

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default StarRating;

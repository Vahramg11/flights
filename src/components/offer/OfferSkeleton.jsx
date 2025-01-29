import React from "react";

const OfferSkeleton = () => {
  return (
    <>
      {[...Array(4)].map((_, index) => (
        <article
          key={index}
          className="rounded-xl bg-gray-200 p-3 shadow-lg w-full animate-pulse"
        >
          <div className="relative flex items-end overflow-hidden rounded-xl bg-gray-300 h-40"></div>

          <div className="mt-2 p-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded mt-2 w-1/3"></div>

            <div className="mt-3 flex justify-between flex-col justify-end">
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default OfferSkeleton;

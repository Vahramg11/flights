import React from "react";

const AirportSuggestions = ({ airports, choose_airport }) => {
  return (
    <ul className="block shadow-xl bg-white py-2 px-2 z-[1000]  w-max rounded max-h-96 overflow-auto w-full absolute top-20">
      {airports.map((elm, i) => {
        console.log("elm", elm);

        return (
          <li
            className="py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer rounded"
            key={i}
            onClick={() => {
              choose_airport(elm);
            }}
          >
            {elm.presentation.suggestionTitle}
          </li>
        );
      })}
    </ul>
  );
};

export default AirportSuggestions;

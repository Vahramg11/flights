import React from "react";

const AirportItem = ({ airport }) => {
    console.log(airport);
    
//   console.log(airport.legs[0].carriers.marketing[0].name);

  return (
    <>
      {
        <div className="border border-gray-300 rounded-xl bg-gray-100">
          <div className="flex flex-col h-full md:flex-row gap-7">
            <div className="flex flex-col items-center justify-center gap-1 p-5">
              <p className="text-gray-600">From</p>
              <h5 className="text-lg font-semibold">
                {airport.legs[0].origin.city}
              </h5>
              <p className="max-w-[15rem] line-clamp-2 text-center">
                {airport.legs[0].origin.name}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="grid bg-blue-500 rounded-full w-9 h-9 place-items-center">
                <img
                  src={airport.legs[0].carriers.marketing[0].logoUrl}
                  alt=""
                />
              </div>
              <p className="mt-0 text-center">
                {airport.legs[0].carriers.marketing[0].name}
              </p>
              <p className="mt-0 text-center text-sm">
                {airport.legs[0].departure}{" "}
              </p>
              <p className="mt-0 text-center text-sm">
                {airport.legs[0].arrival}{" "}
              </p>
            </div>
            <div className="flex flex-col text-center items-center justify-center gap-1">
              <p className="text-gray-600">To</p>
              <h5 className="text-lg font-semibold">
                {airport.legs[0].destination.city}
              </h5>
              <p>{airport.legs[0].destination.name}</p>
            </div>
            <div className="flex flex-col items-center gap-1 p-6 bg-[#FAE6E1] rounded-r-xl md:w-48">
              <p className="mt-0 font-semibold">
                ${airport.pricingOptions[0].price.amount}
              </p>
              <div className="mt-4">
                <button className="block px-4 py-2 mb-2 text-sm text-white bg-orange-500 rounded-md">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default AirportItem;

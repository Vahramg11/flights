import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFlightType } from "../../sections/searchflights/Search.slice";
const FlightTypes = () => {
  const flightTypes = useSelector((state) => state.flight.flightTypes);
  const selectedFlightType = useSelector(
    (state) => state.flight.selectedFlightType
  );

  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const toggleTypes = () => {
    setToggle(!toggle);
  };
  const change_default_type = (type) => {
    dispatch(setSelectedFlightType(type));
    setToggle(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleTypes}
        className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
      >
        {selectedFlightType}
      </button>
      <div
        className={`${
          toggle ? "" : "hidden"
        } hs-dropdown flex flex-col absolute z-1`}
      >
        <div
          className={` hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100  min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="hs-dropdown-default"
        >
          <div className="p-1 space-y-0.5">
            {flightTypes.map((elm, index) => {
              return (
                <button
                  onClick={() => {
                    change_default_type(elm);
                  }}
                  key={index}
                  className="w-full cursor-pointer flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                >
                  {elm}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightTypes;

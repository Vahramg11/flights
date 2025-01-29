import React from "react";
import Map from "../../components/map/Map";
import { useDispatch, useSelector } from "react-redux";
import AirportItem from "../../components/AirportItem/AirportItem";
const Flights = () => {
  const airports = useSelector((state) => state.airports.airports);

  return airports.length ? (
    <div className="flex flex-wrap h-[100vh]">
      <div className=" md:w-[60%] w-full">
        {airports.map((elm) => {
          return <AirportItem key={elm.id} airport={elm} />;
        })}
      </div>
      <div className="bg-green-500 md:w-[40%] w-full h-full">
        <Map className="w-full h-full" />
      </div>
    </div>
  ) : (
    <h1>not found any airport</h1>
  );
};

export default Flights;

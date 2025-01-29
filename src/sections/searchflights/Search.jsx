import React, { useEffect } from "react";
import User from "../../components/svg/User";
import FlightTypes from "../../components/flightTypes/FlightTypes";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import AirportSuggestions from "../../components/airportSuggestions/AirportSuggestions";
import { change_airports } from "../../templates/Flights/Flights.slice";
import {
  setOriginSkyId,
  setSelectedFlightType,
  setOriginEntityId,
  setDestinationSkyId,
  setDestinationEntityId,
} from "./Search.slice";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [fromAirports, setFromAirports] = useState([]);
  const [toAirports, setToAirports] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const originSkyId = useSelector((state) => state.flight.originSkyId);
  const originEntityId = useSelector((state) => state.flight.originEntityId);

  const destinationSkyId = useSelector(
    (state) => state.flight.destinationSkyId
  );
  const destinationEntityId = useSelector(
    (state) => state.flight.destinationEntityId
  );

  const [searchFromAirport, setsearchFromAirport] = useState("");
  const [searchToAirport, setsearchToAirport] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [return_date, setReturnDate] = useState("");
  const [adults, setAdults] = useState(1);

  const change_date = (value) => {
    setDate(value);
  };

  const change_adults = (value) => {
    if (value < 1) {
      setAdults("");
    } else {
      setAdults(value);
    }
  };

  const change_return_date = (value) => {
    setReturnDate(value);
  };

  const handleSearchFrom = (value) => {
    setsearchFromAirport(value);
  };

  const handleSearchTo = (value) => {
    setsearchToAirport(value);
  };

  const choose_from_airport = (air) => {
    setsearchFromAirport(air.presentation.suggestionTitle);
    dispatch(setOriginSkyId(air.skyId));
    dispatch(setOriginEntityId(air.entityId));
    setFromAirports([]);
  };

  const choose_to_airport = (air) => {
    setsearchToAirport(air.presentation.suggestionTitle);
    dispatch(setDestinationSkyId(air.skyId));
    dispatch(setDestinationEntityId(air.entityId));
    setToAirports([]);
  };

  const [loading, setLoading] = useState(false);

  const fetchAirportIDs = async (airport, setAirport) => {
    const { data } = await axios.get(
      "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
      {
        params: { query: airport },
        headers: {
          "X-RapidAPI-Key":
            "e9765b5551mshb9cf4836792a21fp15bbadjsn22cdb52ff3d3",
          "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
        },
      }
    );

    if (data.data && airport) {
      setAirport(data.data);
    }
  };

  const popoular_flight = async () => {
    setLoading(true);

    const { data } = await axios.get(
      "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsWebComplete",
      {
        params: {
          originSkyId: originSkyId,
          destinationSkyId: destinationSkyId,
          originEntityId: originEntityId,
          destinationEntityId: destinationEntityId,
          cabinClass: "economy",
          date: date,
          returnDate: return_date,
          adults: "",
        },
        headers: {
          "X-RapidAPI-Key":
            "e9765b5551mshb9cf4836792a21fp15bbadjsn22cdb52ff3d3",
          "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
        },
      }
    );
    console.log("popoular_flight", data);
    if (data.status) {
      setLoading(false);
      navigate("flights");
      dispatch(change_airports(data.data.itineraries));
    }
  };

  const main_search = () => {
    if (searchFromAirport && searchToAirport) {
      popoular_flight();
    }
  };

  useEffect(() => {
    if (searchFromAirport) {
      fetchAirportIDs(searchFromAirport, setFromAirports);
    } else {
      setFromAirports([]);
    }
  }, [searchFromAirport]);

  useEffect(() => {
    if (searchToAirport) {
      fetchAirportIDs(searchToAirport, setToAirports);
    } else {
      setToAirports([]);
    }
  }, [searchToAirport]);

  return (
    <>
      <div className="max-w-6xl mx-auto mt-10 px-4 pt-8 bg-white rounded-lg shadow-md pb-15 relative">
        <ul className="flex  space-x-6 text-gray-800 text-sm mb-6 items-end relative">
          <li className="flex items-top justify-center space-x-2 cursor-pointer group">
            <User className="text-gray-600" />
            <input
              type="number"
              value={adults}
              onChange={(e) => {
                change_adults(e.target.value);
              }}
              className="h-full w-20 py-3 px-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
          </li>
          <li className="relative">
            <FlightTypes />
          </li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="flex flex-col">
            <label htmlFor="from" className="text-sm font-medium text-gray-700">
              From
            </label>
            <input
              onInput={(e) => {
                handleSearchFrom(e.target.value);
              }}
              type="text"
              id="from"
              placeholder="Where from?"
              className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchFromAirport}
            />
            <AirportSuggestions
              airports={fromAirports}
              choose_airport={choose_from_airport}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="to" className="text-sm font-medium text-gray-700">
              To
            </label>
            <input
              onInput={(e) => {
                handleSearchTo(e.target.value);
              }}
              type="text"
              id="to"
              placeholder="Where to?"
              className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchToAirport}
            />
            <AirportSuggestions
              airports={toAirports}
              choose_airport={choose_to_airport}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="departure-date"
              className="text-sm font-medium text-gray-700"
            >
              Departure
            </label>
            <input
              type="date"
              id="departure-date"
              className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={date}
              onInput={(e) => {
                change_date(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="return-date"
              className="text-sm font-medium text-gray-700"
            >
              Return
            </label>
            <input
              type="date"
              id="return-date"
              className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={return_date}
              onInput={(e) => {
                change_return_date(e.target.value);
              }}
            />
          </div>
        </div>

        <button
          onClick={() => {
            main_search();
          }}
          className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <span>Search Flights</span>
          {loading && <div className="flex gap-2 justify-center">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
          </div>
}
        </button>
      </div>
    </>
  );
};

export default Search;

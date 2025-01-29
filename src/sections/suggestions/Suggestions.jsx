import React from "react";

import Map from "../../components/map/Map";
import Offer from "../../components/offer/Offer";
import OfferSkeleton from "../../components/offer/OfferSkeleton";
import axios from "axios";
import { useState, useEffect } from "react";
const Suggestions = () => {
  const [offers, setOffers] = useState([
    {
      id: "location-29475385",
      type: "LOCATION",
      content: {
        location: {
          id: "29475385",
          skyCode: "FR",
          name: "France",
          type: "Nation",
        },
        flightQuotes: {
          cheapest: {
            price: "$48",
            rawPrice: 48,
            direct: false,
          },
          direct: {
            price: "$86",
            rawPrice: 86,
            direct: true,
          },
        },
        image: {
          url: "https://content.skyscnr.com/c88da2b091534f7baf8536b3959ce83a/GettyImages-495057957.jpg",
        },
        flightRoutes: {
          directFlightsAvailable: true,
        },
      },
    },
    {
      id: "location-29475381",
      type: "LOCATION",
      content: {
        location: {
          id: "29475381",
          skyCode: "DE",
          name: "Germany",
          type: "Nation",
        },
        flightQuotes: {
          cheapest: {
            price: "$49",
            rawPrice: 49,
            direct: false,
          },
          direct: {
            price: "$68",
            rawPrice: 68,
            direct: true,
          },
        },
        image: {
          url: "https://content.skyscnr.com/917a21468839141dd406892864a9f52e/GettyImages-490614171.jpg",
        },
        flightRoutes: {
          directFlightsAvailable: true,
        },
      },
    },
    {
      id: "location-29475370",
      type: "LOCATION",
      content: {
        location: {
          id: "29475370",
          skyCode: "MA",
          name: "Morocco",
          type: "Nation",
        },
        flightQuotes: {
          cheapest: {
            price: "$49",
            rawPrice: 49,
            direct: false,
          },
        },
        image: {
          url: "https://content.skyscnr.com/0c1b0ffcf42566b18ce3934ccf32c415/GettyImages-136909106.jpg",
        },
        flightRoutes: {
          directFlightsAvailable: false,
        },
      },
    },
    {
      id: "location-29475376",
      type: "LOCATION",
      content: {
        location: {
          id: "29475376",
          skyCode: "CH",
          name: "Switzerland",
          type: "Nation",
        },
        flightQuotes: {
          cheapest: {
            price: "$50",
            rawPrice: 50,
            direct: false,
          },
        },
        image: {
          url: "https://content.skyscnr.com/92ec24310bc1e0c2c5022132dd1d4d55/GettyImages-178766147.jpg",
        },
        flightRoutes: {
          directFlightsAvailable: false,
        },
      },
    },
  ]);

  const getNearbyAirports = async () => {
    try {
      const { data } = await axios.get(
        "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightEverywhere",
        {
          params: {
            originEntityId: "95673518",
          },
          headers: {
            "X-RapidAPI-Key":
              "e9765b5551mshb9cf4836792a21fp15bbadjsn22cdb52ff3d3",
            "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
          },
        }
      );
      setOffers(data.data.results.slice(10, 14));
      console.log("data", data.data.results);
    } catch (err) {
      alert(err);
    }

    console.log(offers);
  };

  // useEffect(() => {
  //   getNearbyAirports();
  // }, []);

  return (
    <div className="max-w-6xl w-full mt-20">
      <h2 className="text-2xl mb-5">
        Find cheap flights from Yerevan to anywhere
      </h2>

      <Map className="w-full rounded-2xl h-[450px]" />
      <section className="py-20">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-4">
          {offers.length ? <Offer offers={offers} /> : <OfferSkeleton />}
        </div>
      </section>
    </div>
  );
};

export default Suggestions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tools: [
    {
      id: 1,
      title: "Find the cheapest days to fly",
      text: "The date grid and price graph make it easy to see the best flight deals",
      svg: "./calendar.svg",
      details: {
        dTitle: "Insightful tools help you choose your trip dates",
        dText:
          "If your travel plans are flexible, use the form above to start searching for a specific trip. Then, play around with the Date grid and Price graph options on the Search page to find the cheapest days to get to your destination – and back again for round trips.",
        image: "./dates_benefits_light.svg",
      },
    },

    {
      id: 2,
      title: "See the whole picture with price insights",
      text: "Price history and trend data show you when to book to get the best price on your flight",
      svg: "./raiting.svg",
      details: {
        dTitle: "Get smart insights about flight prices",
        dText:
          "Real-time insights can tell you if a fare is lower or higher than usual, and if the fare that you're seeing is a good price. So, you don't have to worry about paying too much for a flight or missing out on the cheapest time to book. On some routes, you might also see historical data that helps you better understand how flight prices vary over time.",
        image: "./price_insights_benefits_light.svg",
      },
    },

    {
      id: 3,
      title: "Track prices for a trip",
      text: "Not ready to book yet? Observe price changes for a route or flight and get notified when prices drop.",
      svg: "./alert.svg",
      details: {
        dTitle:
          "Monitor flight prices and make sure that you never miss a price change",
        dText:
          "Effortlessly track prices for specific travel dates or for any dates, if your plans are flexible, to uncover the best deals. You can easily set up tracking for multiple routes while searching for flights and opt in to receive email updates when the price changes. Once that's done, you can come back to your Tracked flights page to monitor prices whenever you like, or relax knowing you'll never miss a flight deal.",
        image: "./tracking_prices_benefits_light.svg",
      },
    },
  ],
  selectedTool: null,
};
initialState.selectedTool = initialState.tools[0];

const toolSlice = createSlice({
  name: "tools",
  initialState,
  reducers: {
    setSelectedTool: (state, action) => {
      state.selectedTool = state.tools.find((elm) => elm.id == action.payload);
    },
  },
});

export const { setSelectedTool } = toolSlice.actions;

export default toolSlice.reducer;

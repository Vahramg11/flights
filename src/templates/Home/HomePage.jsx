import React from "react";
import Header from "../../components/header/Header";
import Search from "../../sections/searchflights/Search";
import Suggestions from "../../sections/suggestions/Suggestions";
import UsefulTools from "../../sections/usefulTools/UsefulTools";
const HomePage = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <Search />
      <Suggestions />
      <UsefulTools />
    </div>
  );
};

export default HomePage;

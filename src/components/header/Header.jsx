import React from "react";
import styles from './Header.module.css'; // Import the CSS module

const Header = () => {
  return (
    <div className={`${styles.image_container} w-[80%]`}>
      <img src="/flights_nc_4.svg" alt="" className="h-full w-full" />
      <div className="flex justify-center items-center">
        <h1 className="text-5xl">FLIGHTS</h1>
      </div>
    </div>
  );
};

export default Header;

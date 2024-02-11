/* eslint-disable no-unused-vars */
import { useState } from "react";
import FavList from "./FavList";
import FavListModel from "./FavListModel";
import SearchBox from "./SearchBox";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const handleFvt = () => {
    setIsShow(!isShow);
  };
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <a href="./index.html">
          <img className="h-9" src="./assets/logo.svg" alt="Weather App" />
        </a>

        <div className="flex items-center gap-4 relative">
          <SearchBox />

          <FavList onFvt={handleFvt} />

          {isShow && <FavListModel />}
        </div>
      </nav>
    </header>
  );
};

export default Header;

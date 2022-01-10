import React from "react";
import "./HomePage.css";
import searchIcon from "../assets/Search.png";
import filterIcon from "../assets/Frame.png";
import rightArrowIcon from "../assets/RightArrow.png";
import rightArrowColorIcon from "../assets/RightArrowColor.png";
import logo1 from "../assets/Logo1.png";
import logo2 from "../assets/Logo2.png";
import exchangesIcon from "../assets/Exchanges.png";
import gamesIcon from "../assets/Games.png";
import marketPlacesIcon from "../assets/MarketPlaces.png";
import defiIcon from "../assets/Defi.png";
import collectiblesIcon from "../assets/Collectibles.png";
import utilitiesIcon from "../assets/Utilities.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  function recentRedirect() {
    navigate("/recent");
  }

  return (
    <>
      <div className="flex flex-col min-h-screen w-11/12 mx-auto my-3 bg-white lg:w-25 md:w-4/12">
        <div className="relative flex justify-between items-center w-full h-12">
          <img
            className="absolute top-2.5 left-2.5 z-50"
            src={searchIcon}
            alt="search"
          />
          <input
            className="absolute h-10 top-0 left-0 outline-none border-none w-4/5 bg-neutral-100 pl-10 rounded-xl"
            type="text"
            placeholder="Search experiences"
          />
          <img
            className="absolute top-0 right-0 m-2"
            src={filterIcon}
            alt="filter"
          />
        </div>
        <p className="font-semibold tracking-wide text-zinc-700 mt-3.5 recentTag">
          Recent Experiences
        </p>
        <div className="flex flex-col w-full f cursor-pointer">
          <div
            onClick={() => recentRedirect()}
            className="flex justify-between items-center w-full my-3 mx-0"
          >
            <img className="w-18 h-18" src={logo1} alt="logo" />
            <div className="w-11/12 ml-5">
              <p className="font-semibold text-zinc-700">DeFi Swap</p>
              <p className="text-zinc-700 text-sm">Swap your digital assets</p>
              <span className="text-blue-500">+200 users</span>
            </div>
            <img src={rightArrowIcon} alt="arrow" />
          </div>

          <div
            onClick={() => recentRedirect()}
            className="flex justify-between items-center w-full my-0.5 mx-0"
          >
            <img className="w-18 h-18" src={logo2} alt="logo" />
            <div className="w-11/12 ml-5">
              <p className="font-semibold text-zinc-700">Docu sign</p>
              <p className="text-zinc-700 text-sm">
                sign smart contracts seamlessly
              </p>
              <span className="text-blue-500">+1K users</span>
            </div>
            <img src={rightArrowIcon} alt="arrow" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-3.5 w-full">
          <p className="font-semibold tracking-wide text-zinc-700 categoryTag">
            Popular Categories
          </p>
          <div className="flex items-center">
            <p className="m-2.5 text-violet-500 font-medium">See All</p>
            <img className="w-18 h-18" src={rightArrowColorIcon} alt="arrow" />
          </div>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="flex flex-col mx-auto my-2 p-2.5 h-5/12 w-5/12 bg-indigo-50 rounded-lg">
            <img
              className="w-10 h-10 mb-4"
              src={exchangesIcon}
              alt="exchanges"
            />
            <div className="relative flex justify-between items-center">
              <p>Exchanges</p>
              <img src={rightArrowIcon} alt="arrow" />
            </div>
          </div>
          <div className="flex flex-col mx-auto my-2 p-2.5 h-5/12 w-5/12 bg-zinc-100 rounded-lg">
            <img className="w-10 h-10 mb-4" src={gamesIcon} alt="games" />
            <div className="relative flex justify-between items-center">
              <p>Games</p>
              <img src={rightArrowIcon} alt="arrow" />
            </div>
          </div>
          <div className="flex flex-col mx-auto my-2 p-2.5 h-5/12 w-5/12 bg-emerald-50 rounded-lg">
            <img
              className="w-10 h-10 mb-4"
              src={marketPlacesIcon}
              alt="marketplaces"
            />
            <div className="relative flex justify-between items-center">
              <p>Marketplaces</p>
              <img src={rightArrowIcon} alt="arrow" />
            </div>
          </div>
          <div className="flex flex-col mx-auto my-2 p-2.5 h-5/12 w-5/12 bg-orange-50 rounded-lg">
            <img className="w-10 h-10 mb-4" src={defiIcon} alt="defi" />
            <div className="relative flex justify-between items-center">
              <p>Defi</p>
              <img src={rightArrowIcon} alt="arrow" />
            </div>
          </div>
          <div className="flex flex-col mx-auto my-2 p-2.5 h-5/12 w-5/12 bg-blue-100 rounded-lg">
            <img
              className="w-10 h-10 mb-4"
              src={collectiblesIcon}
              alt="collectibles"
            />
            <div className="relative flex justify-between items-center">
              <p>Collectibles</p>
              <img src={rightArrowIcon} alt="arrow" />
            </div>
          </div>
          <div className="flex flex-col mx-auto my-2 p-2.5 h-5/12 w-5/12 bg-violet-100 rounded-lg">
            <img
              className="w-10 h-10 mb-4"
              src={utilitiesIcon}
              alt="utilities"
            />
            <div className="relative flex justify-between items-center">
              <p>Utilities</p>
              <img src={rightArrowIcon} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

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
      <div className="homepageContainer">
        <div className="headerSection">
          <div className="searchSection">
            <img src={searchIcon} alt="search" />
            <input type="text" placeholder="Search experiences" />
          </div>
          <div className="filterIcon">
            <img src={filterIcon} alt="filter" />
          </div>
        </div>
        <p className="recentTag">Recent Experiences</p>
        <div className="recentSection">
          <div onClick={() => recentRedirect()} className="recentInfo">
            <img className="logo" src={logo1} alt="logo" />
            <div className="recentData">
              <p>DeFi Swap</p>
              <p className="recentDescription">Swap your digital assets</p>
              <span>+200 users</span>
            </div>
            <img className="rightArrow" src={rightArrowIcon} alt="arrow" />
          </div>

          <div onClick={() => recentRedirect()} className="recentInfo">
            <img className="logo" src={logo2} alt="logo" />
            <div className="recentData">
              <p>Docu sign</p>
              <p className="recentDescription">
                sign smart contracts seamlessly
              </p>
              <span>+1K users</span>
            </div>
            <img src={rightArrowIcon} alt="arrow" />
          </div>
        </div>
        <div className="categoryHeader">
          <p className="categoryTag">Popular Categories</p>
          <div className="seeAllTag">
            <p>See all</p>
            <img src={rightArrowColorIcon} alt="arrow" />
          </div>
        </div>
        <div className="categoryCards">
          <div className="card c1">
            <img src={exchangesIcon} alt="exchanges" />
            <div className="categoryInfo">
              <p>Exchanges</p>
              <img src={rightArrowIcon} alt="arrow" />
            </div>
          </div>
          <div className="card c2">
            <img src={gamesIcon} alt="games" />
            <div className="categoryInfo">
              <p>Games</p>
              <img src={rightArrowIcon} alt="arrow" />
            </div>
          </div>
          <div className="card c3">
            <img src={marketPlacesIcon} alt="marketplaces" />
            <div className="categoryInfo">
              <p>Marketplaces</p>
              <img src={rightArrowIcon} alt="arrow" />
            </div>
          </div>
          <div className="card c4">
            <img src={defiIcon} alt="defi" />
            <div className="categoryInfo">
              <p>Defi</p>
              <img src={rightArrowIcon} alt="arrow" />
            </div>
          </div>
          <div className="card c5">
            <img src={collectiblesIcon} alt="collectibles" />
            <div className="categoryInfo">
              <p>Collectibles</p>
              <img src={rightArrowIcon} alt="arrow" />
            </div>
          </div>
          <div className="card c6">
            <img src={utilitiesIcon} alt="utilities" />
            <div className="categoryInfo">
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

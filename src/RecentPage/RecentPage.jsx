import React, { useState } from "react";
import logo2 from "../assets/Logo2.png";
import shareIcon from "../assets/Share.png";
import sendIcon from "../assets/Send.png";
import usersIcon from "../assets/Users.png";
import "./RecentPage.css";

const RecentPage = () => {
  const [selectedValue, setSelectedValue] = useState(1);

  return (
    <>
      <div className="headerOverlay"></div>
      <div className="recentContainer">
        <img src={logo2} alt="defi" />
        <div className="shareSection">
          <img src={shareIcon} alt="share" />
          <a href="" alt="share">Share</a>
        </div>
      </div>
      <div className="septateRecentDescription space-y-2">
        <p className="mt-6">Docu sign</p>
        <span>sign smart contracts seamlessly</span>
        <span className="recentCategory">Utilities</span>
        <div className="userCount">
          <div className="openBtn">
            <span>Open</span>
            <img src={sendIcon} alt="send" />
          </div>
          <img className="userIcon" src={usersIcon} alt="users" />
          <div className="usersNumber">
            24,000+ <span>users</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 text-center">
        <p className={selectedValue === 1 ? "border-b-4 border-b-slate-700" : ""} onClick={() => setSelectedValue(1)}>Info</p>
        <p className={selectedValue === 2 ? "border-b-4 border-b-slate-700" : ""} onClick={() => setSelectedValue(2)}>Pending Offers</p>
      </div>
      <div>
        {selectedValue === 1 && <div className="space-y-4 m-4">
          <h3>Overview</h3>
          <p>it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime- paperlessly. </p>
        </div>}
        {selectedValue === 2 && <div className="m-5">
          <p className="text-center my-5">12 Activities Found</p>
          <div className="space-y-4">
            <div className="flex">
              <img
                className="rounded-full border border-gray-100 shadow-sm h-10"
                src="https://randomuser.me/api/portraits/women/81.jpg"
                alt="userImage"
              />
              <div className="mx-2">
                <p><span className="text-slate-400">johdoe.near</span>signed the contract successfully</p>
                <p>2 days ago</p>
              </div>
            </div>
            <div className="flex">
              <img
                className="rounded-full border border-gray-100 shadow-sm h-10"
                src="https://randomuser.me/api/portraits/women/81.jpg"
                alt="userImage"
              />
              <div className="mx-2">
                <p><span className="text-slate-400">CryptoKing.near </span>requested to sign the contract</p>
                <p>2 days ago</p>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </>
  );
};

export default RecentPage;

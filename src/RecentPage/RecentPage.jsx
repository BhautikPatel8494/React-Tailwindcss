import React, { useState } from "react";
import logo2 from "../assets/Logo2.png";
import shareIcon from "../assets/Share.png";
import sendIcon from "../assets/Send.png";
import usersIcon from "../assets/Users.png";
import profile1 from "../assets/profileOverview.png";
import profile2 from "../assets/mainProfile.png";
import "./RecentPage.css";

const RecentPage = () => {
  const [selectedValue, setSelectedValue] = useState(1);

  return (
    <div className="flex flex-col min-h-screen mx-auto bg-white lg:w-25 md:w-4/12">
      <div className="h-14 w-full bg-purple-200"></div>
      <div className="flex justify-between w-11/12 mx-auto -mt-7">
        <img src={logo2} alt="defi" />
        <div className="flex justify-center items-center mt-8">
          <img className="h-18 w-18 mr-2" src={shareIcon} alt="share" />
          <p className="text-blue-600 font-semibold tracking-wide">Share</p>
        </div>
      </div>
      <div className="flex flex-col w-11/12 mx-auto my-0">
        <p className="mt-6 font-semibold">Docu sign</p>
        <span className="m-0 font-medium text-gray-500">
          sign smart contracts seamlessly
        </span>
        <span className="mt-2 text-base font-medium text-blue-600">
          Utilities
        </span>
        <div className="flex items-center mt-5">
          <div className="relative flex items-center w-2/6 h-10 cursor-pointer bg-zinc-800 rounded-xl">
            <span className="absolute top-0 left-0 my-2 mx-3 tracking-wide font-medium text-white">
              Open
            </span>
            <img className="absolute right-1.5" src={sendIcon} alt="send" />
          </div>
          <img className="h-4 w-4 ml-3" src={usersIcon} alt="users" />
          <div className="m-2 text-gray-500">
            24,000+ <span>users</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-5 text-center">
        <p
          className={
            selectedValue === 1
              ? "border-b-4 border-b-slate-700 pb-4 text-gray-800 font-semibold cursor-pointer"
              : "border-b-2 text-gray-500 pb-4 cursor-pointer"
          }
          onClick={() => setSelectedValue(1)}
        >
          Details
        </p>
        <p
          className={
            selectedValue === 2
              ? "border-b-4 border-b-slate-700 pb-4 text-gray-800 font-semibold cursor-pointer"
              : "border-b-2 text-gray-500 pb-4 cursor-pointer"
          }
          onClick={() => setSelectedValue(2)}
        >
          Activities
        </p>
      </div>
      <div>
        {selectedValue === 1 && (
          <div className="space-y-4 m-4">
            <h3>Overview</h3>
            <p>
              it is easy to electronically sign, manage and distribute all your
              contracts and documents safely, securely, anywhere, anytime-
              paperlessly.
            </p>
          </div>
        )}
        {selectedValue === 2 && (
          <div className="m-5">
            <p className="text-center my-5">12 Activities Found</p>
            <div className="space-y-4">
              <div className="flex">
                <img
                  className="rounded-full border border-gray-100 shadow-sm h-10"
                  src={profile1}
                  alt="userImage"
                />
                <div className="mx-2">
                  <p>
                    <span className="text-slate-400">johdoe.near</span> signed
                    the contract successfully
                  </p>
                  <p>2 days ago</p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="rounded-full border border-gray-100 shadow-sm h-10"
                  src={profile2}
                  alt="userImage"
                />
                <div className="mx-2">
                  <p>
                    <span className="text-slate-400">CryptoKing.near </span>
                    requested to sign the contract
                  </p>
                  <p>2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentPage;

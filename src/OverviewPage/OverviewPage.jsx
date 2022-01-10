import React, { useState } from 'react'

function OverviewPage() {
    const [selectedValue, setSelectedValue] = useState(1)
    return (
        <div className="flex flex-col min-h-screen w-11/12 mx-auto bg-white lg:w-25 md:w-4/12">
            <div className="p-4">
                <div className="space-y-1 py-5">
                    <h3 className="font-semibold">Digital Ninja</h3>
                    <p className="text-blue-500">#72873</p>
                    <div class="flex items-center">
                        <img
                            class="rounded-full border border-gray-100 shadow-sm"
                            src="https://randomuser.me/api/portraits/women/81.jpg"
                            height="50"
                            width="50"
                            alt="userImage"
                        />
                        <p className="ml-2 font-semibold">JohnDoe.near</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 text-center">
                    <p className={selectedValue === 1 ? "border-b-4 border-b-slate-700" : ""} onClick={() => setSelectedValue(1)}>Info</p>
                    <p className={selectedValue === 2 ? "border-b-4 border-b-slate-700" : ""} onClick={() => setSelectedValue(2)}>Pending Offers</p>
                    <p className={selectedValue === 3 ? "border-b-4 border-b-slate-700" : ""} onClick={() => setSelectedValue(3)}>Trade History</p>
                </div>
                <hr />
                <div>
                    {
                        selectedValue === 1 && <div className="info mt-5">
                            <div className="space-y-4">
                                <h3>Overview</h3>
                                <p>digital ninjas are a collection of 1000 unique collectibles on the NEAR blockchain that serve to honor and preserve art.</p>
                            </div>
                        </div>
                    }
                    {
                        selectedValue === 2 && <div className="info">
                            <p className="my-5">2 active offer</p>
                            <div className="space-y-4">
                                <div className="flex">
                                    <img
                                        className="rounded-full border border-gray-100 shadow-sm h-10"
                                        src="https://randomuser.me/api/portraits/women/81.jpg"
                                        alt="userImage"
                                    />
                                    <div className="mx-2 space-y-1">
                                        <p><span className="text-slate-400">Lorem ipsum</span> dolor sit amet, consectetur <span className="font-semibold">0.345 NEAR</span></p>
                                        <p>5 days ago</p>
                                        <div className="flex justify-between">
                                            <button className="bg-slate-800 text-white rounded px-5">Accept</button>
                                            <button className="bg-slate-800 text-white rounded px-5">Counter offer</button>
                                            <button className="border-2 border-black rounded px-5">Reject</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <img
                                        className="rounded-full border border-gray-100 shadow-sm h-10"
                                        src="https://randomuser.me/api/portraits/women/81.jpg"
                                        alt="userImage"
                                    />
                                    <div className="mx-2 space-y-1">
                                        <p><span className="text-slate-400">Lorem ipsum</span> dolor sit amet, consectetur <span className="font-semibold">0.345 NEAR</span></p>
                                        <p>5 days ago</p>
                                        <div className="flex justify-between">
                                            <button className="bg-slate-800 text-white rounded px-5">Accept</button>
                                            <button className="bg-slate-800 text-white rounded px-5">Counter offer</button>
                                            <button className="border-2 border-black rounded px-5">Reject</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <img
                                        className="rounded-full border border-gray-100 shadow-sm h-10"
                                        src="https://randomuser.me/api/portraits/women/81.jpg"
                                        alt="userImage"
                                    />
                                    <div className="mx-2 space-y-1">
                                        <p><span className="text-slate-400">Lorem ipsum</span> dolor sit amet, consectetur <span className="font-semibold">0.345 NEAR</span></p>
                                        <p>5 days ago</p>
                                        <div className="flex justify-between">
                                            <button className="bg-slate-800 text-white rounded px-5">Accept</button>
                                            <button className="bg-slate-800 text-white rounded px-5">Counter offer</button>
                                            <button className="border-2 border-black rounded px-5">Reject</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        selectedValue === 3 && <div className="info mt-5">
                            <div className="space-y-4">
                                <div className="flex">
                                    <img
                                        className="rounded-full border border-gray-100 shadow-sm h-10"
                                        src="https://randomuser.me/api/portraits/women/81.jpg"
                                        alt="userImage"
                                    />
                                    <div className="mx-2">
                                        <p>johdoe.near bought #72873 from <span className="text-slate-400">ninjaking.near</span></p>
                                        <p>5 days ago</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <img
                                        className="rounded-full border border-gray-100 shadow-sm h-10"
                                        src="https://randomuser.me/api/portraits/women/81.jpg"
                                        alt="userImage"
                                    />
                                    <div className="mx-2">
                                        <p><span className="text-slate-400">ninjaking.near</span> minted #72873</p>
                                        <p>3 months ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default OverviewPage

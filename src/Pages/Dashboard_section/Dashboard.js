import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import './Dashboard.css'

import sound from './Icons/sound.png'
import home from './Icons/home.png'
import explore from './Icons/explore.png'
import save from './Icons/saved.png'
import cart from './Icons/cart.png'
import selling from './Icons/selling.png'
import profile from './Icons/profile.png'
import history from './Icons/history.png'
import contactUs from './Icons/contactus.png'
import setting from './Icons/setting.png'
import frame from './Icons/Frame .png'
import MainBody from '../Main_Body_Section/MainBody';


const Dashboard = () => {
    return (
        <>
            <div className="drawer drawer-mobile">
                <input id="dashboard-slidder" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Navbar></Navbar>
                    <MainBody></MainBody>
                    <Outlet></Outlet>
                    {/* <!-- Page content here --> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-slidder" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                        <div className="avatar placeholder flex items-center justify-center gap-4 mb-16">
                            <div className="rounded-full w-10 h-10  ">
                                <span className="text-xs">
                                    <img src={sound} alt="" srcset="" />
                                </span>
                            </div>
                            <h2 className='text-lg '>MK Sound</h2>
                        </div>

                        {/* <!-- Sidebar content here --> */}
                        <li className='hover:text-white hover:bg-[#09FB5B] rounded-xl'>
                            <Link to='/dashboard'>
                                <div className="avatar placeholder">
                                    <div className="rounded-full w-8 ">
                                        <span className="text-xs">
                                            <img src={home} alt="" srcset="" />
                                        </span>
                                    </div>
                                </div>
                                Home
                            </Link>
                        </li>
                        <li className='hover:text-white hover:bg-[#09FB5B] rounded-xl'>
                            <Link to='/dashboard'>
                                <div className="avatar placeholder">
                                    <div className="rounded-full w-8 ">
                                        <span className="text-xs">
                                            <img src={explore} alt="" srcset="" />
                                        </span>
                                    </div>
                                </div>
                                Explore
                            </Link>
                        </li>
                        <li className='hover:text-white hover:bg-[#09FB5B] rounded-xl'>
                            <Link to='/dashboard'>
                                <div className="avatar placeholder">
                                    <div className="rounded-full w-8 ">
                                        <span className="text-xs">
                                            <img src={save} alt="" srcset="" />
                                        </span>
                                    </div>
                                </div>
                                Saved
                            </Link>
                        </li>
                        <li className='hover:text-white hover:bg-[#09FB5B] rounded-xl'>
                            <Link to='/dashboard'>
                                <div className="avatar placeholder">
                                    <div className="rounded-full w-8 ">
                                        <span className="text-xs">
                                            <img src={cart} alt="" srcset="" />
                                        </span>
                                    </div>
                                </div>
                                Cart
                            </Link>
                        </li>
                        <li className='hover:text-white hover:bg-[#09FB5B] rounded-xl'>
                            <Link to='/dashboard'>
                                <div className="avatar placeholder">
                                    <div className="rounded-full w-8 ">
                                        <span className="text-xs">
                                            <img src={selling} alt="" srcset="" />
                                        </span>
                                    </div>
                                </div>
                                Selling
                            </Link>
                        </li>
                        <li className='hover:text-white hover:bg-[#09FB5B] rounded-xl'>
                            <Link to='/dashboard'>
                                <div className="avatar placeholder">
                                    <div className="rounded-full w-8 ">
                                        <span className="text-xs">
                                            <img src={profile} alt="" srcset="" />
                                        </span>
                                    </div>
                                </div>
                                Profile
                            </Link>
                        </li>
                        <li className='hover:text-white hover:bg-[#09FB5B] rounded-xl'>
                            <Link to='/dashboard'>
                                <div className="avatar placeholder">
                                    <div className="rounded-full w-8 ">
                                        <span className="text-xs">
                                            <img src={history} alt="" srcset="" />
                                        </span>
                                    </div>
                                </div>
                                History
                            </Link>
                        </li>
                        <li className='hover:text-white hover:bg-[#09FB5B] rounded-xl'>
                            <Link to='/dashboard'>
                                <div className="avatar placeholder">
                                    <div className="rounded-full w-8 ">
                                        <span className="text-xs">
                                            <img src={contactUs} alt="" srcset="" />
                                        </span>
                                    </div>
                                </div>
                                Contact us
                            </Link>
                        </li>
                        <li className='hover:text-white hover:bg-[#09FB5B] rounded-xl'>
                            <Link to='/dashboard'>
                                <div className="avatar placeholder">
                                    <div className="rounded-full w-8 ">
                                        <span className="text-xs">
                                            <img src={setting} alt="" srcset="" />
                                        </span>
                                    </div>
                                </div>
                                Setting
                            </Link>
                        </li>
                    </ul>
                    <div className='bottom_frame'>
                        <img src={frame} alt="" srcset="" />

                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
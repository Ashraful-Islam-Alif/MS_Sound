import React from 'react';
import './Navbar.css'

import mail from '../Dashboard_section/Icons/email.png'
import alarm from '../Dashboard_section/Icons/alarm.png'
import customer from '../Dashboard_section/Icons/customer.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className='text-center'>
                    <h2 className='text-4xl'>Headphone</h2>
                    <p className='text-lg'>For the top band</p>
                </div>
            </div>
            <div className="navbar-end">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
                <span className=" icon-color grid justify-center items-center ml-2">
                    <img src={mail} alt="" srcset="" />
                </span>
                <span className=" icon-color grid justify-center items-center ml-2">
                    <img src={alarm} alt="" srcset="" />
                </span>
                <span className=" icon-color grid justify-center items-center ml-2">
                    <img src={customer} alt="" srcset="" />
                </span>
            </div>

            <div className="navbar-end">
                <label tabIndex={1} htmlFor="dashboard-slidder" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;
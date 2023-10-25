import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import UseAdmin from '../Hook/UseAdmin';
import UseInstructor from '../Hook/UseInstructor';
import { useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = UseAdmin();
    const [isInstructor] = UseInstructor();
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    useEffect(() => {
        if (isDarkMode) {
          document.body.style.backgroundColor = "black";
          document.body.style.color = "gray";
        } else {
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
        }
      }, [isDarkMode]);

    // console.log(user?.photoURL);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItem = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/instructors">Instructors</NavLink></li>
        <li><NavLink to="/classes">Classes</NavLink></li>
        {
            user ?
                <>
                    {isAdmin ?
                        <li><NavLink to="/dashboard/manageUsers">Dashboard</NavLink></li> :
                        isInstructor ?
                            <li><NavLink to="/dashboard/addClasses">Dashboard</NavLink></li> :
                            <li><NavLink to="/dashboard/myCart">Dashboard</NavLink></li>
                    }
                    <img className='w-[40px] h-[40px] rounded-full z-50 me-5' src={user?.photoURL} alt="" />
                    <li><button onClick={handleLogout} className='btn bg-[#6a9955] pt-4 text-white border-0'>LogOut</button></li>
                </>
                : <>
                    <li><NavLink to="/login">Login</NavLink></li>
                </>
        }
    </>
    return (
        <div className="navbar fixed z-10 md:px-10 bg-black bg-opacity-30 text-white items-center w-full">
            <div className="navbar-start items-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {navItem}
                    </ul>
                </div>
                <a className="text-2xl font-semibold  text-center text-[#6a9955] z-50">
                    Summer Camp <br />  <span className="text-xl font-light text-white border-t-2">Music School</span>
                </a>
            </div>
            <div className="navbar-end hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div>
            <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={60}
      className='h-full'
    />
            </div>
        </div>
    );
};

export default Header;
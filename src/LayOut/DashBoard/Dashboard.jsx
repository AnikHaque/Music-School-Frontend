import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaCalendarCheck, FaCheckSquare, FaFirstdraft, FaHome,  FaItunes,  FaMusic, FaUser } from 'react-icons/fa';
import UseAdmin from '../../Hook/UseAdmin';
import UseInstructor from '../../Hook/UseInstructor';

const Dashboard = () => {
    
    const [isAdmin] = UseAdmin();
    const [isInstructor] = UseInstructor();

    return (
        <div>
            <Helmet>
                <title>SummerCamp || DashBoard</title>
            </Helmet>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn bg-[#6a9955] text-white drawer-button lg:hidden">Open drawer</label>
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-[#6a9955]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full">
                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/manageUsers"><FaUser></FaUser> Manage Users</NavLink></li>
                                <li><NavLink to="/dashboard/manageClasses"><FaItunes></FaItunes> Manage Classes</NavLink></li>
                            </> :
                            isInstructor ? <>
                            <li><NavLink to="/dashboard/addClasses"><FaMusic></FaMusic> Add Classes</NavLink></li>
                            <li><NavLink to="/dashboard/myClasses"><FaFirstdraft></FaFirstdraft> My Classes</NavLink></li>
                        </> : 
                             <>
                            <li><NavLink to="/dashboard/myCart"><FaCheckSquare></FaCheckSquare> My Selected Classes</NavLink></li>
                            <li><NavLink to="/dashboard/myEnroll"><FaCalendarCheck></FaCalendarCheck> My Enrolled Classes</NavLink></li>
                        </> 
                        }
                        {/* Sidebar content here */}

                        <div className='divider'></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to="/instructors"><FaUser></FaUser> Instructors</NavLink></li>
                        <li><NavLink to="/classes"><FaBook></FaBook> Classes</NavLink></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;
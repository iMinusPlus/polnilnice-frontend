import React from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../context/userContext";

function AppBar() {
    const {user} = UserContext;
    return (

        <div className="navbar bg-base-100 text-white shadow-md">
            <div className="navbar-start">
                <Link className="navbar-brand" to="/">
                    <img src="/Elektropolnilnice_FullColor_NoBg_Symbol_2010x1080.png" alt="Logo" className="h-[50px]"/>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="join">
                    <div><Link className="btn join-item text-white" to="/">Home</Link></div>
                    <div><Link className="btn join-item text-white" to="/user">User</Link></div>
                    <div><Link className="btn join-item text-white" to="/polnilnice">Polnilnice</Link></div>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex gap-2">
                {!user && (
                    <div className="join">
                        <div><Link className="btn text-white join-item" to="/login">Login</Link></div>
                        <div><Link className="btn text-white join-item" to="/register">Register</Link></div>
                    </div>
                )}
                {user && (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component"
                                     src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                            </div>
                        </div>
                        <ul tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between" to={"/"}>
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to={"/"}>Settings</Link></li>
                            <li><Link to={"/"}>Logout</Link></li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="navbar-end lg:hidden flex-grow">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16m-7 6h7"/>
                        </svg>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/user">User</Link></li>
                        <li><Link to="/polnilnice">Polnilnice</Link></li>
                        {!user && (
                            <>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </>
                        )}
                    </ul>
                </div>
                {user && (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component"
                                     src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                            </div>
                        </div>
                        <ul tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between" to={"/"}>
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to={"/"}>Settings</Link></li>
                            <li><Link to={"/"}>Logout</Link></li>
                        </ul>
                    </div>
                )}

            </div>
        </div>


    );
}

export default AppBar;
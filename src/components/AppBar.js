import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

function AppBar() {
    const [token, setToken] = useState('')
    const {userData, setUserContext} = useContext(UserContext);

    useEffect(() => {
        const storedToken = localStorage.getItem('jwt-token');
        if (storedToken) {
            setToken(storedToken);
            fetch('http://elektropolnilnice.eu:3000/users/protected', {
                headers: {
                    'jwt-token': storedToken,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setUserContext(data); // Shrani podatke v UserContext
                })
                .catch((err) => {
                    console.error('Error fetching protected route:', err);
                });
        }
    }, []);

    function logout() {
        setToken('')
        localStorage.removeItem('jwt-token')
        window.location.href = "/";
    }

    return (
        <div className="navbar bg-base-100 text-white shadow-md">
            <div className="navbar-start">
                <Link className="navbar-brand" to="/">
                    <img src="/Elektropolnilnice_FullColor_NoBg_Symbol_2010x1080.png" alt="Logo" className="h-[50px]" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="join">
                    <div><Link className="btn join-item text-white" to="/">Home</Link></div>
                    <div><Link className="btn join-item text-white" to="/">Statistics</Link></div>
                    <div><Link className="btn join-item text-white" to="/polnilnice">Polnilnice</Link></div>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex gap-2">
                {!token && (
                    <div className="join">
                        <div><Link className="btn text-white join-item" to="/login">Login</Link></div>
                        <div><Link className="btn text-white join-item" to="/register">Register</Link></div>
                    </div>
                )}
                {token && (
                    <div className="dropdown dropdown-end flex items-center space-x-2 relative">
                        <div className="badge badge-neutral badge-lg">Hi, {userData.username}!</div>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="User Avatar"
                                     src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                            </div>
                        </div>
                        <ul tabIndex={0}
                            className="dropdown-menu absolute top-full mt-2 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between" to="/user">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to="/">Settings</Link></li>
                            <li>
                                <button onClick={logout}>Logout</button>
                            </li>
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
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Statistics</Link></li>
                        <li><Link to="/polnilnice">Polnilnice</Link></li>
                        {!token && (
                            <>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </>
                        )}
                    </ul>
                </div>
                {token && (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="User Avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between" to="/user">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to="/">Settings</Link></li>
                            <li><button onClick={logout}>Logout</button></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AppBar;

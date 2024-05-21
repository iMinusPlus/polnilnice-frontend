import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function AppBar() {
    return (
        <header className="AppBar">
            <div className="navbar bg-base-100 text-white ps-3 pe-4 shadow-md ">
                <div className="">
                    <Link className="navbar-brand" to="/">
                        <img src="/Elektropolnilnice_FullColor_NoBg_Symbol_2010x1080.png"
                             alt="Logo" className=" h-[50px]" />
                    </Link>
                </div>
                <div className="">
                    <div><Link className="btn text-white" to="/">Home</Link></div>
                    <div ><Link className="btn text-white" to="/user">User</Link></div>
                </div>
            </div>
        </header>
    );
}

export default AppBar;
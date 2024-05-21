import React from "react";
import {Link} from "react-router-dom";

function AppBar() {
    return (

            <div className="navbar bg-base-100 text-white ps-3 pe-4 shadow-md ">
                <div className="navbar-start">
                    <Link className="navbar-brand" to="/">
                        <img src="/Elektropolnilnice_FullColor_NoBg_Symbol_2010x1080.png"
                             alt="Logo" className=" h-[50px]" />
                    </Link>
                </div>
                <div className="navbar-center">
                    <div><Link className="btn text-white" to="/">Home</Link></div>
                    <div ><Link className="btn text-white" to="/user">User</Link></div>
                    <div ><Link className="btn text-white" to="/polnilnice">Polnilnice</Link></div>
                </div>
                <div className={"navbar-end"}>
                    <p>1</p>
                </div>
            </div>

    );
}

export default AppBar;
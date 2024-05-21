import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function AppBar() {
    return (
        <header className="AppBar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" style={styles.navItem}>
                            <Link className="navbar-brand" to="/">
                                <img src="/Elektropolnilnice_FullColor_NoBg_Symbol_2010x1080.png" alt="Logo" height="30" className="d-inline-block align-top" />
                            </Link>
                        </li>
                        <li className="nav-item" style={styles.navItem}>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item" style={styles.navItem}>
                            <Link className="nav-link" to="/user">User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

const styles = {
    navItem: {
        marginRight: "1rem",
        fontWeight: "bold"
    }
}

export default AppBar;
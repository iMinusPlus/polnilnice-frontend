import React from "react";
import {Link} from "react-router-dom";

function AppBar() {
    return (
        <header className="AppBar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav ms-auto" style={styles.navbar}>
                    <li className="nav-item" style={styles.navItem}><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item" style={styles.navItem}><Link className="nav-link" to="/user">User</Link></li>
                </ul>
            </nav>
        </header>
    );
}

const styles = {
    navbar: {
        display: "flex",
        flexDirection: "row",
        listStyleType: "none",  // Ensure list items don't have bullets
        padding: 0,             // Remove default padding
        margin: 0,
    },
    navItem: {
        marginRight: "1rem",
    }
}

export default AppBar;
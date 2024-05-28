import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

function UserProfile() {
    const { userData } = useContext(UserContext);

    return (
        <div>
            <AppBar/>
            <div className="page-content text-center bg-neutral">
                <h1>User Profile</h1>
                <hr className="hr-gradient"/>
                <p>User ID: {userData.id}</p>
                <p>Username: {userData.username}</p>
            </div>
            <Footer/>
        </div>
    );
}

export default UserProfile;

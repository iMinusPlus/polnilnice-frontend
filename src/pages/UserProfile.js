import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

function UserProfile() {
    const { userData } = useContext(UserContext);
    const [username, setUsername] = useState(userData.username || "");
    const [email, setEmail] = useState(userData.email || "");
    const [password, setPassword] = useState("");

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        // Implementirajte logiko za posodabljanje profila (uporabniško ime, e-pošta, geslo)
    };

    return (
        <div>
            <AppBar />
                <div className={"page-content bg-neutral"}>
                    <div className={"max-w-3xl mx-auto"}>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure className={"w-60"}><img
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                alt="Movie"
                                className="w-full h-full object-cover"
                            /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{userData.username} profile!</h2>
                                <p className={"text-error"}>UNDER CONSTRUCTION</p>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default UserProfile;

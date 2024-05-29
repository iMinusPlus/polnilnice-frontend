import React, {useContext, useState} from "react";
import { UserContext } from "../context/userContext";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import CurrentTime from "./CurrentTime";

function Settings() {
    const { userData } = useContext(UserContext);
    const [username, setUsername] = useState(userData.username || "");
    const [email, setEmail] = useState(userData.email || "");
    const [password, setPassword] = useState("");

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        // Implementirajte logiko za posodabljanje profila (uporabniško ime, e-pošta, geslo)
    };

    return (
        <div className="flex flex-col min-h-screen">
            <AppBar/>
            <div className="bg-neutral flex-grow">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <br/>
                    <div className="grid grid-rows-4 grid-cols-3 gap-4">
                        <div className="row-span-4 col-span-1 ">
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                    alt="Shoes"/></figure>
                                <div className="card-body">
                                    <div className="card-actions justify-end">
                                        <button className="btn bg-gradient-rainbow">Change picture</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-span-4 col-span-2 ">
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">User Profile</h2>
                                    <form onSubmit={handleUpdateProfile}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Username</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Username"
                                                className="input input-bordered"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="input input-bordered"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn bg-gradient-rainbow" type="submit">
                                                Update Profile
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row-span-4 col-span-1 px-4 flex flex-col items-center justify-center">
                            <label className="flex cursor-pointer gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5"/>
                                    <path
                                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                                </svg>
                                <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </label>
                            <br/>
                            <CurrentTime/>
                        </div>
                        <div className="row-span-4 col-span-2">
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Change password</h2>
                                    <form onSubmit={handleUpdateProfile}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Old password</span>
                                            </label>
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                className="input input-bordered"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">New password</span>
                                            </label>
                                            <input
                                                type="password"
                                                placeholder="New password"
                                                className="input input-bordered"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Rewrite new password</span>
                                            </label>
                                            <input
                                                type="password"
                                                placeholder="New password"
                                                className="input input-bordered"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn bg-gradient-rainbow" type="submit">
                                                Change password
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>

            <Footer/>
        </div>
    );
}

export default Settings;

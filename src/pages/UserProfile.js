import React, {useContext} from "react";
import { UserContext } from "../context/userContext";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import CurrentTime from "./CurrentTime";

function UserProfile() {
    const { userData } = useContext(UserContext);
    return (
        <div className="flex flex-col min-h-screen">
            <AppBar />
            <div className="flex-grow flex flex-col items-center bg-neutral">
                <div className="max-w-3xl w-full mx-auto my-8 px-4">
                    <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
                        <figure className="w-full md:w-60 h-60 md:h-auto flex-shrink-0">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                alt="Avatar"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body flex flex-col justify-center">
                            <h1 className="card-title text-center md:text-left">{userData.username} profile!</h1>
                            <hr className="hr-gradient my-4"/>
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <tbody>
                                    <tr>
                                        <th className="text-left px-4 py-2">User name:</th>
                                        <td className="text-left px-4 py-2">{userData.username}</td>
                                    </tr>
                                    <tr>
                                        <th className="text-left px-4 py-2">E-mail:</th>
                                        <td className="text-left px-4 py-2">{userData.email}</td>
                                    </tr>
                                    <tr>
                                        <th className="text-left px-4 py-2">User ID:</th>
                                        <td className="text-left px-4 py-2">{userData._id}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <CurrentTime/>
            </div>
            <Footer/>
        </div>
    );
}

export default UserProfile;

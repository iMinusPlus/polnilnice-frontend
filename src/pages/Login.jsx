import AppBar from "../components/AppBar";
import {useState} from "react";
import Footer from "../components/Footer";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function Login(e){
        e.preventDefault();
        const res = await fetch("https://elektropolnilnice.eu:3000/users/login", {
            method: "POST",
            credentials: "include",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        const data = await res.json();
        if (data.message === 'Login successful') {
            localStorage.setItem('jwt-token', data.token)
            setUsername('')
            setPassword('')
            window.location.href = "/";
        } else {
            alert(data.message)
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            <AppBar/>
            <div className="flex flex-1 justify-center items-center bg-neutral text-center">
                <div>
                    <h1 className={"text-4xl drop-shadow-md"}>LOGIN</h1>
                    <div className="card w-96 bg-base-100 shadow-xl mt-4">
                        <div>
                            <form className={"card-body"} onSubmit={Login}>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                         className="w-4 h-4 opacity-70">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                                    </svg>
                                    <input
                                        type="text"
                                        className="grow"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                         className="w-4 h-4 opacity-70">
                                        <path fillRule="evenodd"
                                              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <input
                                        type="password"
                                        className="grow"
                                        placeholder={"Password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </label>
                                <div className="card-actions justify-end">
                                    <button
                                        type="submit"
                                        className="btn bg-gradient-rainbow text-white">Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default Login;
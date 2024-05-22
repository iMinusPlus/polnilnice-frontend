import './App.css';
import HomePage from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import PolnilniceList from "./components/Polnilnice/PolnilniceList";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/user" element={<UserProfile/>}/>
                    <Route path={"/polnilnice"} element={<PolnilniceList/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/register"} element={<Register/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

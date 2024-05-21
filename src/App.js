import './App.css';
import HomePage from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserProfile from "./pages/UserProfile";

function App() {
    return (
        <BrowserRouter>
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/user" element={<UserProfile/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

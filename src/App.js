import './App.css';
import HomePage from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import PolnilniceList from "./components/Polnilnice/PolnilniceList";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/user" element={<UserProfile/>}/>
                    <Route path={"/polnilnice"} element={<PolnilniceList/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

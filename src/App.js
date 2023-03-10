import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import AnalysisPage from "./Analysis/Analysis";
import AccountPage from "../../../testing/front-end/src/AccountPage/Account";
import SettingsPage from "./Setting/Setting";
import Dashboard from "./Dashboard/Dashboard";
import Register from "./LoginSystem/Register/Register";
import Login from "./LoginSystem/Login/login";
import './App.css';

function App() {
    return (
        <Router>
            <div className="flex flex-row">
                <Sidebar/>
                <div className="w-full h-screen">
                    <Routes>
                        <Route path="/" exact element={<Dashboard/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/analysis" element={<AnalysisPage/>}/>
                        <Route path="/account" element={<AccountPage/>}/>
                        <Route path="/settings" element={<SettingsPage/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

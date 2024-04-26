import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import MainHomePage from "./Component/HomePage/MainHomePage";
import MainDashboard from "./Component/Dashboard/MainDashboard";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainHomePage />} />
                <Route path="/dashboard" element={<MainDashboard />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default App;

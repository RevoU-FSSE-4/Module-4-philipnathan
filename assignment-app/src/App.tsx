import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainHomePage from "./Component/HomePage/MainHomePage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" Component={MainHomePage} />
            </Routes>
        </div>
    );
}

export default App;

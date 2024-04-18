import React, { useState } from "react";
import "./index.css";
import MainForm from "./Component/MainForm";

function App() {
    const [currentPage, setCurretPage] = useState<number>(1);

    return (
        <>
            <MainForm />
        </>
    );
}

export default App;

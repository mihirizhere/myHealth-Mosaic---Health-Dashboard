import React, { useState } from "react";
//import { Link } from "react-router-dom";
import "./AlertPage.css"; // Import CSS file for styling
import NavBar from "./NavBar";

const AlertPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleEmergencyClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simulate 2 seconds loading time
    };

    return (
        <div className="page-container">
            <h1>Your close contacts have been alerted!</h1>
            <NavBar/>
            <p>If this is an emergency, click to call 911</p>
            <button className="loading-button" onClick={handleEmergencyClick}>
                {isLoading ? "Calling..." : "Call 911"}
            </button>
            {isLoading && <div>Loading...</div>}
        </div>
    );
};

export default AlertPage;

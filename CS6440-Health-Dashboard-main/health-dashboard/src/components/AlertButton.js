import React from 'react';
import { Link } from 'react-router-dom';
import './AlertButton.css';
function AlertButton() {
    return (
        <div className="button-container">
        <Link to="/alert">
            <button className="big-red-button">Alert!</button>
        </Link>
        </div>
    );
}
export default AlertButton;

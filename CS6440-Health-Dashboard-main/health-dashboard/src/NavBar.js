import {Link} from "react-router-dom";
import home_icon from './images/home_icon.svg';
import AlertButton from "./components/AlertButton";
import './NavBar.css';

const NavBar = () => {
    return(
        <div className="header">
            <div className="banner"> 
                myHealth Mosaic
            </div>
            <nav className="top-nav">
                <Link to='/'><img src = {home_icon} className = "home-icon" alt = "home"/></Link>
				<div className = "tabs">
                    <Link to="/medications" className="nav-button">Medications</Link>
                    <Link to="/careplans" className="nav-button">Care Plans</Link>
                    <Link to="/physician-info" className="nav-button">Physician Info</Link>
                </div>
                <AlertButton/>
		    </nav>
        </div>
    )
}

export default NavBar;

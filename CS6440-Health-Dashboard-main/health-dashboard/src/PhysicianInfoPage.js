import React from "react";
import "./PhysicianInfoPage.css"
import NavBar from "./NavBar";
import headshot1 from './images/headshot1.webp';
import headshot2 from './images/headshot2.jpeg';
import {useEHR} from "./EHRContext";

const PhysicianInfoPage = () => {
    const { patient, setPatient } = useEHR();

    const physician1 = [
		{ description: "Physical Exercises", status: "In-Progress" },
		{ description: "Ice Therapy", status: "In-Progress" },
		{ description: "Healthy Diet", status: "In-Progress" },
	];

    const physician2 = [
		{ description: "Diabetic Diet", status: "In-Progress" },
		{ description: "Exercise Therapy", status: "In-Progress" },
	];

    return (
        <div className="physician-info-container">
            <NavBar/>
            <header className="physician-info-header">
            </header>
            <main>
            <section className="physicianInfo1">
                    <div>
                        <h5>Dr. Ahn</h5>
                        <img src={headshot1} className="headshot1" width="200" alt=" "></img>
                    </div>
                    <ul>
                        {physician1.map((reason, index) => (
                            <li key={index}>
                                {reason.description} - {reason.status}
                            </li>
                        ))}
                    </ul>
                </section>


                <section className="physicianInfo2">
                    <div>
                        <h5>Dr. Smith</h5>
                        <img src={headshot2} className="headshot2" width="200" alt=" "></img>
                    </div>
                    <ul>
                        {physician2.map((reason, index) => (
                            <li key={index}>
                                {reason.description} - {reason.status}
                            </li>
                        ))}
                    </ul>
                </section>


            </main>
        </div>
    );
};

export default PhysicianInfoPage;

import React from "react";
import "./HomePage.css";
import { useEHR } from "./EHRContext";
import NavBar from "./NavBar";

const HomePage = () => {
	const { patient } = useEHR();
	console.log("Patient: ", patient);
	console.log(patient.length);
	if (patient.length === 0) {
		console.log("ran");
		return <div>Loading...</div>;
	}
	console.log(patient.name[0].given[0]);

	return (
		<div className="app-container">
			<NavBar/>
			<main className="main-content">
				<h1>Welcome Back, {patient.name[0].given[0]}!</h1>
			</main>
		</div>
	);
};

export default HomePage;

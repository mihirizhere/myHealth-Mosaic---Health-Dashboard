// MedicationPage.js
import React, { useState } from "react";
import "./MedicationPage.css";
import { useEHR } from "./EHRContext";
import NavBar from "./NavBar";


const MedicationPage = () => {
	const { patient } = useEHR();
	const { medications } = useEHR();
	if (patient.length === 0) {
		console.log("ran");
		return <div>Loading...</div>;
	}
	console.log("Meds: ", medications);
	return (
		<div className="page-container">
			<NavBar />
			<section>
				<h5>Current Medications</h5>
				<div className="medication-box">
					<ul>
						{medications?.map((med, index) => (
							<li key={index}>{med.medicationCodeableConcept.text}</li>
						))}
					</ul>
				</div>
			</section>
		</div>
	);
};

export default MedicationPage;

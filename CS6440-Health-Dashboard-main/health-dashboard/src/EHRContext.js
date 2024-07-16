import React, { createContext, useState, useContext } from "react";

export const EHRContext = createContext();

export function useEHR() {
	return useContext(EHRContext);
}

export const EHRProvider = ({ children }) => {
	const [patient, setPatient] = useState([]);
	const [medications, setMedications] = useState([]);
	const [careplans, setCareplans] = useState([]);

	const value = {
		patient,
		setPatient,
		medications,
		setMedications,
		careplans,
		setCareplans,
	};

	return <EHRContext.Provider value={value}>{children}</EHRContext.Provider>;
};

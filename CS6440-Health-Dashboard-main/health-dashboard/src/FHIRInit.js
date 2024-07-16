import { useEffect, useContext } from "react";
import { EHRContext } from "./EHRContext";
import { oauth2 as SMART } from "fhirclient";

const FHIRInit = () => {
	const { setPatient, setMedications, setCareplans } = useContext(EHRContext);
	useEffect(() => {
		SMART.init({
			iss: "https://launch.smarthealthit.org/v/r3/sim/eyJoIjoiMSIsImIiOiJzbWFydC0xNjQyMDY4IiwiZSI6InNtYXJ0LVByYWN0aXRpb25lci03MTYxNDUwMiJ9/fhir",
			redirectUri: "",
			clientId: "my-client-id",
			scope: "launch/patient offline_access openid fhirUser",
		})
			.then((client) => {
				console.log(client);
				return Promise.all([
					client.patient.read(),
					client.request(`/MedicationRequest?patient=${client.patient.id}`, {
						resolveReferences: "medicationReference",
						pageLimit: 0,
						flat: true,
					}),
					client.request(`/CarePlan?patient=${client.patient.id}`, {
						pageLimit: 0,
						flat: true,
					}),
				]);
			})
			.then(([patient, meds, careplans]) => {
				console.log(patient);
				console.log(meds);
				console.log("Care Plan Data: ", careplans);
				setPatient(patient);
				setMedications(meds);
				setCareplans(careplans);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [setPatient, setMedications, setCareplans]);

	return null;
};

export default FHIRInit;

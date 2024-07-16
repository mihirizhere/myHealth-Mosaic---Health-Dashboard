import React from "react";
import "./CarePlan.css";
import NavBar from "./NavBar";
import { useEHR } from "./EHRContext";

const CarePlan = () => {
	const { careplans, setCareplans } = useEHR();
	const { patient, setPatient } = useEHR();
	if (patient.length === 0) {
		console.log("ran");
		return <div>Loading...</div>;
	}

	const planData = [];
	for (let i = 0; i < careplans.length; i++) {
		let activities = [];
		for (let j = 0; j < careplans[i].activity.length; j++) {
			activities.push(
				careplans[i].activity[j].detail.code.text +
					": " +
					careplans[i].activity[j].detail.status +
					".  "
			);
		}
		let date = "";
		if ("end" in careplans[i].period) {
			date =
				careplans[i].period.start.substring(0, 10) +
				" to " +
				careplans[i].period.end.substring(0, 10);
		} else {
			date = careplans[i].period.start.substring(0, 10);
		}
		planData.push({
			category: careplans[i].category[0].text,
			activities: activities,
			date: date,
		});
	}
	console.log("Plan Data", planData);

	return (
		<div className="appointments-container">
			<NavBar />
			<header className="appointments-header">
			</header>
			<hr />
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Category</th>
						<th>Protocols</th>
						<th>Time Period</th>
					</tr>
				</thead>
				<tbody>
					{planData.map((item, index) => (
						<tr key={index}>
							<td>{item.category}</td>
							<td>{item.activities}</td>
							<td>{item.date}</td>
						</tr>
					))}
				</tbody>
			</table>
			<hr />
		</div>
	);
};
export default CarePlan;

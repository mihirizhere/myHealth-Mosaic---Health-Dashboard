import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import HomePage from "./HomePage";
import MedicationPage from "./MedicationPage";
import FHIRInit from "./FHIRInit";
import { EHRProvider } from "./EHRContext";
import AlertPage from "./AlertPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import CarePlan from "./CarePlan";
import PhysicianInfoPage from "./PhysicianInfoPage";

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = React.useState(false);
	const [isRegistered, setIsRegistered] = React.useState(false);

	const handleLoginSuccess = () => {
		setIsAuthenticated(true);
	};

	const handleRegisterSuccess = () => {
		setIsRegistered(true);
	};

	return (
		<EHRProvider>
			<FHIRInit />
			<Router>
				<div className="app-container">
					<Routes>
						<Route path="/register" element={<RegisterPage onRegisterSuccess={handleRegisterSuccess} />} />
						<Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
						<Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
						<Route path="/medications" element={isAuthenticated ? <MedicationPage /> : <Navigate to="/login" />} />
						<Route path="/careplans" element={isAuthenticated ? <CarePlan /> : <Navigate to="/login" />} />
						<Route path="/physician-info" element={isAuthenticated ? <PhysicianInfoPage /> : <Navigate to="/login" />} />
						<Route path="/alert" element={isAuthenticated ? <AlertPage /> : <Navigate to="/login" />} />
					</Routes>
				</div>
			</Router>
		</EHRProvider>
	);
};

export default App;

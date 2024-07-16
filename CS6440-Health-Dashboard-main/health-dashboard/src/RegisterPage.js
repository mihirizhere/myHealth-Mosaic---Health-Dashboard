import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./RegisterPage.css";

const RegisterPage = ({ onRegisterSuccess }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleRegister = async (event) => {
		event.preventDefault();
		if (!username || !password) {
			setError("Username and password are required.");
			return;
		}
		try {
			const response = await axios.post("http://localhost:3001/register", {
				username,
				password,
			});
			if (response.status === 200) {
				Swal.fire({
					title: 'Success!',
					text: 'Registration successful! Redirecting to login...',
					icon: 'success',
					timer: 5000,
					timerProgressBar: true,
					didClose: () => {
						onRegisterSuccess && onRegisterSuccess();
						navigate("/login");
					}
				});
			}
		} catch (error) {
			console.error(error);
			setError("An error occurred during registration.");
			Swal.fire({
				title: 'Error!',
				text: 'Failed to register. Please try again later.',
				icon: 'error',
				confirmButtonText: 'Close'
			});
		}
	};

	return (
		<div className="register-container">
			<div className="register-intro">
				<h2>Register Account</h2>
				<p>Create a new account for access.</p>
			</div>
			<form className="register-form" onSubmit={handleRegister}>
				{error && <p className="error-message">{error}</p>}
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">Register</button>
				<div className="register-account-text">
					Already have an account? <a href="/login">Login</a>
				</div>
			</form>
		</div>
	);
};

export default RegisterPage;

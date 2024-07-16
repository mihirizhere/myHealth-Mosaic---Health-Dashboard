import React, { useState } from "react";
import axios from "axios";
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginPage = ({ onLoginSuccess }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (event) => {
		event.preventDefault();
		const isAuthenticated = await authenticateUser(username, password);
		if (isAuthenticated) {
			Swal.fire({
				title: 'Success!',
				text: 'Login successful! Redirecting...',
				icon: 'success',
				timer: 3000,
				timerProgressBar: true,
				didClose: () => {
					onLoginSuccess();
					navigate("/");
				}
			});
		} else {
			Swal.fire({
				title: 'Error!',
				text: 'Login failed! Please check your username and password.',
				icon: 'error',
				confirmButtonText: 'Try Again'
			});
		}
	};

	return (
		<div className="login-container">
			<div className="login-intro">
				<h2>Welcome to Your Care Plan</h2>
				<p>Please log in to access your medical care plan.</p>
			</div>
			<form onSubmit={handleLogin}>
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
				<button type="submit">Log In</button>
				<div className="account-text">
					Don't have an account? <a href="/register">Register</a>
				</div>
			</form>
		</div>
	);
};

async function authenticateUser(username, password) {
	try {
		const response = await axios.post("http://localhost:3001/login", {
			username,
			password,
		});
		return response.status === 200;
	} catch (error) {
		console.error(error);
		return false;
	}
}

export default LoginPage;

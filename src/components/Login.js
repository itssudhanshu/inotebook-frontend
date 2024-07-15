import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
	const host = "http://localhost:4000/api/v1";
	const [creds, setCreds] = useState({ email: "", password: "" });
	const navigate = useNavigate();
	const handleOnChange = (e) => {
		setCreds({ ...creds, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Clicked");
		const { email, password } = creds;
		const response = await fetch(`${host}/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});
		const resNotes = await response.json();
		if (resNotes.status === 200) {
			// redirect
			localStorage.setItem("token", resNotes.authToken);
			props.showAlert("Login Successfull!", "success");
			navigate("/");
		} else {
			props.showAlert("Login Failed!", "danger");
		}
		console.log(resNotes);
	};

	return (
		<div className="mt-2">
			<h2 className="mb-4">Login to use iNotebook...</h2>

			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label
						htmlFor="email"
						className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						value={creds.email}
						aria-describedby="emailHelp"
						onChange={handleOnChange}
						minLength={5}
						required
					/>
				</div>
				<div className="mb-3">
					<label
						htmlFor="password"
						className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="password"
						name="password"
						value={creds.password}
						onChange={handleOnChange}
						minLength={5}
						required
					/>
				</div>

				<button
					type="submit"
					className="btn btn-primary">
					SignIn
				</button>
			</form>
		</div>
	);
};

export default Login;

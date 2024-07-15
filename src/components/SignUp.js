import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
	const host = "http://localhost:4000/api/v1";
	const [creds, setCreds] = useState({ name: "", email: "", password: "", cpassword: "" });
	const navigate = useNavigate();

	const handleOnChange = (e) => {
		setCreds({ ...creds, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Clicked");
		const { name, email, password } = creds;
		const response = await fetch(`${host}/auth/createuser`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, password }),
		});
		const resNotes = await response.json();
		if (resNotes.status === 200) {
			// redirect
			localStorage.setItem("token", resNotes.authToken);
			props.showAlert("User Registered Successfully!", "success");
			navigate("/");
		} else {
			props.showAlert("User Registeration Failed!", "danger");
		}
		console.log(resNotes);
	};

	return (
		<div className="mt-2">
			<h2>Register to use iNotebook...</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label
						htmlFor="name"
						className="form-label">
						Full Name
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
						value={creds.name}
						aria-describedby="nameHelp"
						onChange={handleOnChange}
						minLength={5}
						required
					/>
				</div>
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
				<div className="mb-3">
					<label
						htmlFor="cpassword"
						className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="cpassword"
						name="cpassword"
						value={creds.cpassword}
						onChange={handleOnChange}
						minLength={5}
						required
					/>
				</div>

				<button
					type="submit"
					className="btn btn-primary">
					SignUp
				</button>
			</form>
		</div>
	);
};

export default SignUp;

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar(props) {
	let location = useLocation();
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		props.showAlert("User Logged Out!", "success");
		navigate("/login");
	};
	return (
		<>
			<nav
				className="navbar navbar-expand-lg bg-dark border-bottom border-body"
				data-bs-theme="dark">
				<div className="container">
					<Link
						className="navbar-brand"
						to="/">
						<img
							src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
							alt="Logo"
							width="35"
							height="30"
							className="d-inline-block align-text-top"
						/>
						<span className="mx-2 active">iNotebook</span>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavDropdown">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link
									className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
									aria-current="page"
									to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
									aria-current="page"
									to="/about">
									About
								</Link>
							</li>
						</ul>
						{!localStorage.getItem("token") ? (
							<div className="d-flex">
								<Link
									className="btn btn-primary mx-2"
									role="button"
									to="/login"
									aria-disabled="true">
									Login
								</Link>
								<Link
									className="btn btn-primary mx-2"
									role="button"
									to="/register"
									aria-disabled="true">
									SignUp
								</Link>
							</div>
						) : (
							<button
								onClick={handleLogout}
								className="btn btn-primary mx-2"
								role="button"
								aria-disabled="true">
								Logout
							</button>
						)}
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;

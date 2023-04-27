import { useState } from "react";
import { isValidFullName, isValidPassword } from "../utils/validation";


const RegisterCard = () => {
	const [name, setName] = useState("");
	const [nameIsDirty, setNameIsDirty] = useState(false);
	const [password, setPassword] = useState("");
	const [passwordIsDirty, setPasswordIsDirty] = useState(false);

	const validName = isValidFullName(name)
	const validPassword = isValidPassword(password)

	const handleNameChange = (e) => {
		setName(e.target.value)
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}

	return (
		<div className="content">
			<h2> Get a library card </h2>
			<p>Please register to receive a library account.</p>
			<form action="#">
				<label htmlFor="username"> Name </label>
				<div>
					<input id="username" type="text" onChange={handleNameChange} value={name} onBlur={() => setNameIsDirty(true)} />
					<span className="valid-icons">
						{nameIsDirty ? (validName ? "✔️" : "❌") : ""}
					</span>
				</div>
				<p className={
					nameIsDirty
						? validName
							? "hidden error-message"
							: "error-message"
						: "hidden error-message"}
				>Please enter your full name with at least 5 characters</p>

				<label htmlFor="password"> Password </label>
				<div>
					<input id="password" type="password" onChange={handlePasswordChange} value={password} onBlur={() => setPasswordIsDirty(true)} />
					<span className="valid-icons">
						{passwordIsDirty ? (validPassword ? "✔️" : "❌") : ""}
					</span>
				</div>
				<p className={
					passwordIsDirty
						? validPassword
							? "hidden error-message"
							: "error-message"
						: "hidden error-message"}>Please enter a password with at least 8 characters</p>

				<button type="button"> Give me that card! </button>
			</form>
		</div>
	)
}


export default RegisterCard

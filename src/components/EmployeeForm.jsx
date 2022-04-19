import { useState, useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";

function EmployeeForm() {
	const [newEmployee, setNewEmployee] = useState({ name: "", surname: "" });
	const [errorMessage, setErrorMessage] = useState("");
	const { isSubmitDisabled, addEmployee } = useContext(EmployeeContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (newEmployee.name.length > 0 && newEmployee.surname.length > 0) {
			setErrorMessage(null);
			addEmployee(newEmployee);
			e.target.name.value = "";
			e.target.surname.value = "";
			setNewEmployee({ name: "", surname: "" });
		} else {
			setErrorMessage("Name and surname must not be empty");
		}
	};

	const handleTextChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;

		switch (key) {
			case "name":
				setNewEmployee({ ...newEmployee, name: value });
				break;
			case "surname":
				setNewEmployee({ ...newEmployee, surname: value });
				break;
			default:
				break;
		}
	};

	return (
		<div className="employee-form">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Enter name"
					onChange={handleTextChange}
				/>
				<input
					type="text"
					name="surname"
					placeholder="Enter surname"
					onChange={handleTextChange}
				/>
				<button type="submit" disabled={isSubmitDisabled}>
					Submit
				</button>
				<p className="error-message">{errorMessage}</p>
			</form>
		</div>
	);
}

export default EmployeeForm;

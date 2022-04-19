import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
	const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

	const [employeeList, setEmployeeList] = useState([
		{
			name: "Test",
			surname: "Employee 1",
			id: 0,
		},
		{
			name: "Test",
			surname: "Employee 2",
			id: 1,
		},
	]);

	const addEmployee = (newEmployee) => {
		setEmployeeList([...employeeList, { ...newEmployee, id: uuidv4() }]);
	};

	const deleteEmployee = (id) => {
		setEmployeeList(employeeList.filter((employee) => employee.id !== id));
	};

	useEffect(() => {
		if (employeeList.length >= 5) setIsSubmitDisabled(true);
		else setIsSubmitDisabled(false);
	}, [employeeList]);

	return (
		<EmployeeContext.Provider
			value={{
				employeeList,
				isSubmitDisabled,
				addEmployee,
				deleteEmployee,
			}}
		>
			{children}
		</EmployeeContext.Provider>
	);
};

export default EmployeeContext;

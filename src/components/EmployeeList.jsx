import { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";
import EmployeeItem from "./EmployeeItem";

function EmployeeList() {
	const { employeeList } = useContext(EmployeeContext);

	return (
		<div className="employee-list">
			<h2>Employee List</h2>
			<ul>
				{employeeList.map((employee) => (
					<EmployeeItem key={employee.id} item={employee} />
				))}
			</ul>
		</div>
	);
}

export default EmployeeList;

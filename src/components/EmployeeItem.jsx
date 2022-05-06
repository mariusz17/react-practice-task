import { useContext, useState, useRef } from "react";
import EmployeeContext from "../context/EmployeeContext";

function EmployeeItem({ item }) {
	const { deleteEmployee } = useContext(EmployeeContext);
	const [isHighlighted, setIsHighlighted] = useState(false);
	const li = useRef();

	const toggleHighlight = () => {
		li.current.classList.toggle("highlighted");
	}
	return (
		<li
			ref={li}
			data-id={item.id}
			className="employee-item"
		>
			<p className="employee-data">
				{item.name} {item.surname}
			</p>
			<button
				onClick={() => deleteEmployee(item.id)}
				// onMouseOver={() => setIsHighlighted(true)}
				// onMouseOut={() => setIsHighlighted(false)}
				onMouseOver={toggleHighlight}
				onMouseOut={toggleHighlight}
				className="employee-delete"
			>
				Delete
			</button>
		</li>
	);
}

export default EmployeeItem;

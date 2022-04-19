import { useContext, useState } from "react";
import EmployeeContext from "../context/EmployeeContext";

function EmployeeItem({ item }) {
	const { deleteEmployee } = useContext(EmployeeContext);
	const [isHighlighted, setIsHighlighted] = useState(false);

	const highLightOn = () => {
		setIsHighlighted(true);
	};

	const highLightOff = () => {
		setIsHighlighted(false);
	};

	return (
		<li
			data-id={item.id}
			className={`employee-item ${isHighlighted && "highlighted"}`}
		>
			<p className="employee-data">
				{item.name} {item.surname}
			</p>
			<button
				onClick={() => deleteEmployee(item.id)}
				onMouseOver={highLightOn}
				onMouseOut={highLightOff}
				className="employee-delete"
			>
				Delete
			</button>
		</li>
	);
}

export default EmployeeItem;

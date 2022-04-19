import { EmployeeProvider } from "./context/EmployeeContext";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

function App() {
	return (
		<EmployeeProvider>
			<EmployeeForm />
			<EmployeeList />
		</EmployeeProvider>
	);
}

export default App;

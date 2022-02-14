import { Navigate, Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import DoneList from "./components/DoneList";
import TodoList from "./components/TodoList";

function App() {
	return (
		<>
			<AppBar />
			<Routes>
				<Route path="/todo" element={<TodoList />} />
				<Route path="/done" element={<DoneList />} />
				<Route path="/" element={<Navigate to="/todo" />} />
			</Routes>
		</>
	);
}

export default App;

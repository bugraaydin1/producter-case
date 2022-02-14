import { Navigate, Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import TodoList from "./components/TodoList";

function App() {
	return (
		<>
			<AppBar />
			<Routes>
				<Route path="/todo" element={<TodoList />} />
				<Route path="/done" element={<h1>Done</h1>} />
				<Route path="/" element={<Navigate to="/todo" />} />
			</Routes>
		</>
	);
}

export default App;

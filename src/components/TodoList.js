import { useEffect, useState } from "react";
import {
	Fab,
	Stack,
	Paper,
	InputBase,
	IconButton,
	Tooltip,
} from "@mui/material";
import { AddCircleOutlineSharp, Delete } from "@mui/icons-material";
import List from "./common/List";
import TODOS from "../data/todos.json";

export default function TodoList() {
	const [todos, setTodos] = useState(
		localStorage.getItem("todos")
			? JSON.parse(localStorage.getItem("todos"))
			: TODOS.todos
	);
	const [todoText, setTodoText] = useState("");

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleToggle = (id) => () => {
		setTodos(
			todos.map((todo) => {
				return { ...todo, done: todo.id === id ? !todo.done : todo.done };
			})
		);
	};

	const handleAddTodo = () => {
		if (todoText.length > 0) {
			const maxId = todos.map((todo) => todo.id).sort((a, b) => b - a)[0] || 0;

			const newTodo = {
				id: maxId + 1,
				text: todoText.trim(),
				done: false,
			};

			setTodoText("");
			setTodos([newTodo, ...todos]);
		}
	};

	const handleNewTodoText = (evt) => {
		setTodoText(evt.target.value);
	};

	const handleRemoveDone = () => {
		const filteredTodos = todos.filter((todo) => !todo.done);
		const removedTodos = todos.filter((todo) => todo.done);

		setTodos(filteredTodos);
		const prevRemovedTodos = JSON.parse(
			localStorage.getItem("removedTodos") || "[]"
		);
		localStorage.setItem(
			"removedTodos",
			JSON.stringify(prevRemovedTodos.concat(removedTodos))
		);
	};

	return (
		<List
			title="Todo List"
			list={todos}
			onToggle={handleToggle}
			actionArea={
				<Stack
					direction="row"
					sx={{ bottom: 0, zIndex: 1, position: "sticky" }}
				>
					<Paper
						elevation={5}
						sx={{
							m: 1,
							p: 0.2,
							flex: 1,
							borderRadius: 11,
						}}
					>
						<InputBase
							value={todoText}
							onChange={handleNewTodoText}
							placeholder="Add item to list..."
							onKeyDown={(evt) => evt.key === "Enter" && handleAddTodo()}
							sx={{ width: "70%" }}
						/>
						<Tooltip title="Add Todo" placement="top">
							<IconButton
								color="primary"
								type="button"
								onClick={handleAddTodo}
								sx={{
									p: 1,
									mr: -1,
									right: -7,
									bottom: 0,
								}}
							>
								<AddCircleOutlineSharp />
							</IconButton>
						</Tooltip>
					</Paper>

					<Tooltip title="Remove Completed" placement="top">
						<Fab
							size="small"
							color="secondary"
							onClick={handleRemoveDone}
							sx={{ ml: 1, mt: 1.2, color: "white" }}
						>
							<Delete />
						</Fab>
					</Tooltip>
				</Stack>
			}
		/>
	);
}

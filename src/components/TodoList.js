import { useEffect, useState } from "react";
import { PaperBox, Root } from "./styled/grid";
import {
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	Checkbox,
	Paper,
	InputBase,
	IconButton,
	Fab,
	Stack,
	Tooltip,
} from "@mui/material";
import { AddCircleOutlineSharp, Delete } from "@mui/icons-material";

export default function TodoList() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch("/data/todos.json")
			.then((res) => res.json())
			.then((data) => setTodos(data.todos));
	}, []);

	const [checked, setChecked] = useState([0]);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<Grid container justifyContent="center">
			<Root item>
				<Typography variant="h5" align="center">
					Todo List
				</Typography>

				<PaperBox elevation={3}>
					<List
						dense
						disablePadding
						sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
					>
						{todos.map((todo) => (
							<ListItem key={todo.id} disablePadding divider>
								<ListItemButton
									dense
									role={undefined}
									onClick={handleToggle(todo.id)}
								>
									<ListItemIcon>
										<Checkbox
											edge="start"
											disableRipple
											tabIndex={-1}
											checked={todo.done}
										/>
									</ListItemIcon>
									<ListItemText
										id={todo.todo}
										primary={todo.todo}
										primaryTypographyProps={{
											sx: {
												textDecoration: todo.done ? " line-through" : null,
											},
										}}
									/>
								</ListItemButton>
							</ListItem>
						))}
					</List>
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
								sx={{ width: "70%" }}
								placeholder="Add item to list..."
								inputProps={{ "aria-label": "Add item to list..." }}
							/>
							<Tooltip title="Add Todo" placement="top">
								<IconButton
									color="primary"
									type="submit"
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
							<Fab color="secondary" size="small" sx={{ ml: 1, mt: 1.2 }}>
								<Delete sx={{ color: "white" }} />
							</Fab>
						</Tooltip>
					</Stack>
				</PaperBox>
			</Root>
		</Grid>
	);
}

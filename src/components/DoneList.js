import { useState } from "react";
import List from "./common/List";

export default function DoneList({ list }) {
	const [removedTodos] = useState(
		JSON.parse(localStorage.getItem("removedTodos") || "[]")
	);

	return <List readOnly title="Removed List" list={removedTodos} />;
}

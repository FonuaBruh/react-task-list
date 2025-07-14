import React from "react";
import Board from "./common/Board";
import { useDragAndDrop } from "../utils/dragAndDrop";
import "./App.css";

const initialBoards = [
	{
		id: 1,
		title: "Notes",
		items: [
			{ id: 1, title: "Сделать первую задачуСделать первую задачуСделать первую задачуСделать первую задачуhttps://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout" },
			{ id: 2, title: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout" },
			{ id: 3, title: "Repeat notation can be used for a part of the list of tracks. In this example, we create an 8-column grid;" },
		],
	},
	{
		id: 2,
		title: "On progress",
		items: [
			{ id: 4, title: "Код ревью 1" },
			{ id: 5, title: "Код ревью 2" },
			{ id: 6, title: "Код ревью 3" },
		],
	},
	{
		id: 3,
		title: "On review",
		items: [
			{ id: 7, title: "dfsdfsdfsdfsdfsdf" },
			{ id: 8, title: "dfsdfsdsdfsdf" },
			{ id: 9, title: "dfsdfsdfsd" },
		],
	},
	{
		id: 4,
		title: "Done",
		items: [
			{ id: 10, title: "123412" },
			{ id: 11, title: "4152533463463" },
			{ id: 12, title: "3123123123" },
		],
	},
];

function App() {
	const {
		boards,
		dragOverHandler,
		dragLeaveHandler,
		dragStartHandler,
		dragEndHandler,
		dropHandler,
	} = useDragAndDrop(initialBoards);

	return (
		<div className="app">
			{boards.map((board) => (
				<Board
					key={board.id}
					board={board}
					onDragOver={dragOverHandler}
					onDragLeave={dragLeaveHandler}
					onDragStart={dragStartHandler}
					onDragEnd={dragEndHandler}
					onDrop={dropHandler}
				/>
			))}
		</div>
	);
}

export default App;

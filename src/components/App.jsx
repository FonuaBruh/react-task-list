import React from "react";
import Board from "./common/Board";
import AddTask from "./common/TaskInput";
import { useBoards } from "../utils/useBoards";
import { useDragAndDrop } from "../utils/dragAndDrop";
import "./App.css";
import LeftMenu from "./common/LeftMenu";

const initialBoards = [
	{
		id: 1,
		title: "Notes",
		items: [],
	},
	{
		id: 2,
		title: "On progress",
		items: [],
	},
	{
		id: 3,
		title: "On review",
		items: [],
	},
	{
		id: 4,
		title: "Done",
		items: [],
	},
];

function App() {
	const { boards, setBoards, addTaskToNotes } = useBoards(initialBoards);
	const {
		dragOverHandler,
		dragLeaveHandler,
		dragStartHandler,
		dragEndHandler,
		dropHandler,
	} = useDragAndDrop(boards, setBoards);

	const handleAddTask = (taskText) => {
		const newTask = {
			id: Date.now(),
			title: taskText,
		};
		addTaskToNotes(newTask);
	};

	return (
		<div className="app">
			<div className="left-area">
				<LeftMenu />
			</div>
			<div className="right-area">
				<div className="board-area">
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
				<div className="input-area">
					<AddTask onAddTask={handleAddTask} />
				</div>
			</div>
		</div>
	);
}

export default App;

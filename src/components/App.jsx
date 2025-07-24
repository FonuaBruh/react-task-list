import React from "react";
import "./App.css";
import Board from "./common/Board";
import AddTask from "./common/TaskInput";
import LeftMenu from "./common/LeftMenu";
import { useBoards } from "../utils/useBoards";
import { useDragAndDrop } from "../utils/dragAndDrop";

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
	const { boards, setBoards, addTaskToNotes, resetBoards } =
		useBoards(initialBoards);
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

	const handleDownloadJSON = () => {
		const dataStr = JSON.stringify(boards, null, 2);
		const dataUri =
			"data:application/json;charset=utf-8," +
			encodeURIComponent(dataStr);
		const exportFileDefaultName = `boards-${new Date()
			.toISOString()
			.slice(0, 10)}.json`;
		const linkElement = document.createElement("a");
		linkElement.setAttribute("href", dataUri);
		linkElement.setAttribute("download", exportFileDefaultName);
		linkElement.click();
	};

	const handleImportJSON = (jsonData) => {
		if (Array.isArray(jsonData)) {
			setBoards(jsonData);
		} else {
			alert("Invalid boards format");
		}
	};

	return (
		<div className="app">
			<div className="left-area">
				<LeftMenu
					resetBoards={resetBoards}
					onDownloadJSON={handleDownloadJSON}
					onImportJSON={handleImportJSON}
				/>
			</div>
			<div className="right-area">
				<div className="board-area">
					{boards.map((board) => (
						<Board
							key={board.id}
							board={board}
							boards={boards}
							setBoards={setBoards}
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

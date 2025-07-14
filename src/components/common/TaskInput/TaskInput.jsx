import React, { useState } from "react";
import "./TaskInput.css";

const TaskInput = ({ onAddTask }) => {
	const [taskText, setTaskText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (taskText.trim()) {
			onAddTask(taskText);
			setTaskText("");
		}
	};

	return (
		<div className="task-input-wrapper">
			<form id="add-task" className="add-task" onSubmit={handleSubmit}>
				<input
					id="task-input"
					type="text"
					value={taskText}
					onChange={(e) => setTaskText(e.target.value)}
					placeholder="Type your task..."
				/>
				<button type="submit">Add</button>
			</form>
		</div>
	);
};

export default TaskInput;

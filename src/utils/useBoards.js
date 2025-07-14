import React from "react";

export const useBoards = (initialBoards) => {
	const [boards, setBoards] = React.useState(initialBoards);

	const addTaskToNotes = (newTask) => {
		setBoards((prevBoards) => {
			return prevBoards.map((board) => {
				if (board.id === 1) {
					return {
						...board,
						items: [...board.items, newTask],
					};
				}
				return board;
			});
		});
	};

	return {
		boards,
		setBoards,
		addTaskToNotes,
	};
};

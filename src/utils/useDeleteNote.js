import React from "react";

export const deleteNote = (boards, setBoards, boardId, noteId) => {
	setBoards((prevBoards) => {
		return prevBoards.map((board) => {
			if (board.id === boardId) {
				return {
					...board,
					items: board.items.filter((item) => item.id !== noteId),
				};
			}
			return board;
		});
	});
};

import React from "react";

export const useDragAndDrop = (initialBoards) => {
	const [boards, setBoards] = React.useState(initialBoards);
	const [currentBoard, setCurrentBoard] = React.useState(null);
	const [currentItem, setCurrentItem] = React.useState(null);

	const dragOverHandler = (e) => {
		e.preventDefault();
		if (e.target.className === "item") {
			e.target.style.boxShadow = "0 3px 2px gray";
		}
	};

	const dragLeaveHandler = (e) => {
		e.target.style.boxShadow = "none";
	};

	const dragStartHandler = (e, board, item) => {
		setCurrentBoard(board);
		setCurrentItem(item);
	};

	const dragEndHandler = (e) => {
		e.target.style.boxShadow = "none";
	};

	const dropHandler = (e, board, item) => {
		e.preventDefault();
		e.stopPropagation();

		if (!currentItem) return;

		if (!item) {
			const currentIndex = currentBoard.items.indexOf(currentItem);
			currentBoard.items.splice(currentIndex, 1);
			board.items.push(currentItem);
		} else {
			const currentIndex = currentBoard.items.indexOf(currentItem);
			currentBoard.items.splice(currentIndex, 1);

			const dropIndex = board.items.indexOf(item);
			board.items.splice(dropIndex + 1, 0, currentItem);
		}

		setBoards(
			boards.map((b) => {
				if (b.id === board.id) return board;
				if (b.id === currentBoard.id) return currentBoard;
				return b;
			})
		);

		e.target.style.boxShadow = "none";
	};

	return {
		boards,
		dragOverHandler,
		dragLeaveHandler,
		dragStartHandler,
		dragEndHandler,
		dropHandler,
	};
};

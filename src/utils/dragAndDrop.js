import React from "react";

export const useDragAndDrop = (boards, setBoards) => {
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

		const newBoards = JSON.parse(JSON.stringify(boards));
		const currentBoardIndex = newBoards.findIndex(
			(b) => b.id === currentBoard.id
		);
		const targetBoardIndex = newBoards.findIndex((b) => b.id === board.id);

		newBoards[currentBoardIndex].items = newBoards[
			currentBoardIndex
		].items.filter((item) => item.id !== currentItem.id);

		if (!item) {
			newBoards[targetBoardIndex].items.push(currentItem);
		} else {
			const dropIndex = newBoards[targetBoardIndex].items.indexOf(item);
			newBoards[targetBoardIndex].items.splice(
				dropIndex + 1,
				0,
				currentItem
			);
		}

		setBoards(newBoards);
		e.target.style.boxShadow = "none";
	};

	return {
		dragOverHandler,
		dragLeaveHandler,
		dragStartHandler,
		dragEndHandler,
		dropHandler,
	};
};

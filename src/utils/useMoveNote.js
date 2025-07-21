export const moveNote = (boards, setBoards, boardId, itemId, direction) => {
	const currentBoardIndex = boards.findIndex((board) => board.id === boardId);
	const targetBoardIndex =
		currentBoardIndex + (direction === "left" ? -1 : 1);

	if (targetBoardIndex < 0 || targetBoardIndex >= boards.length) return;

	const newBoards = [...boards];
	const item = newBoards[currentBoardIndex].items.find(
		(item) => item.id === itemId
	);

	newBoards[currentBoardIndex].items = newBoards[
		currentBoardIndex
	].items.filter((item) => item.id !== itemId);

	newBoards[targetBoardIndex].items.push(item);
	setBoards(newBoards);
};

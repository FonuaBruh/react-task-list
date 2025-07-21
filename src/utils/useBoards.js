import React from "react";

export const useBoards = (initialBoards) => {
	const [boards, setBoards] = React.useState(() => {
		try {
			const savedBoards = localStorage.getItem("boards-data");

			return savedBoards ? JSON.parse(savedBoards) : initialBoards;
		} catch (e) {
			console.error("Ошибка загрузки данных из localStorage:", e);

			return initialBoards;
		}
	});

	React.useEffect(() => {
		localStorage.setItem("boards-data", JSON.stringify(boards));
	}, [boards]);

	const addTaskToNotes = (newTask) => {
		setBoards((prevBoards) => {
			const updatedBoards = prevBoards.map((board) => {
				if (board.id === 1) {
					return {
						...board,
						items: [...board.items, newTask],
					};
				}

				return board;
			});

			return updatedBoards;
		});
	};

	const resetBoards = () => {
		localStorage.removeItem("boards-data");
		setBoards(initialBoards);
	};

	return {
		boards,
		setBoards,
		addTaskToNotes,
		resetBoards,
	};
};

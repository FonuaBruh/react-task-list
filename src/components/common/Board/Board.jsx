import React from "react";
import Item from "../Item";
import "./Board.css";

const Board = ({
	board,
	boards,
	setBoards,
	onDragOver,
	onDrop,
	onDragStart,
	onDragLeave,
	onDragEnd,
}) => {
	return (
		<div
			className="board"
			onDragOver={onDragOver}
			onDrop={(e) => onDrop(e, board)}
		>
			<div className="board__header">
				<div className="board__title">{board.title}</div>
				<div className="line"></div>
			</div>
			<div className="board__content">
				{board.items.map((item) => (
					<Item
						key={item.id}
						item={item}
						board={board}
						boards={boards}
						setBoards={setBoards}
						onDragStart={onDragStart}
						onDragEnd={onDragEnd}
						onDragOver={onDragOver}
						onDragLeave={onDragLeave}
						onDrop={onDrop}
					/>
				))}
			</div>
		</div>
	);
};

export default Board;

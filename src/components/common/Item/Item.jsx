// Item.jsx
import React from "react";
import "./Item.css";
import DragIcon from "../../UI/DragIcon";
import { deleteNote } from "../../../utils/useDeleteNote";
import { moveNote } from "../../../utils/useMoveNote";

const Item = ({
	item,
	board,
	boards,
	setBoards,
	onDragStart,
	onDragEnd,
	onDragOver,
	onDragLeave,
	onDrop,
}) => {
	const currentBoardIndex = boards.findIndex((b) => b.id === board.id);
	const canMoveLeft = currentBoardIndex > 0;
	const canMoveRight = currentBoardIndex < boards.length - 1;

	return (
		<div
			className="item"
			draggable={true}
			onDragOver={(e) => onDragOver(e)}
			onDragLeave={(e) => onDragLeave(e)}
			onDragStart={(e) => onDragStart(e, board, item)}
			onDragEnd={(e) => onDragEnd(e)}
			onDrop={(e) => onDrop(e, board, item)}
		>
			<DragIcon />
			<div className="text">{item.title}</div>
			<div className="item-tools">
				<p className="done-button">✔</p>
				<div className="move-note">
					{canMoveLeft && (
						<p
							className="move-left-button"
							onClick={() =>
								moveNote(
									boards,
									setBoards,
									board.id,
									item.id,
									"left"
								)
							}
						>
							←
						</p>
					)}
					{canMoveRight && (
						<p
							className="move-right-button"
							onClick={() =>
								moveNote(
									boards,
									setBoards,
									board.id,
									item.id,
									"right"
								)
							}
						>
							→
						</p>
					)}
				</div>
				<p
					className="delete-button"
					onClick={() =>
						deleteNote(boards, setBoards, board.id, item.id)
					}
				>
					×
				</p>
			</div>
		</div>
	);
};

export default Item;

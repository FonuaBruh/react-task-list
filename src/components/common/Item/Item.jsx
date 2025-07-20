import React from "react";
import "./Item.css";
import DragIcon from "../../UI/DragIcon";

const Item = ({
	item,
	board,
	onDragStart,
	onDragEnd,
	onDragOver,
	onDragLeave,
	onDrop,
}) => {
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
			<div className="text">
				{item.title}
			</div>
			<div className="item-tools">
				<p className="done-button">✔</p>
				<div className="move-note">
					<p className="move-right-button">←</p>
					<p className="move-left-button">→</p>
				</div>
				<p className="delete-button">×</p>
			</div>
		</div>
	);
};

export default Item;

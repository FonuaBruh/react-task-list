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
		</div>
	);
};

export default Item;

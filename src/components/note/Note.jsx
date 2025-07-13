import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import "./note.css";

const Note = ({ id, text, index, moveNote, onDelete }) => {
	const ref = useRef(null);

	const [{ isDragging }, drag] = useDrag({
		type: "NOTE",
		item: { id, index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const [, drop] = useDrop({
		accept: "NOTE",
		hover(item, monitor) {
			if (!ref.current) return;
			const dragIndex = item.index;
			const hoverIndex = index;

			if (dragIndex === hoverIndex) return;

			const hoverBoundingRect = ref.current.getBoundingClientRect();
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const clientOffset = monitor.getClientOffset();
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;

			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

			moveNote(dragIndex, hoverIndex);
			item.index = hoverIndex;
		},
	});

	drag(drop(ref));

	return (
		<div
			ref={ref}
			className="note"
			style={{
				opacity: isDragging ? 0.5 : 1,
				cursor: "move",
			}}
		>
			<div className="note__container">
				<p className="note__text">{text}</p>
			</div>
			<button className="delete-button" onClick={onDelete}>
				X
			</button>
		</div>
	);
};

export default Note;

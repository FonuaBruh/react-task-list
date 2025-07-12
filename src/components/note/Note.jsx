import React from "react";
import "./note.css";

function Note({ text, onDelete }) {
	return (
		<div className="note">
			<div className="note__container">
				<p className="note__text">{text}</p>
			</div>
			<button className="delete-button" onClick={onDelete}>X</button>
		</div>
	);
}

export default Note;

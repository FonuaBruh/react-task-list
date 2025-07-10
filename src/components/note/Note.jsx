import React from "react";
import "./note.css";

function Note({ text, onDelete }) {
    return(
        <div className="note__container">
            <p className="note__text">{text}</p>
			<button onClick={onDelete}>×</button>
        </div>
    );
}

export default Note;

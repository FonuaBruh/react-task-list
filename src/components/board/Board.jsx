import React, { useState } from "react";
import "./board.css";
import Note from "../note/Note"
import NewButton from "../buttons/newButton/NewButton";

function Board() {
    const [notes, setNotes] = useState([]);

	const addNote = (text) => {
		setNotes([...notes, text]);
	};

	return(
        <div>
            <NewButton onAddNote={addNote} />
            <div className="board">
                {notes.map((note, index) => (
                    <Note
						text={note}
						key={index}
						onDelete={() => setNotes(notes.filter((_, i) => i !== index))}
					/>
                ))}
            </div>
        </div>
    );
}

export default Board;

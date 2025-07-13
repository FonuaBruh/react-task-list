import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./board.css";
import Note from "../note/Note";
import NewButton from "../buttons/newButton/NewButton";

function Board() {
	const [notes, setNotes] = useState([]);

	const addNote = (text) => {
		setNotes([
			...notes,
			{
				id: Date.now(),
				text,
			},
		]);
	};

	const moveNote = (dragIndex, hoverIndex) => {
		const draggedNote = notes[dragIndex];
		const newNotes = [...notes];
		newNotes.splice(dragIndex, 1);
		newNotes.splice(hoverIndex, 0, draggedNote);
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		setNotes(notes.filter((note) => note.id !== id));
	};

	return (
		<DndProvider backend={HTML5Backend}>
			<div>
				<NewButton onAddNote={addNote} />
				<div className="board">
					{notes.map((note, index) => (
						<Note
							key={note.id}
							id={note.id}
							index={index}
							text={note.text}
							moveNote={moveNote}
							onDelete={() => deleteNote(note.id)}
						/>
					))}
				</div>
			</div>
		</DndProvider>
	);
}

export default Board;

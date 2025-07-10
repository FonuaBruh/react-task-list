import React, {useState} from "react";
import "./newButton.css";

function NewButton({ onAddNote }) {
	const [inputValue, setInputValue] = useState('');

	const handleAddNote = () => {
		if (inputValue.trim()) {
			onAddNote(inputValue);
			setInputValue('');
		}
	};

	return (
		<div className="input-button">
			<input
				id="1"
				className="note-input"
				type="text"
				placeholder="Type your notes here..."
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyPress={(e) => e.key === 'Enter' && handleAddNote()}
			/>
			<button className="new-button" onClick={handleAddNote}>+ note</button>
		</div>
	);
}

export default NewButton;

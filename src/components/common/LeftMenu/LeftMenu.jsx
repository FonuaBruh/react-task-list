import React from "react";
import "./LeftMenu.css";

const LeftMenu = ({ resetBoards, onDownloadJSON, onImportJSON }) => {
	const handleFileUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (event) => {
				try {
					const jsonData = JSON.parse(event.target.result);
					onImportJSON(jsonData);
				} catch (error) {
					alert("Invalid JSON file", error);
				}
			};
			reader.readAsText(file);
		}
		e.target.value = "";
	};

	return (
		<div className="left-menu">
			<div className="left-menu__title">Tools</div>
			<div className="line"></div>
			<div className="left-menu__list">
				<div className="left-menu__item" onClick={resetBoards}>
					Reset all notes
				</div>
				<div className="left-menu__item">
					<label htmlFor="import-json" style={{ cursor: "pointer" }}>
						Import notes from JSON
					</label>
					<input
						id="import-json"
						type="file"
						accept=".json"
						style={{ display: "none" }}
						onChange={handleFileUpload}
					/>
				</div>
				<div className="left-menu__item" onClick={onDownloadJSON}>
					Download JSON notes
				</div>
			</div>
		</div>
	);
};

export default LeftMenu;

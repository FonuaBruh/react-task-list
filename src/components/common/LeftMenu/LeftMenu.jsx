import React from "react";
import "./LeftMenu.css";

const LeftMenu = ({ resetBoards }) => {
	return (
		<div className="left-menu">
			<div className="left-menu__title">Tools</div>
			<div className="line"></div>
			<div className="left-menu__list">
				<div className="left-menu__item" onClick={resetBoards}>Reset all notes</div>
				<div className="left-menu__item">123</div>
				<div className="left-menu__item">123</div>
				<div className="left-menu__item">Download JSON notes</div>
			</div>
		</div>
	);
};

export default LeftMenu;

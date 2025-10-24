// import React from "react";
import PropTypes from "prop-types";
import "../styles/Note.css";

function Note({ note, onDelete }) {
	const formattedDate = new Date(note.created_at).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	return (
		<div className="note-container">
			<div className="note-header">
				<h3 className="note-title">{note.title}</h3>
				<button
					className="delete-button"
					onClick={() => onDelete(note.id)}
					aria-label="Delete note"
				>
					×
				</button>
			</div>
			<p className="note-content">{note.content}</p>
			<div className="note-footer">
				<span className="note-date">{formattedDate}</span>
			</div>
		</div>
	);
}

Note.propTypes = {
	note: PropTypes.shape({
		title: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		created_at: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
	}).isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default Note;

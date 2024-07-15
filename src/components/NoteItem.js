import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

function NoteItem(props) {
	const { note, updateNote } = props;
	const { deleteNote } = useContext(noteContext);

	const handleDelete = () => {
		deleteNote(note._id);
		props.showAlert("Note Deleted Successfully!", "success");
	};
	return (
		<div className="col-md-4">
			<div className="card my-2">
				<div className="card-body">
					<h5 className="card-title">{note.title}</h5>
					<p className="card-text">{note.description}</p>
					<i
						className="fa-solid fa-pen-to-square fa-lg"
						onClick={() =>  updateNote(note)}></i>
					<i
						className="fa-solid fa-trash fa-lg mx-3"
						onClick={handleDelete}></i>
				</div>
			</div>
		</div>
	);
}

export default NoteItem;

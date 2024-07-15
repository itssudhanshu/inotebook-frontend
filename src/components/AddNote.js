import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
	const { addNote } = useContext(noteContext);
	const [note, setNote] = useState({ title: "", description: "", tag: "" });
	const handleOnChange = (e) => {
		setNote({ ...note, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addNote(note.title, note.description, note.tag);
		props.showAlert("Note Added Successfully!", "success");
	};

	return (
		<>
			<div className="container my-4">
				<h2>Add Note</h2>
				<form className="my-4">
					<div className="mb-3">
						<label
							htmlFor="title"
							className="form-label">
							Title
						</label>
						<input
							type="text"
							className="form-control"
							id="title"
							name="title"
							aria-describedby="titleHelp"
							onChange={handleOnChange}
						/>
						<div
							id="titleHelp"
							className="form-text">
							Enter a title for your note (Required).
						</div>
					</div>
					<div className="mb-3">
						<label
							htmlFor="description"
							className="form-label">
							Description
						</label>
						<input
							type="text"
							className="form-control"
							id="description"
							name="description"
							onChange={handleOnChange}
						/>
					</div>
					<div className="mb-3">
						<label
							htmlFor="tag"
							className="form-label">
							Tag
						</label>
						<input
							type="text"
							className="form-control"
							id="tag"
							name="tag"
							onChange={handleOnChange}
						/>
					</div>

					<button
						type="submit"
						className="btn btn-primary"
						onClick={handleSubmit}>
						Add Note
					</button>
				</form>
			</div>
		</>
	);
};

export default AddNote;

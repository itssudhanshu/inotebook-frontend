import React, { useContext, useRef } from "react";
import noteContext from "../context/notes/noteContext";

const EditNote = (props) => {
	const { currentNote, setCurrentNote, editNote } = useContext(noteContext);
	const refClose = useRef(null);

	const handleOnChange = (e) => {
		setCurrentNote({ ...currentNote, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		editNote(currentNote.etitle, currentNote.edescription, currentNote.etag, currentNote._id);
		props.showAlert("Note Edited Successfully!", "success");
		refClose.current.click();
	};

	return (
		<div>
			<button
				ref={props.reference}
				type="button"
				className="btn btn-primary d-none"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal">
				Launch demo modal
			</button>

			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h1
								className="modal-title fs-5"
								id="exampleModalLabel">
								Edit Note
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form className="my-4">
								<div className="mb-3">
									<label
										htmlFor="etitle"
										className="form-label">
										Title
									</label>
									<input
										type="text"
										className="form-control"
										id="etitle"
										name="etitle"
										value={currentNote.etitle}
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
										htmlFor="edescription"
										className="form-label">
										Description
									</label>
									<input
										type="text"
										className="form-control"
										id="edescription"
										name="edescription"
										value={currentNote.edescription}
										onChange={handleOnChange}
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="etag"
										className="form-label">
										Tag
									</label>
									<input
										type="text"
										className="form-control"
										id="etag"
										name="etag"
										value={currentNote.etag}
										onChange={handleOnChange}
									/>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button
								ref={refClose}
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal">
								Close
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={handleSubmit}>
								Update Note
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditNote;

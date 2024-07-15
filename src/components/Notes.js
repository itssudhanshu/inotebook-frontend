import React, { useContext, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import EditNote from "./EditNote";
import { useNavigate } from "react-router-dom";

function Notes(props) {
	const { notes, fetchNotes, setCurrentNote } = useContext(noteContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("token")) {
			fetchNotes();
		} else {
			navigate("/login");
		}
		// eslint-disable-next-line
	}, []);

	const ref = useRef(null);
	const updateNote = (cNote) => {
		ref.current.click();
		console.log(cNote);

		setCurrentNote({
			etitle: cNote.title,
			edescription: cNote.description,
			etag: cNote.tag,
			_id: cNote._id,
		});
	};

	return (
		<>
			<AddNote showAlert={props.showAlert} />
			<EditNote
				reference={ref}
				showAlert={props.showAlert}
			/>
			<div className="row my-4">
				<h2>Your Note(s)</h2>
				{notes.length !== 0?notes.map((note) => {
					return (
						<NoteItem
							key={note._id}
							note={note}
							updateNote={updateNote}
							showAlert={props.showAlert}
						/>
					);
				}): <h6> Nothing to show, Please add you note(s)</h6>}
			</div>
		</>
	);
}

export default Notes;

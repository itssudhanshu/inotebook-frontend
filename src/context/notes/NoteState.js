import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
	const host = "http://localhost:4000/api/v1";
	const [notes, setNotes] = useState([]);
	const [currentNote, setCurrentNote] = useState({});

	// Fetch all the notes
	const fetchNotes = async () => {
		const response = await fetch(`${host}/notes/fetchnotes`, {
			method: "GET",
			headers: {
				// "Content-Type": "application/json",
				"auth-token":
					localStorage.getItem("token"),
			},
			// body: JSON.stringify(data),
		});
		const resNotes = await response.json();
		// console.log(resNotes);
		setNotes(resNotes);
	};

	//  Add Note
	const addNote = async (title, description, tag) => {
		// API CALL
		const response = await fetch(`${host}/notes/createnotes`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					localStorage.getItem("token"),
			},

			body: JSON.stringify({ title, description, tag }),
		});
		const resNotes = await response.json();
		console.log(resNotes);
		// setNotes(notes.concat(note));
		fetchNotes();
	};

	// Delete Note
	const deleteNote = async (id) => {
		// API CALL
		console.log("Deleting note with id: " + id);
		const response = await fetch(`${host}/notes/deletenote/${id}`, {
			method: "DELETE",
			headers: {
				"auth-token":
					localStorage.getItem("token"),
			},
		});
		const resNotes = await response.json();
		console.log(resNotes);
		fetchNotes();
	};

	// Edit Note
	const editNote = async (title, description, tag, id) => {
		// API CALL
		console.log("Editing the note with id: " + id);
		// console.log({ title, description, tag });

		const response = await fetch(`${host}/notes/updatenote/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"auth-token":
					localStorage.getItem("token"),
			},
			body: JSON.stringify({ title, description, tag }),
		});
		const resNotes = await response.json();
		console.log(resNotes);
		fetchNotes();
	};
	return (
		<NoteContext.Provider
			value={{ currentNote, setCurrentNote, notes, addNote, editNote, deleteNote, fetchNotes }}>
			{props.children}
		</NoteContext.Provider>
	);
};

export default NoteState;

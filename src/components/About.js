import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const About = () => {
  // eslint-disable-next-line
	let a = useContext(noteContext);

	return <div>This is About Component.</div>;
};

export default About;

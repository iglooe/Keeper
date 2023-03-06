import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Note from "./note.jsx";
import Notes from "../notes";

function createNote(notes) {
  return <Note key={notes.key} title={notes.title} content={notes.content} />;
}

console.log(Notes);

function App() {
  return (
    <div>
      <Header />
      {Notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;

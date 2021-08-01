import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  const addNewNote = (note) => {
    console.log(note);
    setItems((prev) => {
      return [...prev, note];
    });
  };

  const deleteNote = (id) => {
    setItems((prev) => {
      return prev.filter((items, index) => {
        return index !== id;
      });
    });
    console.log(id);
  };

  return (
    <div>
      <Header />
      <CreateArea addNote={addNewNote} />
      {items.map((item, index) => {
        return (
          <Note
            deleteNote={deleteNote}
            key={index}
            id={index}
            title={item.title}
            content={item.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [titleClicked, setTitleClicked] = useState(false);

  const handleTitleClick = () => {
    setTitleClicked(true);
    console.log("clciked");
  };

  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value //This syntax turns main key from just
        // string to the actual value of the namem constant
      };
    });
  };

  const submitNote = (e) => {
    e.preventDefault();
    props.addNote(note);
    setNote({
      title: "",
      content: ""
    });
  };

  return (
    <div>
      <form className="create-note">
        {/* <input
          onClick={handleTitleClick}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        /> */}
        {titleClicked ? (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        ) : null}

        <textarea
          onClick={handleTitleClick}
          value={note.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={titleClicked ? "3" : "1"}
        />

        <Zoom in={titleClicked}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

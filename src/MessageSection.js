import { Avatar } from "@material-ui/core";
import React from "react";
//import css
import "./messageSection.css";
//import from material ui
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
const MessageSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="messageSection">
      <div className="messageSection_top">
        <Avatar />
        <form>
          <input
            type="text"
            placeholder="what's in your mind?"
            className="messageSection_input"
          />
          <input placeholder="image url optional" />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      <div className="messageSection_bottom">
        <div className="messageSection_option">
          <OndemandVideoIcon style={{ color: "red" }} />
          <h5>Live video</h5>
        </div>
        <div className="messageSection_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h5>Live video</h5>
        </div>
        <div className="messageSection_option">
          <EmojiEmotionsIcon style={{ color: "orange" }} />
          <h5>Live video</h5>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;

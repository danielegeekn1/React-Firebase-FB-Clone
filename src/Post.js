import { Avatar } from "@material-ui/core";
import React from "react";
//import css
import "./post.css";
const Post = ({ profilePic, img, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post_topInfo">
          <h4>{username}</h4>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="post_bottom">
        <div className="post_msg">
          <p>{message}</p>
        </div>
        <div className="post_img">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Post;

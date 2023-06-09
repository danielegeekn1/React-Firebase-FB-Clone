import { Avatar } from "@material-ui/core";
import React from "react";
//import css
import "./post.css";
//import icon from material ui
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
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
        <div className="post_options">
          <div className="post_option">
            <ThumbUpIcon />
            <p>Like</p>
          </div>
          <div className="post_option">
            <ChatBubbleIcon />
            <p>Comment</p>
          </div>
          <div className="post_option">
            <ShareIcon />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

import React from "react";
import Reels from "./Reels";
import MessageSection from "./MessageSection";
import "./feed.css";
//import images from my folder
import miyamotoProfile from "../src/img/miyamoto.jpeg";
import vagabondFight from "../src/img/vagabond-fight.webp";
import Post from "./Post";
const Feed = () => {
  return (
    <div className="feed">
      <Reels />
      <MessageSection />
      <Post
        profilePic={miyamotoProfile}
        img={vagabondFight}
        username="Takezo"
        message="vagabond is the greatest manga ever"
        timestamp="current time"
      />
    </div>
  );
};

export default Feed;

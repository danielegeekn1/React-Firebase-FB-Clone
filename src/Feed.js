import React from "react";
import Reels from "./Reels";
import MessageSection from "./MessageSection";
import "./feed.css";
const Feed = () => {
  return (
    <div className="feed">
      <Reels />
      <MessageSection />
    </div>
  );
};

export default Feed;

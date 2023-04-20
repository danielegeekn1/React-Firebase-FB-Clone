import React from "react";
import SingleReel from "./SingleReel";
//import css file
import "./reel.css";
//import images from my folder
import background1 from "../src/img/landscapes-1.jpeg";
import tanjiroProfile from "../src/img/tanjiro-front.png";
import background2 from "../src/img/ala-tn.jpeg";
import rufyProfile from "../src/img/rufy-profile.jpeg";
import background3 from "../src/img/singapore.jpeg";
import gatsuProfile from "../src/img/gatsu-profile.jpeg";
import background4 from "../src/img/kyoto.jpeg";
import rossanaProfile from "../src/img/rossana-profile.webp";
const Reels = () => {
  return (
    <div className="reel">
      <SingleReel
        backgroundImg={background1}
        srcImg={tanjiroProfile}
        text="daniele b."
      />
      <SingleReel
        backgroundImg={background2}
        srcImg={rufyProfile}
        text="luca b."
      />
      <SingleReel
        backgroundImg={background3}
        srcImg={gatsuProfile}
        text="luca b."
      />
      <SingleReel
        backgroundImg={background4}
        srcImg={rossanaProfile}
        text="giulia p."
      />
    </div>
  );
};

export default Reels;

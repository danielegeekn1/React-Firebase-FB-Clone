import React from "react";
import SidebarRow from "./SidebarRow";
//import image from my folder
import tanjiro from "../src/img/tanjiro.png";
import feLogo from "../src/img/fe-logo.png";
import jokesG from "../src/img/fun-jokes.webp";
//import css
import "./sidebar.css";
//import from material ui
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import StoreIcon from "@mui/icons-material/Store";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HomeIcon from "@mui/icons-material/Home";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/*sidebarrows */}
      <div className="sidebar_section-1">
        <SidebarRow title="personal account" src={tanjiro} />
        <SidebarRow title="home" Icon={HomeIcon} />
      </div>
      <div className="sidebar_section-2">
        <SidebarRow title="work-group" Icon={GroupWorkIcon} />
        <SidebarRow title="play free games" Icon={SportsEsportsIcon} />
        <SidebarRow title="marketplace" Icon={StoreIcon} />
      </div>
      <div className="sidebar_section-3">
        <SidebarRow title="frontend developers" src={feLogo} />
        <SidebarRow title="frontend developers" src={jokesG} />
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import logo from '../../img/logo.jpg';
import avatar from '../../img/pic.jpg';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <Link to='/'>
              <img src={logo} alt="Pawnee Leasing" className="logoImg" />
            </Link>
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone className="topBarIcon"/>
            <span className="topIconAlert">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language className="topBarIcon" />
            <span className="topIconAlert">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings className="topBarIcon" />
          </div>
          <img src={avatar} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

import "./settings.css";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://i.pinimg.com/236x/d8/82/59/d88259a42fcc6ee481c879e05b5ff465--business-headshot-ideas-woman-profile-picture-professional.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Rohit" />
          <label>Email</label>
          <input type="email" placeholder="rohitgupta9769@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <button className="settingsSubmitButton">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;

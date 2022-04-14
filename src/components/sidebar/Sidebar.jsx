import "./sidebar.css";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://media.istockphoto.com/photos/lovely-woman-with-purple-tulips-bunch-picture-id1131783260?b=1&k=20&m=1131783260&s=170667a&w=0&h=xvQ9ryDOeybG5A-A5kn9gNC9uVG_AGSMvFbJCUig1tk="
          alt=""
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          eum accusantium autem facere quam aut
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarSocialIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarSocialIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarSocialIcon fa-brands fa-pinterest-square"></i>
          <i className="sidebarSocialIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

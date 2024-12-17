import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./MakeSideBar.scss";

const MakeSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="make-sidebar-container">
      <div
        className={`sidebar ${isOpen ? "open" : "closed"}`}
        style={{
          width: isOpen ? "250px" : "50px",
          transition: "width 0.3s ease-in-out",
        }}
      >
        <div
          className={`${
            isOpen ? "sidebar-toggle-btn-open" : "sidebar-toggle-btn-close"
          }`}
        >
          <button onClick={toggleSidebar}>{isOpen ? "C" : "O"}</button>
        </div>
        <ul>
          <li>{isOpen ? "Home" : "H"}</li>
          <li>{isOpen ? "About" : "A"}</li>
          <li>{isOpen ? "Contact" : "C"}</li>
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MakeSideBar;

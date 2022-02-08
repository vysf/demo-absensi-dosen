import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Outlet, useLocation } from "react-router-dom";
import { avatar1 } from "../../../assets";
import { adminpath } from "../adminPath";

const Admin = () => {
  // buka dan tutup sidebar
  const [isClick, setIsClick] = useState(false);
  const openSidebar = () => {
    setIsClick(!isClick);
  };

  // aktif fan non aktif menu admin
  const location = useLocation();
  const { pathname } = location;

  const splitLocation = pathname.split("/");
  if (splitLocation.length === 2) {
    splitLocation.push("");
  }

  return (
    <>
      <Helmet>
        <title>Dashboard Admin</title>
        <meta name="description" content="login kehadiran dosen" />
      </Helmet>
      <div className={isClick ? "sidebar active" : "sidebar"}>
        <div className="logo_content">
          {/* <div className="logo">
            <i className="bx bxl-netlify"></i>
            <div className="logo_name">CodingLab</div>
          </div> */}
          <i className="bx bx-menu" id="btn" onClick={openSidebar}></i>
        </div>

        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              <img src={avatar1} alt="" />

              <div className="name_job">
                <div className="name">The Admin</div>
                <div className="job">Admin's Job</div>
              </div>
            </div>
            {/* <i className="bx bx-log-out" id="log_out" onClick={openSidebar}></i> */}
          </div>
        </div>

        <ul className="nav_list">
          {/* <li>
            <i className="bx bx-search" onClick={openSidebar}></i>
            <input type="text" placeholder="Search..." />
            <span className="tooltip">Search</span>
          </li> */}

          {adminpath.map((element, index) => {
            return (
              <li key={index}>
                <Link
                  to={element.path}
                  className={
                    splitLocation[splitLocation.length - 1] === element.path
                      ? "active"
                      : ""
                  }
                >
                  <i className={element.icon}></i>
                  <span className="links_name">{element.name}</span>
                </Link>
                <span className="tooltip">{element.name}</span>
              </li>
            );
          })}

          <li className="log_out">
            <Link to="/">
              <i
                className="bx bx-log-out"
                id="log_out"
                onClick={openSidebar}
              ></i>
              <span className="links_name">Log out</span>
            </Link>
            <span className="tooltip">Log out</span>
          </li>
        </ul>
        {/* <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              <img src={avatar1} alt="" />

              <div className="name_job">
                <div className="name">The Clown</div>
                <div className="job">Web Designer</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </div>
        </div> */}
      </div>
      <div className="admin_content">
        <Outlet />
      </div>
    </>
  );
};

export default Admin;

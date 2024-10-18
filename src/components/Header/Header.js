import React from "react";
import "./header.scss";

export default function Header({name}) {
  return (
    <>
      <div className="navBar">
        <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              {name}
            </a>
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item nav-link">Home</li>
                <li className="nav-item nav-link">Events</li>
                <li className="nav-item nav-link">Contact Us</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

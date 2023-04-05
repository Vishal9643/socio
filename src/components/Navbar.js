import { useState } from "react";
import styled from "styled-components";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="para">
              <p>Facebook</p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="list">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#news">News</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

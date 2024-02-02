import React from "react";

import "./styles.css";
import Logo from "../../assets/icons/saturn.png";

export class NavBar extends React.Component {
  render(){
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img src={Logo} alt="Saturn Logo" />
            <h1>Space Flight News</h1>
          </div>
  
          <ul className="nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

  
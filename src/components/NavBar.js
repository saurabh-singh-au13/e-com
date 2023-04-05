import React from "react";

import { FaSearch } from "react-icons/fa";
import "./NavBar.css";
import ScrollingNavbar from "./ScrollingNavbar";
import MultipleCarts from "./MultipleCarts";
function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <FaSearch />
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <ScrollingNavbar />
      </div>
      <div>
        <MultipleCarts />
      </div>
    </>
  );
}

export default NavBar;

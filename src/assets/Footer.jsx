import React from "react";

import github from "./github.png";
import ic from "./insta.png";

function Footer() {
  let insta = "./";
  return (
    <>
      <footer>
        <div className="footer">
          <a
            href="https://github.com/DeveshDeore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github" />
          </a>
          <a
            href="https://www.instagram.com/devesh_deore_83"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ic} alt="Instagram" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;

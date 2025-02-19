import React from "react";
import profile from "./assets/webizz-removebg-preview.png";

export default function Navbar() {
  return (
    <>
      <nav>
        <div id="">
          <img src={profile} alt="" id="logo" />
        </div>
       <center>
        <p
          id="name"
          className="bg-gradient-to-r from-pink-300  to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
        >
          Webizz
        </p>
        </center>
      </nav>
    </>
  );
}

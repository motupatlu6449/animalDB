import React, { useEffect, useState } from "react";
import "../CSS/Navbar.css";

function Navbar2() {

    const [show_orange,setshow_orange] = useState("");
    const [show_blue,setshow_blue] = useState("hidden");
    const [show_green,setshow_green] = useState("hidden");

    function pressOrange(){
        setshow_orange("");
        setshow_blue("hidden");
        setshow_green("hidden");
    }

    function pressBlue(){
        setshow_orange("hidden");
        setshow_blue("");
        setshow_green("hidden");
    }

    function pressGreen(){
        setshow_orange("hidden");
        setshow_blue("hidden");
        setshow_green("");
    }

  return (
    <>
      <div className="flex bg-navbar-brown justify-between">
        <div className="navbar-strips-container flex flex-row ml-[100px]">
          <div className="navbar-strips bg-navbar-orange rounded-tl-xl" onClick={pressOrange}>HOME</div>
          <div className="navbar-strips bg-navbar-blue" onClick={pressBlue}>
            VISIT US
          </div>
          <div className="navbar-strips bg-navbar-green rounded-tr-xl" onClick={pressGreen}>
            GLOBAL CENTER FOR SPECIES SURVIVAL
          </div>
        </div>
        <div className="login navbar-strips bg-white text-black rounded-t-xl">
            LOGIN
        </div>
      </div>

      <div className={`bg-navbar-orange p-3 ${show_orange} orange-select-options-container1`} >
        <div className="orange-select-options-container2 pr-[10%]">
          <span>Mammals</span>
          <span>Reptiles</span>
          <span>Birds</span>
        </div>
      </div>
      <div className={`bg-navbar-blue p-3 ${show_blue}`} >
        yo
      </div>
      <div className={`bg-navbar-green p-3 ${show_green}`} >
        yo
      </div>
    </>
  );
}

export default Navbar2;

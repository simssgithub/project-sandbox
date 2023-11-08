import React, { useState } from "react";
import LockSlider from "./LockSlider";
import { AiFillUnlock } from "react-icons/ai";
import LockScreenImg from "./img/moon.jpg";
import HomeScreenImg from "./img/home.jpg";
export default function SlideToUnlockApp() {
  const [uiProps, setUiProps] = useState({
    uiText: "Unlock Screen",
    uiColor: "#eee",
    uiBg: `url(${LockScreenImg}) center/cover no-repeat`,
  });
  const [showLockSlider, setShowLockSlider] = useState(true);
  const [lockSliderValue, setLockSliderValue] = useState(0);
  const handleLockSliderInput = (e) =>{
    setLockSliderValue(e.target.value);
    setShowLockSlider(false);
    
  };
  return (
    <div
      className="container text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "70vh",
        marginTop: "15vh",
        width: 340,
        border: "4px solid #000",
        borderRadius: "30px",
        background: uiProps.uiBg,
      }}
    >
      <h1 className="title" style={{ color: uiProps.uiColor }}>
        {" "}
        {uiProps.uiText}
      </h1>
      {showLockSlider ? (
        <LockSlider width={"250px"}
        handleInput={handleLockSliderInput} 
        value={lockSliderValue}
        />
      ) : (
        <AiFillUnlock className="unLockIcon" />
      )}
    </div>
  );
}

import React from "react";

export default function SliderComp({ setValue, handleInput, bgColor, textColor }) {
  return (
    // <div className="container d-flex flex-column" style={{ gap: 100 }}>
    //   <input type="range" min="0" max={100} style={{ cursor: "pointer" }} />
    //   <div
    //   style={{
    //     color:"black",
    //     background: "lightgray",
    //     height: `30px`,
    //     width:`30px`,
    //     fontWeight: 600,
    //     display:"flex",
    //     justifyContent:"center",
    //     alignItems: "center",
    //     borderRadius:"50%",
    //   }}
    //   >
    //     <span>circle</span>
    //   </div>
    // </div>
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ gap: 100 }}>
    <input type="range" min="0" 
    max={100} 
    value={setValue}
    onInput={handleInput}
    style={{ cursor: "pointer" 
    }} />
    <div
        style={{
            color:!textColor ? "black" : textColor,
            background: !bgColor ? "lightgray" : bgColor,
            height: `30px`,
            width:`30px`,
            fontWeight: 600,
            display:"flex",
            justifyContent:"center",
            alignItems: "center",
            borderRadius:"50%",
        }}
    >
        <span>circle</span>
    </div>
</div>

  );
}

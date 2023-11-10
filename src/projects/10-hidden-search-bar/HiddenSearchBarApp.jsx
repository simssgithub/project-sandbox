import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
export default function HiddenSearchBarApp() {
  const [uiProps, setuiProps] = useState({
    bg: "purple",
    shadow: "",
    transitions: "",
    opacity: 0,
    showSearchIcon: true,
    borderBottomColor: "#fff",
  });
  let body = document.body.style;
  let inputStyle = {
    margin: "10vh 25vw", 
    width: "20vh",
    height: "30px",
    padding: "1rem .3rem",
    border: "none",
    outline: "none",
    background: "transparent",
    borderBottom: `1px solid ${uiProps.borderBottomColor}`,
    fontSize: "1.3rem",
    color: "#eee",
    boxShadow: "0px 55px 60px -15px rgba(0,0,0,.75)",
    opacity: uiProps.opacity,
    transitions: "all .3s ease",
  };
  let bsSearchStyle = {
    fontSize: 50,
    cursor: "pointer",
    position: "absolute",
    top: 20,
    right: 20,
  };

  const inputEl= useRef(null);

  useEffect(() => {
    body.background = uiProps.bg;
    body.boxShadow = uiProps.shadow;
    body.transition = uiProps.transitions;
  }, [uiProps.shadow]);

  const showSearch = () => {
  setuiProps({
    opacity: 1,
    showSearchIcon: false,
  });
  inputEl.current.focus();
};
const handleSearchFocus = () => {
    setuiProps({
        shadow:"insert 0 -60vh 30vw 200px rgba(0,0,0,0.8)",
        borderBottomColor:"green",
    });
};

 const handleSearchBlur = (e) => {
    setuiProps({
        shadow: "none",
        opacity:0,
        borderBottomColor:"#fff",
        showSearchIcon: true,
    });
 };

  return (
    <div className="container" style={{height:"20vh"}}>
      <input type="text" 
      placeholder="Search" 
      style={inputStyle} 
      onFocus={handleSearchFocus}
      onBlur={handleSearchBlur}
      ref={inputEl}
      />
      {uiProps.showSearchIcon ? (
        <BsSearch style={bsSearchStyle} onClick={showSearch} />
      ) : null}
    </div>
  );
}

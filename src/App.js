import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EsignatureApp from './projects/01Esignature/EsignatureApp';
import HiddenSearchBarApp from "./projects/10-hidden-search-bar/HiddenSearchBarApp";
// import SliderApp from "./projects/09-sliderApp/SliderApp";

function App() {
  return (
    <div className="App">
      {/* <SliderApp /> */}
      <HiddenSearchBarApp/>
      <EsignatureApp/>
    </div>
  );
}

export default App;

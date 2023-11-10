import SliderComp from './SliderComp'
import Pamagat from '../../components/Pamagat';

import { useState } from 'react';
export default function SliderApp() {

    const [slideValue, setSlideValue]=useState(0);

    const handleSliderValueChange = (e) =>{
        setSlideValue(e.target.value);
    };

    let bgColor;
    let textColor;
    // if (slideValue <= 25){
    //     bgColor="red";
    //     textColor="red";
    // }
    // else if(slideValue <25 && slideValue <= 50){
    //     bgColor="blue"
    // }
    // else if (slideValue < 51 && slideValue <= 75){
    //     bgColor="green";
    //     textColor="white";
    // }
    // else if (slideValue > 75){
    //     bgColor="orange";
    //     textColor="white";
    // }
    // else {(slideValue === 100)
    //     bgColor="red";
    // }
    if (slideValue <= 25) {
        bgColor = "red";
        textColor = "red";
    } else if (slideValue <= 50) {
        bgColor = "blue";
    } else if (slideValue <= 75) {
        bgColor = "green";
        textColor = "white";
    } else {
        bgColor = "orange";
        textColor = "white";
    }
  return (
    <div className='container text-center'>
        <Pamagat text={"Slide to grow"}/>
        <SliderComp setValue={slideValue}handleInput={handleSliderValueChange} bgcolor={bgColor} textColor={textColor}/>
    </div>
  )
}

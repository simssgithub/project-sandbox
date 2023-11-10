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
    if (slideValue < 25){
        bgColor="red";
        textColor="red"
    }
    if(slideValue <25 && slideValue <= 50){
        bgColor="blue"
    }
  return (
    <div className='container text-center'>
        <Pamagat text={"Slide to grow"}/>
        <SliderComp setValue={slideValue}handleInput={handleSliderValueChange}/>
    </div>
  )
}

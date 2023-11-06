import React from 'react'
import Pamagat from '../components/Pamagat'

export default function <pangKulay>() {

    function handleClick(event){
        console.log(event.target);
    }
    function handleSecclick(e){
        let body = document.querySelector("body");
        body.style.background = getRandomcolor();
        e.target.style.backgroundColor= getRandomcolor();
    };

    function getRandomcolor(){
        let letters = "0123456789ABCDEF";
        let color ="#";
        for (let i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

  return (
    <div className='container m-auto text-center'>
        <Pamagat text={"Randomize Colors"}/>
      <button className='btn btn-danger' onClick={(event) =>handleClick(event)}>Click me</button>
      <button className='btn btn-success' onClick={(e) =>handleSecclick(e)}>Click too</button>
      <button className='btn btn-primary'>Click me</button>
      <button className='btn btn-info'>Click me</button>
    </div>
  )
}

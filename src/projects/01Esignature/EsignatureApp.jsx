import React, {useState} from 'react'
import Pamagat from '../../components/Pamagat'

export default function EsignatureApp() {
const [name, setName] = useState("Your Signature");
const [date, setDate] = useState("jay");

const handleNamechange = (e) =>{
  // console.log(e.target.value);
  setName(e.target.value);
};

const handleDatechange = (e) =>{
  // console.log(e.target.value);
  setDate(e.target.value);
};

  document.body.style.background="eee";
  return (
    <div className='container text-center'>
      <Pamagat classes={"h1"} text={name}/>
      <Pamagat classes={"text-success"} text={!date ? "DoB": date}/>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <footer className='d-flex' style={{justifyContent:"space-around", position:'relative', top:"60vh"}}>
      <input type="date" value={date} onChange={handleDatechange}></input>
      <input type="text" value={name} onChange={handleNamechange}></input>
      </footer>
         </div>
  )
}

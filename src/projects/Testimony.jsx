import React from 'react'
import Button from '../components/Button';
import Pamagat from '../components/Pamagat';
import {BsFillFileEarmarkPostFill} from "react-icons/bs";
import {FaUserAlt} from "react-icons/fa";
import {BiCommentDetail} from "react-icons/bi";
export default function Testimony() {

    const handleClick = () => {
        console.log("My Click");
    }
  return (
    <div className="container m-auto">
        <Pamagat text={"Testimony"}/>
        <Button text={"Post"} 
        btnClass="btn-info " 
        icon={<BsFillFileEarmarkPostFill/>}
        onClick={handleClick}
        />{" "}
        <Button text={"Users"} 
        btnClass="btn-info" 
        icon={<FaUserAlt/>} 
        onClick={handleClick}/>
        {" "}

        <Button text={"Comments"} 
        btnClass="btn-info" 
        icon={<BiCommentDetail/>} 
        onClick={handleClick}
        />
        <Pamagat classes={"card-subtitle mb-2 text-muted"} text={"Select from the Menu"}/>
    </div>
  )
}

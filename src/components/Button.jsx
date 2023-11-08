import React from 'react'

export default function Button({text="", btnClass, icon, onClick}){
    return (
    <button className={`btn ${btnClass} btn btn-outline-dark`} onClick={onClick}>
        {icon}
        {text}
    </button>
    );
} 
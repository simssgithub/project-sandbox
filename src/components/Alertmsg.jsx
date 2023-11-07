import React, { useState, useEffect } from "react";
import Button from "../components/Button";
export default function Alertmsg({ type, message, delay = false }) {
  const [showAlert, setShowAlert] = useState(true);
  
  const closeAlert = (e) => {
    e.target.parentElement.parentElement.classList.add("fadeAlert");
    setTimeout(() =>{
      setShowAlert(false);
    }, 300);
  };
  useEffect(() => {
    delay &&
    setTimeout(() =>{
      setShowAlert(false);
    }, 3000);
  });
  return (
    showAlert && (
      <div className={`alert alert-${type} alert-dismissible fade show`}>
        <div className="alert-close">
          <span className="mr-1">{message}</span>
          <Button btnClass={"btn-close"} onClick={closeAlert} data-dismiss="alert"/>
        </div>
      </div>
    )
  );
}

import React, {useState} from "react";
import Button from "../../components/Button";
export default function TemperatureControllerApp() {
    const [temperature, setTemperature]=useState(0);

    const increaseTemperature = () =>{
        setTemperature(temperature + 1);
    };

    const decreaseTemperature = () =>{
        setTemperature(temperature - 1);
    };
    
  return (
    <div>
      <div className="container mt-3 d-flex justify-content-center align-items-center">
        <div
          className="card bg-light"
          style={{
            width: 300,
            height: 320,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <br />
          <h1
            className={`text-light card border-50 ${temperature > 0 ? "bg-danger" : "bg-info"}`}
            style={{
              height: 250,
              width: 250,
              border: "2px solid #666",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
        {temperature}°C
          </h1>
          <div className="d-flex">
            <div className="p-2">
              <Button
                text="-"
                btnClass={"btn btn-outline-dark btn-lg"}
                onClick={decreaseTemperature}
              />
            </div>
            <div className="ml-auto p-2">
              <Button
                text="+"
                btnClass={"btn btn-outline-dark btn-lg"}
                onClick={increaseTemperature}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

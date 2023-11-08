import React from "react";
import Button from "../../components/Button";
export default function TemperatureControllerApp() {
  return (
    <div>
      <div className="container mt-3 d-flex justify-content-center align-items-center">
        <div
          className="card bg-light"
          style={{
            width: 300,
            height: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <br />
          <h1
            className="text-light card border-50"
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
            temperature
          </h1>
          <div className="d-flex">
            <div className="p-2">
              <Button
                text="-"
                btnClass={"btn btn-outline-dark btn-lg"}
                onClick={()=>console.log("-")}
              />
            </div>
            <div className="ml-auto p-2">
              <Button
                text="+"
                btnClass={"btn btn-outline-dark btn-lg"}
                style={{ marginRight: "10px" }}
                onClick={()=>console.log("+")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

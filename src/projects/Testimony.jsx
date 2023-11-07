import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Pamagat from "../components/Pamagat";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
export default function Testimony() {
  const textStyle = {
    textAlign: "left",
  };

  const [testimonials, setTestimonials] = useState([""]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  return (
    <div className="container m-auto">
      <Pamagat text={"Testimony"} />
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => setTestimonials("Posts")}
        >
          <BsFillFileEarmarkPostFill />
          Post
        </button>

        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => setTestimonials("Users")}
        >
          <FaUserAlt />
          Users
        </button>

        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => setTestimonials("Comments")}
        >
          <BiCommentDetail />
          Comments
        </button>
      </div>

      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading" style={textStyle}>
          <Pamagat
            text={!testimonials ? "Select from the Menu" : testimonials}
          />
        </h4>
      </div>

      {!items
        ? null
        : items.map((item) => {
            return (
              <div className="card text-white bg-primary mb-3" key={item.id}>
                {item.name && (
                  <h2 className="card-header" style={textStyle}>
                    <div className="card-body">
                      <h5 className="card-title bg-primary"> {item.name}</h5>
                    </div>
                  </h2>
                )}
                <div className="card-body bg-white text-black" style={textStyle}>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
                {item.email && (
                  <small className="card-footer" style={textStyle}>
                    {item.email}
                  </small>
                )}
              </div>
            );
          })}
    </div>
  );
}

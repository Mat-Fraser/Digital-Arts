import React from "react";
import "./Featured.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Buy best quality Digital Arts here at one place.
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder=' "building"' onChange={(e) => setInput(e.target.value)}/>
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Pixar</button>
            <button>AI generated </button>
            <button>graphics art</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="https://i.ibb.co/g4BGLF4/c2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;

import React from "react";
import Movie from "../../Assets/BAYC.mp4";
import "./video.css";

function Video() {
  return (
    <div className="video">
      <video
        autoPlay
        src={Movie}
        style={{
          width: "90%",
         
        }}
      ></video>

      <div className="video-text">
        <h2>
          Welcome to <br />
          the Bored Ape
          <br /> Yatch Club
        </h2>
        <button>Enter</button>
        <hr />
       
      </div>
     
    </div>
  );
}

export default Video;

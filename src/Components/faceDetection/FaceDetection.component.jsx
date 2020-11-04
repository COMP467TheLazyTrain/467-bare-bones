import React, { useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import "./FaceDetection.styles.css";

const FaceDetection = (props) => {
  //Destructuring imageRef and canvasRef from props
  const { image, canvas } = props;

  function videoClick() {
    var video = document.getElementById("video");
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var myButton = document.getElementById("videoButton");

    if (myButton.innerHTML == "Track Face") {
      video.play();
      myButton.innerHTML = "Stop";

      var tracker = new window.tracking.ObjectTracker("face");
      tracker.setInitialScale(4);
      tracker.setStepSize(2);
      tracker.setEdgesDensity(0.1);

      window.tracking.track("#video", tracker, { camera: true });

      tracker.on("track", function (event) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        event.data.forEach(function (rect) {
          context.strokeStyle = "#a64ceb";
          context.strokeRect(rect.x, rect.y, rect.width, rect.height);
          context.font = "11px Helvetica";
          context.fillStyle = "#fff";
          context.fillText(
            "x: " + rect.x + "px",
            rect.x + rect.width + 5,
            rect.y + 11
          );
          context.fillText(
            "y: " + rect.y + "px",
            rect.x + rect.width + 5,
            rect.y + 22
          );
        });
      });
    } else {
      video.pause();
      var stream = video.srcObject;
      var tracks = stream.getTracks();

      for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
      }

      video.srcObject = null;
      myButton.innerHTML = "Track Face";
    }
  }

  return (
    <>
      <Container>
        <div id="trackerContainer">
          <hr />
          <h1>Webcam Face Tracking</h1>
          <video id="video" width="320" height="240"></video>
          <div id="overlay">
            {" "}
            <canvas id="canvas" width="320" height="237"></canvas>{" "}
          </div>
          <br></br>
          <button id="videoButton" onClick={videoClick}>
            Track Face
          </button>
        </div>
      </Container>
    </>
  );
};

export default FaceDetection;

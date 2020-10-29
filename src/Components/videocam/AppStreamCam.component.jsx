import React, {useState,useContext} from "react";
import Container from "@material-ui/core/Container";

const AppStreamCam = () => {
  const streamCamVideo = () => {
    var constraints = { audio: true, video: { width: 1280, height: 720 } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function(mediaStream) {
        var video = document.querySelector("#videoElement");

        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
          video.play();
        };
      })
      .catch(function(err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
  }
  const scv = streamCamVideo();
    return (
      <Container style={{ display: "flex", justifyContent:"center",alignItems:"center", margin:"2rem auto"}}>
      <div>
        <div id="container">
          <video id="videoElement" controls></video>
        </div>
        <br/>
        <button onClick={scv}>Start streaming</button>
      </div>
      </Container>
    );
};

export default AppStreamCam;

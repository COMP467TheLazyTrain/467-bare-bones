import React, { useState, useContext, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HeaderAndNav } from "./Navigation/Header";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import PublishIcon from "@material-ui/icons/Publish";
import CancelIcon from "@material-ui/icons/Cancel";
import { PhotoContext } from "./PhotoProvider";
import Brightness from "./Components/brightness/Brightness.component";
import "./App.css";
import SobelFeature from "./Components/sobel-feature/SobelFeature.component";
import Contrast from "./Components/Contrast/Contrast.component";
import FaceDetection from "./Components/faceDetection/FaceDetection.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const styles = useStyles();
  //Setting up references to DOM elements
  const imageRef = useRef();
  const canvasRef = useRef();
  const [mainPhoto, setMainPhoto] = useContext(PhotoContext);

  const [imgData, setImgData] = useState(null);

  const handlePhotoChange = async (event) => {
    event.preventDefault();
    try {
      if (event.target.files[0]) {
        const photo = URL.createObjectURL(event.target.files[0]);
        setMainPhoto(photo);
        imageRef.current.onload = () => {
          // Initialize matrix
          const mat = window.cv.imread(imageRef.current);
          // Display on canvas
          window.cv.imshow(canvasRef.current, mat);
          //Delete original matrix
          mat.delete();
        };
      }
    } catch {
      console.log("Error");
    }
  };

  return (
    <>
      <Router>
        <HeaderAndNav />
        <Container>
          <Card>
            <div>
              <label>
                <input
                  style={{ display: "none" }}
                  accept="image/*"
                  type="file"
                  onChange={handlePhotoChange}
                />
                <IconButton aria-label="upload picture" component="span">
                  <PublishIcon />
                </IconButton>
              </label>
              <IconButton
                style={{ float: "right" }}
                onClick={() => setMainPhoto("")}
                aria-label="upload picture"
                component="span"
              >
                <CancelIcon />
              </IconButton>
            </div>
            <CardMedia>
              <div style={{ display: "flex" }}>
                <img
                  ref={imageRef}
                  className={styles.mainImg}
                  alt=""
                  onLoad={() => console.log("Uploaded")}
                  height="auto"
                  src={mainPhoto}
                />
                <canvas
                  ref={canvasRef}
                  id="canvasOutput"
                  className={styles.mainImg}
                  style={imgData}
                ></canvas>
              </div>
            </CardMedia>
          </Card>
        </Container>

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Brightness
                image={imageRef}
                canvas={canvasRef}
                setImgData={setImgData}
              />
            )}
          />
          <Route
            exact
            path="/Contrast"
            render={() => <Contrast image={imageRef} canvas={canvasRef} />}
          />
          <Route
            exact
            path="/Sobel"
            render={() => <SobelFeature image={imageRef} canvas={canvasRef} />}
          />
          <Route
            exact
            path="/FaceDetection"
            render={() => <FaceDetection image={imageRef} canvas={canvasRef} />}
          />
        </Switch>
      </Router>
    </>
  );
}
const useStyles = makeStyles(() => ({
  mainImg: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "15px",
    maxWidth: "400px",
  },
}));

export default App;

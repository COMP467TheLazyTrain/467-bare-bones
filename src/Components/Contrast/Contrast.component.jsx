import React, { useState, useContext } from "react";
import Container from "@material-ui/core/Container";

const Contrast = props => {
  const { image, canvas } = props;
  const [value, setValue] = useState(0);

  // Apply Contrast
  const invertClick = () => {
    let matrix1 = window.cv.imread(image.current);
    let matrix2 = new window.cv.Mat();
    window.cv.threshold(matrix1, matrix2, 70, 255, window.cv.THRESH_BINARY);
    window.cv.imshow("canvasOutput", matrix2);
  };

  return (
    <>
      <Container
        style={
          {
            //display: "flex",
            //justifyContent: "center",
            //alignItems: "center",
            //margin: "2rem auto"
          }
        }
      >
        <div
          className="slider-container"
          style={
            {
              //display: "flex", justifyContent: "center", margin: "3rem"
            }
          }
        >
          <button className={`sidebar-item`} onClick={invertClick}>
            Invert
          </button>
        </div>
      </Container>
    </>
  );
};

export default Contrast;

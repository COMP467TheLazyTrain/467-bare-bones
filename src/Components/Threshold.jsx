import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

export const Threshold = (props) => {
  const handleClick = () => {
    let mat = window.cv.imread(props.img.current);
    let gray = new window.cv.Mat();

    // Gray threshold image
    window.cv.cvtColor(mat, gray, window.cv.COLOR_RGBA2GRAY, 0);
    // Apply threshold
    window.cv.threshold(
      gray,
      gray,
      100,
      255,
      window.cv.THRESH_BINARY_INV + window.cv.THRESH_OTSU
    );

    window.cv.imshow("canvasOutput", gray);
    mat.delete();
    gray.delete();
  };
  return (
    <>
      <Container>
        <h1>HI :) </h1>
        <Button onClick={handleClick} style={{ backgroundColor: "white" }}>
          <p>Image Trace</p>
        </Button>
      </Container>
    </>
  );
};

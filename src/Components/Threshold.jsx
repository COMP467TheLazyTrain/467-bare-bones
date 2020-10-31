import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

export const Threshold = (props) => {
  const handleClick = () => {
    console.log("CLIcking");
    let mat = window.cv.imread(props.img.current);
    console.log("My mat::::", mat);

    let dst = new window.cv.Mat();
    let gray = new window.cv.Mat();

    // gray and threshold image
    window.cv.cvtColor(mat, gray, window.cv.COLOR_RGBA2GRAY, 0);
    window.cv.threshold(
      gray,
      gray,
      0,
      255,
      window.cv.THRESH_BINARY_INV + window.cv.THRESH_OTSU
    );

    window.cv.imshow("canvasOutput", gray);
    mat.delete();
    dst.delete();
    gray.delete();
  };
  return (
    <>
      <Container>
        <h1>HI :) </h1>
        <Button onClick={handleClick} style={{ backgroundColor: "blue" }}>
          <p>Turn to Vector</p>
        </Button>
      </Container>
    </>
  );
};

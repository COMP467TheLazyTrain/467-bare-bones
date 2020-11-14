import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

export const Threshold = (props) => {
  const handleClick = () => {
    let mat = window.cv.imread(props.image.current);
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
    props.setImgData(gray);
    mat.delete();
    gray.delete();
  };
  return (
    <>
      <Container style={{ marginTop: "2rem" }}>
        <Button
          variant="contained"
          onClick={handleClick}
          style={{
            backgroundColor: "white",
            height: "3rem",
          }}
        >
          <p style={{ textTransform: "none" }}>Image Trace</p>
        </Button>
      </Container>
    </>
  );
};

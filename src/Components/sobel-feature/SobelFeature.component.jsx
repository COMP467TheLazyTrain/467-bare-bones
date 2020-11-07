import React, { useState, useContext } from "react";
import Container from "@material-ui/core/Container";

const SobelFeature = props => {
  //Destructuring imageRef and canvasRef from props
  const { image, canvas } = props;
  const [value, setValue] = useState(0);

  const handleClick = () => {
    //do somthing code
    let src = window.cv.imread(image.current);
    let dst = window.cv.Mat.zeros(src.cols, src.rows, window.cv.CV_8UC3);
    window.cv.cvtColor(src, src, window.cv.COLOR_RGBA2GRAY, 0);
    window.cv.threshold(src, src, 120, 200, window.cv.THRESH_BINARY);
    let contours = new window.cv.MatVector();
    let hierarchy = new window.cv.Mat();
    // You can try more different parameters
    window.cv.findContours(
      src,
      contours,
      hierarchy,
      window.cv.RETR_CCOMP,
      window.cv.CHAIN_APPROX_SIMPLE
    );
    // draw contours with random Scalar
    for (let i = 0; i < contours.size(); ++i) {
      let color = new window.cv.Scalar(
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255)
      );
      window.cv.drawContours(
        dst,
        contours,
        i,
        color,
        1,
        window.cv.LINE_8,
        hierarchy,
        100
      );
    }
    window.cv.imshow("canvasOutput", dst);
    src.delete();
    dst.delete();
    contours.delete();
    hierarchy.delete();
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
          style={{
            display: "flex",
            justifyContent: "flex-end"
            //margin: "3rem"
          }}
        >
          <button className={`sidebar-item`} onClick={handleClick}>
            Sobel
          </button>
        </div>
      </Container>
    </>
  );
};

export default SobelFeature;

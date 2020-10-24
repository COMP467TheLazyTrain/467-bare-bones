import React, {useContext} from "react";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import BrightnessMediumIcon from "@material-ui/icons/BrightnessMedium";
import { PhotoContext } from "../../PhotoProvider";
//import {ScriptTag} from 'react-script-tag';

export const SobelFeature = () => {
  //const cv = require('opencv')
  const [photo, setPhoto] = useContext(PhotoContext)
  const handleClick = () => {
    //do somthing code
    //cv.putText(mat, "Hello", cv.FONT_ITALIC, 20.0, cv.COLOR_RGBA2GRAY, 1, 1, false);
    /*
    let src = cv.imread(photo);
    let dst = cv.Mat.zeros(src.cols, src.rows, cv.CV_8UC3);
    cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
    cv.threshold(src, src, 120, 200, cv.THRESH_BINARY);
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    // You can try more different parameters
    cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
    // draw contours with random Scalar
    for (let i = 0; i < contours.size(); ++i) {
        let color = new cv.Scalar(Math.round(Math.random() * 255), Math.round(Math.random() * 255),
                                  Math.round(Math.random() * 255));
        cv.drawContours(dst, contours, i, color, 1, cv.LINE_8, hierarchy, 100);
    }
    cv.imshow('canvasOutput', dst);
    src.delete(); dst.delete(); contours.delete(); hierarchy.delete();
    */
  };
  return (
    <>
      <Container style={{ display: "flex" }}>
        <p>Run Sobel:</p>
        <div>
          <IconButton onClick={handleClick}>
            <BrightnessMediumIcon />
          </IconButton>
        </div>
      </Container>
    </>
  );
};

import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import BrightnessMediumIcon from "@material-ui/icons/BrightnessMedium";
import { PhotoContext } from "../../PhotoProvider";

export const Contrast = () => {
  const [photo, setPhoto] = useContext(PhotoContext);
  const handleClick = () => {};
  return (
    <>
      <Container style={{ display: "flex" }}>
        <p>Run Contrast:</p>
        <div>
          <IconButton onClick={invertClick}>
            <BrightnessMediumIcon />
          </IconButton>
        </div>
      </Container>
    </>
  );
};

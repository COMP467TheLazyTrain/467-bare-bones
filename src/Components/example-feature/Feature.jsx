import React from "react";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import BrightnessMediumIcon from "@material-ui/icons/BrightnessMedium";

export const ExampleFeature = () => {
  return (
    <>
      <Container style={{ display: "flex" }}>
        <p>Features:</p>
        <div>
          <IconButton>
            <BrightnessMediumIcon />
          </IconButton>
        </div>
      </Container>
    </>
  );
};

import React, { useContext, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { PhotoContext } from "../PhotoProvider";
import Button from "@material-ui/core/Button";

export const Header = (props) => {
  // const [mainPhoto, setMainPhoto] = useContext(PhotoContext);

  // if (mainPhoto) {
  //   console.log("Main photo:::", mainPhoto);
  // } else {
  //   console.log("No photo");
  // }

  return (
    <>
      <Container>
        <h1>HI :) </h1>
      </Container>
    </>
  );
};

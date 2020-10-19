import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HeaderAndNav } from "./Navigation/Main";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import PublishIcon from "@material-ui/icons/Publish";
import CancelIcon from "@material-ui/icons/Cancel";
import { PhotoContext } from "./PhotoProvider";

function App() {
  const styles = useStyles();
  const [component, setComponent] = useState(React.FC);
  const [mainPhoto, setMainPhoto] = useContext(PhotoContext);

  const handleNavItemClick = (Component) => {
    setComponent(<Component />);
  };

  const handlePhotoChange = async (event) => {
    event.preventDefault();
    try {
      if (event.target.files[0]) {
        const photo = URL.createObjectURL(event.target.files[0]);
        setMainPhoto(photo);
      }
    } catch {
      console.log("Error");
    }
  };

  return (
    <>
      <HeaderAndNav func={handleNavItemClick} />
      <Container style={{ marginLeft: "15%" }}>
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
            <img
              className={styles.mainImg}
              alt=""
              onLoad={() => console.log("Uploaded")}
              width="400"
              height="auto"
              src={mainPhoto}
            />
          </CardMedia>
        </Card>
      </Container>
      {component}
    </>
  );
}
const useStyles = makeStyles(() => ({
  mainImg: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "5px",
  },
}));

export default App;

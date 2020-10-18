import React, { useState } from "react";
import { HeaderAndNav } from "./Navigation/Main";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import PublishIcon from "@material-ui/icons/Publish";

function App() {
  const [component, setComponent] = useState(React.FC);

  const handleNavItemClick = (Component) => {
    setComponent(<Component />);
  };

  return (
    <>
      <HeaderAndNav func={handleNavItemClick} />
      <Container style={{ backgroundColor: "" }}>
        <Card style={{ height: "400px" }}>
          <div style={{ backgroundColor: "" }}>
            <label>
              <input style={{ display: "none" }} accept="image/*" type="file" />
              <IconButton aria-label="upload picture" component="span">
                <PublishIcon />
              </IconButton>
            </label>
          </div>
          <CardMedia
            style={{ height: "" }}
            // image={require("./assets/city.jpg")}
          ></CardMedia>
        </Card>
      </Container>
      {component}
    </>
  );
}

export default App;

import React, {useState,useContext} from "react";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import BrightnessMediumIcon from "@material-ui/icons/BrightnessMedium";
import Slider from '@material-ui/core/Slider';
import './Brightness.styles.css'; 

const Brightness = (props) => {
 //Destructuring imageRef and canvasRef from props 
  const {image, canvas} = props; 
  const [value, setValue] = useState(0);
 
  const handleChange = (event, newValue) => {
       setValue(newValue);
       //Initializing input matrix and output matrix  
       let mat = window.cv.imread(image.current);
       let mat2 = new window.cv.Mat();
       // Applying openCV method to input matrix
       window.cv.convertScaleAbs(mat, mat2, 1, newValue);
       // Displaying output matrix on canvas 
       window.cv.imshow(canvas.current, mat2);
  };

  return (
    <>
      <Container style={{ display: "flex", justifyContent:"center",alignItems:"center", margin:"2rem 0rem"}}>
        <div>
          <IconButton>
            <BrightnessMediumIcon />
          </IconButton>
        </div>
        <div style={{width:"300px", padding:"0 1rem"}}>
        <Slider style={{color:'black'}}
        onChange={handleChange}
        value={value}
        aria-labelledby="discrete-slider-restrict"
        step={1}
        valueLabelDisplay="auto"
        marks
        min={0}
        max={255}
      />
      </div>
      </Container>
    </>
  );
};

export default Brightness;
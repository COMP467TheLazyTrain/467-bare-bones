import React, {useState,useContext, useEffect} from "react";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import BrightnessMediumIcon from "@material-ui/icons/BrightnessMedium";
import Slider from '@material-ui/core/Slider';
import Slider2 from '../slider2/Slider2'
import './Brightness.styles.css'; 
import SidebarItem from '../sidebar/SideBarItem'


const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
 
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
]

const Brightness = (props) => {
  // start
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedOption = options[selectedOptionIndex]
  // end

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

  useEffect(() => {
    getImageStyle()
  }, [options])
  
  function handleSliderChange({ target }) {
    console.log('>>', target)
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option
        return { ...option, value: target.value }
      })
    })
  }

  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })

     const temp = { filter: filters.join('') }
     console.log(temp)
    return props.setImgData(temp)
    
  }

  // end

  return (
    <>
      <Container style={{ display: "flex", justifyContent:"center",alignItems:"center", margin:"2rem auto"}}>
        <div>
          <IconButton>
            <BrightnessMediumIcon />
          </IconButton>
        </div>
        <div style={{width:"300px", padding:"0 1rem"}}>
        {selectedOptionIndex === 0 ? <Slider style={{display:'flex'}}
          onChange={handleChange}
          value={value}
          aria-labelledby="discrete-slider-restrict"
          step={1}
          // valueLabelDisplay="auto"
          marks
          min={0}
          max={255}
        /> :   <Slider2 
          min={selectedOption.range.min}
          max={selectedOption.range.max}
          value={selectedOption.value}
          aria-labelledby="discrete-slider-restrict"
          step={1}
          // valueLabelDisplay="auto"
          marks
        handleChange={handleSliderChange}
      />}
      </div>
      </Container>
       {/* start  */}
      <div className="sidebar" style={{display: "flex", justifyContent: "center", margin: '3rem'}}>
        {options.map((option, index) => {
          return (
            <SidebarItem
              key={index}
              name={option.name}
              active={index === selectedOptionIndex}
              handleClick={() => setSelectedOptionIndex(index)}
            />
          )
        })}
      </div>
      {/* end  */}
    </>
  );
};

export default Brightness;
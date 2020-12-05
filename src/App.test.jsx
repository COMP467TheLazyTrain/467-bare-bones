import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App'
import logo from "./default.png"
import Slider2 from "./Components/slider2/Slider2"

//Enzyme test configuration
configure({ adapter: new Adapter() });

//Custom event handler for sliders 
const onEventChange = () => {
  console.log("Test passed")
}

// Testing if entire app renders properly
it("should render entire app", () => {
  render(<App />);
});

// Testing default photo 
it("should load on component mount", () => {
  const container = shallow(<App/>)
    expect(container.find('img').props().src).toEqual(logo)
});

// Testing if entire slider component renders 
it("should render entire slider component", () => {
  render(<Slider2 />);
});

// Testing if slider component renders an input 
it("should render an input", () => {
  const component = render(<Slider2 handleChange = {onEventChange}/>);
  const input = component.baseElement.querySelector("input");
  expect(input).toBeDefined();
});

//Testing if correct value gets passed with event on use 
it("should have the correct value", () => {
  const component = render(<Slider2 value={50} handleChange = {onEventChange} />);
  const input = component.baseElement.querySelector("input");
  expect(input.value).toBe("50");
});


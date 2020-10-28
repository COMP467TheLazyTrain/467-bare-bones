import React from 'react'

export default function Slider2({ min, max, value, handleChange}) {
  return (
    <div className="slider-container" >
      <input
        type="range"
        className="slider slider2"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}



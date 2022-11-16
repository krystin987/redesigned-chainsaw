import React, { useState } from 'react';
import { Slider } from '@mui/material';

export interface SliderProps {
  elevation_value: number
  unit_of_measure: string
}

export const ElevationSlider: React.FC<SliderProps> =  ({elevation_value, unit_of_measure}) =>  {

  const [elevation, setElevation] = useState<number | null | number[]>(0)
  const [unit, setUnit] = useState<string | null | string[]>("feet")

  const handleChange = (elevation: number | null | number[]): void => {
    setElevation(elevation)
  }

  return (
    <div>
      <Slider 
        defaultValue={0} 
        min={0}
        max={15000}
        aria-label="Elevation"
        valueLabelDisplay="on"
        onChange={(_, value) => handleChange(value)}
        
        />
        <h2>Elevation: {elevation}</h2>
        <h2>Unit: {unit}</h2>
    </div>
  );
}
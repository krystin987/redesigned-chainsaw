import React, { useState } from 'react';
import { Slider } from '@mui/material';

export interface SliderProps {
  elevation_value: number
  unit_of_measure: string
  onChange: (elevation_value: number|undefined, unit_of_measure: string | undefined) => void
}

export const ElevationSlider: React.FC<SliderProps> =  (props: SliderProps) =>  { //{elevation_value, unit_of_measure}

  const [elevation, setElevation] = useState<number | null | number[]>(0)
  const [unit, setUnit] = useState<string | null | string[]>("feet")

  const handleChange = (elevation: number | null | number[]): void => {
    setElevation(elevation)
    // props.onChange(_, elevation)
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
        <h3>Elevation: {elevation}</h3>
        <h3>Unit: {unit}</h3>
    </div>
  );
}
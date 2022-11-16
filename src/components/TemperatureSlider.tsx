import React, { useState } from 'react';
import { Slider } from '@mui/material';

export interface TemperatureProps {
    temperature: number
    temperature_unit: string
    // unit_of_measure: string
  }

export const TemperatureSlider: React.FC<TemperatureProps> = ({ temperature, temperature_unit }) => {
    return (
        <div>
            <Slider
                aria-label="Temperature"
                defaultValue={0}
                // getAriaValueText={valuetext}
                valueLabelDisplay="on"
                step={1}
                // marks
                min={-10}
                max={110}
        />
        <h2>Temperature: {temperature}</h2>
        <h2>Unit: {temperature_unit}</h2>
      </div>

    )
  }
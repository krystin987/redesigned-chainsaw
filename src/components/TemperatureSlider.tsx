import React, { useState } from 'react';
import { Slider } from '@mui/material';

export interface TemperatureProps {
    temperature_value: number
    temperature_unit: string
  }

export const TemperatureSlider: React.FC<TemperatureProps> = ({ temperature_value, temperature_unit }) => {
    const [temperature, setTemp] = useState<number | null | number[]>(45)
    const [temp_unit, setTempUnit] = useState<string | null | string[]>("Fahrenheight")

    const handleChange = (temperature: number | null | number[]): void => {
        setTemp(temperature)
    }

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
                onChange={(_, value) => handleChange(value)}
        />
        <h3>Temperature: {temperature}</h3>
        <h3>Unit: {temp_unit}</h3>
      </div>

    )
  }
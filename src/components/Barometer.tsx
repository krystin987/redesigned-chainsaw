import React from "react"
import { ElevationSlider } from "./ElevationSlider"
import { HumidityPercentage } from "./Humidity"
import { TemperatureSlider } from "./TemperatureSlider"

export interface BarometerProps {
    barometric_pressure: number
    // unit_of_measure: string
  }

export const Barometer: React.FC<BarometerProps> = () => {
    return (
        <div>
            <ElevationSlider elevation_value={0} unit_of_measure="feet" />
            <TemperatureSlider temperature_value={0} temperature_unit={"farenheit"}/>
            <HumidityPercentage humidity_percent={0}/>
        </div>
    )
  }
import React, {useState} from "react"
// import { ElevationSlider } from "./ElevationSlider"
// import { HumidityPercentage } from "./Humidity"
import { TemperatureSlider } from "./TemperatureSlider"

export interface BarometerProps {
    barometric_pressure: number
    // unit_of_measure: string
  }

export const Barometer: React.FC<BarometerProps> = () => {
    const [baro, setBaro] = useState<number | null | number[]>(0)
    const sendProps = (barometric_pressure: 0) => {

    }

    return (
        <div>
            {/* <ElevationSlider onChange={sendProps} elevation_value={0} unit_of_measure="feet" /> */}
            <TemperatureSlider temperature_value={0} temperature_unit={"Fahrenheit"}/>
            {/* <HumidityPercentage humidity_percent={0}/> */}
        </div>
    )
  }
import React from "react"

export interface HumidityProps {
    humidity_percent: number
  }

export const HumidityPercentage: React.FC<HumidityProps> = ({ humidity_percent }) => {
    return (
     <div>
        <form>
           <h3>Enter Humidity: <input type={"number"}/></h3> 
        </form>
     </div>
    )
  }
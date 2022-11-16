import React from 'react';
// import styled from 'styled-components';


let steps: number[] = [];
steps = steps.fill(3000, 15000)

export const Step: any = ({ currentIndex }: {currentIndex:any}) => {
  // const [index, setIndex] = useState<>({currentIndex});
  return (
    <div className="steps-container">
      {steps.map((step, index) => {
        let color = currentIndex === index ? "#00d4ff" : "black";
        console.log("color", color);
        return (
          <div className="steps-item">
            <h3
              style={{
                margin: 0,
                color: color
              }}
            >
              {step}
            </h3>
          </div>
        );
      })}
    </div>
  );
};


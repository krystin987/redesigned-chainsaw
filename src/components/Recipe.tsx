// import { type } from 'os';
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { Barometer } from './Barometer';
// import {useParams, useNavigate} from "react-router-dom";
var contentful = require('contentful');

export interface RecipeProps {
  recipe: {
    name?: string;
    ingredients?: Array<{quantity: 420, unit: 'grams', type: 'unsalted', name: "butter"}>;
    imageURL?: string;
    originalUrl?: string;
    steps?: Array<string>;
    summary?: Array<string>;
    timers?: number;
    tools?: Array<{name: 'sword'}>;
  };
}

export const Recipe: React.FC<RecipeProps> =  ({recipe}) => {
    
    // let params = useParams();
    let params = "5szxNaw2JPw6YJdBiUoBlZ"
    
    const [details, setDetails] = useState<RecipeProps| null>({recipe});
    const [activeTab, setActiveTab] = useState<string>("ingredients");
    
    const client = contentful.createClient({
        space: 'h955c18fn014',
        accessToken: process.env.REACT_APP_API_KEY,
      });

      useEffect(() => {
        fetchDetails();
      }, []);
    
      const fetchDetails: VoidFunction = async () => {
        const entry = await client.getEntry([params]);
        setDetails(entry.fields)
      }
      
      if(details !== null) {
        console.log(details)
        return (
          <DetailWRapper>
          <div> 
             <h2>{details.recipe.name}</h2>
             <ul>
              {details.recipe.summary?.map((summary_line, index) => (
                <li key={`${params}_${index}`}>{summary_line}</li>
              ))}
             </ul>
             <img src={details.recipe.imageURL} alt={""} />
          </div>
          <Info>
          <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>
              Ingredients
            </Button>
            <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>
              Instructions
            </Button>
            {activeTab === "instructions" && (
              <div>
                <ul>
                  {details.recipe.tools?.map((tool, index) => (
                    <li key={`${params}_${index}`}>{tool.name}</li>
                  ))}
                </ul>
                <ol>
                {details.recipe.steps?.map((step, index) => (
                  <li key={`${params}_${index}`}>{step}</li>
                ))}
                </ol>
              </div>
            )}
    
            {activeTab === "ingredients" && (
              <div>
                <div>
                  <Barometer barometric_pressure ={0}/>
                  {/* <SliderComponent elevation_value={0} unit_of_measure="feet" /> */}
                </div>
                <ul>
                  {details.recipe.ingredients?.map((ingredient, index) => (
                    <li key={`${params}_${index}`}>{ingredient.quantity} {ingredient.unit} {ingredient.type} {ingredient.name}</li>
                  ))}
                </ul>
              </div>
            )} 
    
            {/* {altitude && (
                console.log(details)
            )} */}
    
          </Info>
        </DetailWRapper>

        )
      } else {
        return (
          <h1>Loading...</h1>
      );
     }     
}


const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`

const DetailWRapper = styled.div`
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  /* margin-top: 10rem; */
  margin-bottom: 5rem;
  display: flex:

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
  img {
    height: 30rem;
  }

`

const Info = styled.div`
  marigin-left: 10rem;
`
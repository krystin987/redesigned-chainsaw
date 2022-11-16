import React from 'react';
import { GiCookie, GiMountainRoad } from 'react-icons/gi';
import styled from "styled-components";
import { Link, BrowserRouter } from "react-router-dom";
import { Recipe } from './components/Recipe';


export const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Nav>
            <GiCookie />
            <Logo to={"/"}>Elevation Cookies</Logo>
            <GiMountainRoad />
          </Nav>
        </header>
        <Recipe recipe={{name: "Chocolate Chip Cookies", summary: [], imageURL: "", tools: [] }}/>
      </BrowserRouter>
    </div>
  );
}

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

const Logo = styled(Link)`
  margin-left: .2em;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

export default App;

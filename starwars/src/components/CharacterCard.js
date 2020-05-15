// Write your Character component here
import React from "react";
// import ReactDOM from "react-dom";
//import axios from "axios";

import styled from "styled-components";

const CardDiv = styled.div`
  max-width: 300px;
  background-color: white;
  margin: 20px;
  filter: drop-shadow(-20px 10px 10px darkgrey);
  border-radius: 6px;
  padding: 2%;
`;

const NameStyle = styled.h2`
  color: firebrick;
`;

const CharacterCard = (props) => {
  return (
    <CardDiv>
      <NameStyle>{props.name}</NameStyle>
      <p>Year born: {props.birthyear}</p>
      <p>
        Height and weight: {props.height}cm, {props.mass}kg
      </p>
      <p>
        Attributes: {props.hair} hair, with {props.eyes} eyes
      </p>
      <p>Gender: {props.sex}</p>
      {/* {homeworld.map((planet, index) => (
          <Homeworld key={index} name={planet.name} /> */}
      {/* ))} */}
    </CardDiv>
  );
};

export default CharacterCard;

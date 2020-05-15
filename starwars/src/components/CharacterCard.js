// Write your Character component here
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import styled from "styled-components";

const CardDiv = styled.div`
  width: 300px;
  background-color: white;
  margin: 20px;
  filter: drop-shadow(-1px 2px 2px gray);
  border-radius: 4px;
  padding: 2%;
`;

const NameStyle = styled.h2`
  color: firebrick;
`;

const ContentStyle = styled.p`
  color: #2c2f2e;
  font-size: 14px;
  line-height: 1.5;
`;

const CharacterCard = (props) => {
  return (
    <CardDiv>
      <NameStyle>{props.name}</NameStyle>
      <ContentStyle>Year born: {props.birthyear}</ContentStyle>
      <ContentStyle>
        Height and weight: {props.height}cm, {props.mass}kg
      </ContentStyle>
      <ContentStyle>
        Attributes: {props.hair} hair, with {props.eyes} eyes
      </ContentStyle>
      <ContentStyle>Gender: {props.sex}</ContentStyle>
      {/* {homeworld.map((planet, index) => (
          <Homeworld key={index} name={planet.name} /> */}
      {/* ))} */}
    </CardDiv>
  );
};

export default CharacterCard;

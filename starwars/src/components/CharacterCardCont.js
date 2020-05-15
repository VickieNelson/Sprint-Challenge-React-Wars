import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import styled from "styled-components";

const CharacterCardDiv = styled.div`
  margin: 0;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  margin-left: 4%;
  margin-right: 4%;
`;

const CharacterCardCont = () => {
  const [character, setCharacter] = useState([]);

  //useEffect to pull in API

  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people/")

      .then((response) => {
        setCharacter(response.data.results);
        // console.log(response.data);
      });

    //   .catch(err => {
    //       console.log("No data returned", err);
    //   });
  }, []);

  return (
    <CharacterCardDiv>
      {character.map((person, index) => (
        <CharacterCard
          key={index}
          name={person.name}
          birthyear={person.birth_year}
          height={person.height}
          mass={person.mass}
          hair={person.hair_color}
          eyes={person.eye_color}
          sex={person.gender}
          //   films={person.films}
        />
      ))}
      ))
    </CharacterCardDiv>
  );
};

export default CharacterCardCont;

//     return (

//         <CharactedCardDiv>

// {character.map((person, index)=>{
// <CharacterCard
// key={index}
// name={person.name}
// birthyear = {person.birth_year}
// height = {person.height}
// mass = {person.mass}
// hair = {person.hair_color}
// eyes = {person.eye_color}
// sex = {person.gender}
// films = {person.films}
// url = {person.url}
// starships = {person.starships}
// species = {person.species}

// />

//         </CharactedCardDiv>
//     );
//             };

// export default CharacterCardCont;

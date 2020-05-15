import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import CharacterCard from "./CharacterCard";
import axios from "axios";
import styled from "styled-components";

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

      .catch(err => {
          console.log("No data returned", err);
      });

    },[]);

    return (

        <CharactedCardDiv>

            {characted.map((person, index)=>{
<CharacterCard 
key={index} 
name={person.name}
birthyear = {person.birth_year}
height = {person.height}
mass = {person.mass}
hair = {person.hair_color}
eyes = {person.eye_color}
sex = {person.gender}
films = {person.films}
url = {person.url}
starships = {person.starships}
species = {person.species}


            }
            )}
        </CharactedCardDiv>
    )
export default CharacterCardCont;

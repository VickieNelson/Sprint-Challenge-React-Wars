import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import styled from "styled-components";
import CharacterCardCont from "./components/CharacterCardCont";
import CharacterCard from "./components/CharacterCard";

const HeaderStyle = styled.h1`
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppStyle = styled.div`
  margin: 0;
`;

const SubTitle = styled.h2`
  color: #ffffff;
  margin-top: 12%;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <AppStyle className='App'>
      <HeaderStyle className='Header'>React Wars</HeaderStyle>
      <SubTitle>Character List</SubTitle>

      <CharacterCardCont />
      <CharacterCard />
    </AppStyle>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import styled from "styled-components";
import CharacterCardCont from "./components/CharacterCardCont";

const HeaderStyle = styled.h1`
  font-size: 5rem;
`;

const AppStyle = styled.div`
  margin-top: 10%;
`;

const SubTitle = styled.h2`
  color: #443e3e;
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
    </AppStyle>
  );
};

export default App;

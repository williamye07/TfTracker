import React from 'react';
import styled from 'styled-components'


import Pengu from './images/pengu.png'

import HeaderContainer from './components/HeaderContainer';
import Header from './components/Header';
import HeaderIcon from './components/HeaderIcon';
import InputContainerStyled from './components/InputContainer';

import {Description, AlgDescription} from './components/Description';



const Container = styled.div`
  background: #2ecfc84a;
  min-height: 100vh;
  height: 100%; 
`
function App() {
  return (
    <div className="App">
        <HeaderContainer>
        <HeaderIcon src={Pengu}/>
        <Header>TfT-scouter</Header>
        </HeaderContainer>
        <Container>
          <Description/>
          <InputContainerStyled />
          <AlgDescription/>
        </Container>
    </div>
  );
}

export default App;

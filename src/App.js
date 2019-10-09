import React from 'react';
import Photo from './Components/Photo';
import styled from 'styled-components';

const StyledApp = styled.div`
  text-align: center;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 5%, rgba(55,9,121,1) 30%, rgba(0,158,190,1) 50%, rgba(55,9,121,1) 70%, rgba(2,0,36,1) 95%);
`;
const StyledH1 = styled.h1`
color: white;
padding-top: 20px;
`;

function App() {
  return (
    <StyledApp>
      <StyledH1>NASA Photo of the Day!</StyledH1>
      <Photo />
    </StyledApp>
  );
}

export default App;
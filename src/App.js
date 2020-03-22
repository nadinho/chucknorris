import React from 'react';
import GlobalStyles from './Globalstyles';
import styled from '@emotion/styled';

const SpeechBubble = styled.div`
  height: 300px;
  width: 450px;
  position: absolute;
  top: 70px;
  left: 50px;
  background: darkgrey;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 4px solid darkgrey;
  border-radius: 40px;
  /* -moz-border-radius: 40px;
  -webkit-border-radius: 40px; */
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 33px solid transparent;
    border-left: 46px solid darkgrey;
    border-bottom: 33px solid transparent;
    margin: -53px 0 0 248px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />

      <SpeechBubble>Here come's the API</SpeechBubble>
    </>
  );
}

export default App;

import React from 'react';
import styled from '@emotion/styled';
import GlobalStyles from './Globalstyles';
import SpeechBubble from './components/SpeechBubble';
// import Button from './components/Button';
import chuck from './assets/chuck-norris-4.png';

const Chuck = styled.img`
  height: 400px;
  position: fixed;
  bottom: 0px;
  cursor: pointer;
`;

function App() {
  const [quote, setQuote] = React.useState([]);

  async function getQuote() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const results = await response.json();
    const quote = results.value;
    setQuote(quote);
  }

  React.useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
      <GlobalStyles />

      <SpeechBubble>{quote}</SpeechBubble>
      <Chuck src={chuck} alt="Chuck Norris" onClick={getQuote} />
    </>
  );
}

export default App;

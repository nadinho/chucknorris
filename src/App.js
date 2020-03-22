import React from 'react';
import GlobalStyles from './Globalstyles';
import SpeechBubble from './components/SpeechBubble';
import Button from './components/Button';
// import getQuote from './components/QuoteApi';

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
      <Button onClick={getQuote}>Go</Button>
    </>
  );
}

export default App;

import React from 'react';
import Button from './Button';
// import styled from '@emotion/styled';

export default function randomQuote() {
  const [quote, setQuote] = use.State('');

  React.useEffect(() => {
    async function getQuote() {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const results = await response.json();
      const quote = results.value;
      setQuote(quote);
    }
    getQuote(quote);
  });

  return (
    <>
      <Button onClick={randomQuote()}></Button>
    </>
  );
}

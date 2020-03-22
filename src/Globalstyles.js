import React from 'react';
import { Global, css } from '@emotion/core';

export default function GlobalStyles() {
  return (
    <Global
      styles={(theme) => css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          height: 100vh;
          font-size: 1rem;
          background: grey;
        }
      `}
    />
  );
}

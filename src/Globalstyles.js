import React from 'react';
import { Global, css } from '@emotion/core';
import Wallpaper from './assets/chuck-norris-wallpaper.jpg';

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
          font-size: 1.5rem;
          color: white;
          background-image: url(${Wallpaper});
          background-size: cover;
        }
      `}
    />
  );
}

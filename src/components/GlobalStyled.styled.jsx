import { Global, css  } from '@emotion/react';
import styled from 'styled-components';

export const GlobalStyled = () => {
    return (
      <Global
        styles={css`
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
            color: #212121;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          html {
            box-sizing: border-box;
            overflow-x: hidden;
          }
          img {
            display: block;
            max-width: 100%;
            height: auto;
          }
          *,
          *::before,
          *::after {
            padding: 0px;
            margin: 0px;
            box-sizing: border-box;
          }
          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
              monospace;
          }
          .root {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .date {
            font-weight: 600;
          }
        `}
      />
    );
  };
  
  export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1200px) {
    width: 1100px;
  }
  @media (max-width: 1199px) {
    width: 600px;
  }
  @media (max-width: 767px) {
    width: 320px;
  }
`;


export const TellContainer = styled.div` 
    background-color: rgb(255, 250, 240);
    width: 320px;
    min-height: 200px;
    margin: 30px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 3px 3px 9px #555;
`;
  

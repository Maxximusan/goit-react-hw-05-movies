import styled from 'styled-components';

export const Text = styled.h1`
  color: ${p => p.theme.colors.h1};
  font-family: ${p => p.theme.fonts.monospace};
  /* margin: ${p => p.theme.space[3]}px; */
  font-size: ${p => p.theme.fontSizes.l};

  /* width: auto;
  display: flex;
  justify-content: center;
  align-items: center; */
  padding: 5px;
  margin-top: 0;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  text-align: center;
  box-shadow: 0 0 10px 1px #ff0000;
  /* background-image: repeating-linear-gradient(
    37deg,
    #ff6e6e,
    #fe7359 15px,
    #fcfcfc 15px,
    #fcfcfc 30px
  ); */
  background: #fcfcfc;

  background: linear-gradient(
    -45deg,
    transparent 25%,
    #fcfcfc 25%,
    #fcfcfc 50%,
    transparent 50%,
    transparent 75%,
    #fcfcfc 75%
  );
  background-size: 27px 27px;

  animation: barberpole 30s infinite linear;

  @keyframes barberpole {
    from {
      background-position: 0%;
    }
    to {
      background-position: 100%;
    }
  }
`;

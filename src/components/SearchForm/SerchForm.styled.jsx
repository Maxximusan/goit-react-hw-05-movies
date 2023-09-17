import styled from 'styled-components';

export const Forma = styled.form`
  /* display: flex;
  justify-content: space-evenly; */
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 80px;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  border-radius: 20px;
  cursor: pointer;
  font-size: 30px;
  color: yellow;
  background-color: #027902b9;
  border: none;

  @keyframes changeColor {
    0% {
      color: yellow;
      background-color: #027902b9;
    }
    50% {
      color: #f84d36;
      background-color: #023279b8;
    }

    100% {
      color: yellow;
      background-color: #027902b9;
    }
  }
  animation-name: changeColor;
  animation-duration: 10000ms;
  animation-delay: 1000ms;
  animation-iteration-count: infinite;
`;
export const SearchInput = styled.input`
  font-size: 30px;
`;

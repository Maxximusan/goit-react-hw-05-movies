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
  font-size: ${p => p.theme.fontSizes.s};
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


  @media screen and (min-width: 320px) and (max-width: 479px){
    font-size: ${p => p.theme.fontSizes.xs};
  }

@media screen and (min-width: 480px) and (max-width: 767px){
  font-size: ${p => p.theme.fontSizes.s};
  }

@media screen and (min-width: 768px) and (max-width: 1199px){
  font-size: ${p => p.theme.fontSizes.m};
  }

@media screen and (min-width: 1200px) {

  font-size: ${p => p.theme.fontSizes.l};
 
  }
`;
export const SearchInput = styled.input`
 

  @media screen and (min-width: 320px) and (max-width: 479px){
    font-size: ${p => p.theme.fontSizes.xs};
}

@media screen and (min-width: 480px) and (max-width: 767px){
  font-size: ${p => p.theme.fontSizes.s};
}

@media screen and (min-width: 768px) and (max-width: 1199px){
font-size: ${p => p.theme.fontSizes.m};
}

@media screen and (min-width: 1200px) {

font-size: ${p => p.theme.fontSizes.l};

}
`;

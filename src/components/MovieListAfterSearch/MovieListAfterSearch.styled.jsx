import styled from 'styled-components';

export const P = styled.p`
  color: ${p => p.theme.colors.primary};
  height: 100vw;
`;

export const Gallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 20px;
  padding-bottom: ${p => p.theme.space[6]}px;
`;
export const Li = styled.li`
  /* max-height: 400px; */
  @media screen and (min-width: 330px) and (max-width: 491px){
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 615px) and (max-width: 731px){
    width: 290px;
    &:nth-child(even){
      margin-right: auto;
    }
    &:nth-child(odd){
    margin-left: auto;
  }
  }

  
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  height: 96%;

  padding: 7px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #f18383;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0 0 13px 3px #ff0000;
    transform: scale(1.04);
  }
`;

export const Title = styled.p`
  display: flex;
  padding: 5px;
  color: ${p => p.theme.colors.accent};
`;

import styled from 'styled-components';

export const Gallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;
  padding-bottom: ${p => p.theme.space[4]}px;
  /* margin-left: auto;
  margin-right: auto; */
  
`;
export const Li = styled.li`


  @media screen and (min-width: 380px) and (max-width: 647px){
    width: 350px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 720px) and (max-width: 963px){
    width: 340px;
    &:nth-child(even){
      margin-right: auto;
    }
    &:nth-child(odd){
    margin-left: auto;
  }
  }

  @media screen and (min-width: 1050px) and (max-width: 1279px){
    width: 330px;
    margin-left: auto;
    margin-right: auto;
  }
`
export const Card = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;

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

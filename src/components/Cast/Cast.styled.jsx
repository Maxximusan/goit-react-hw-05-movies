import styled from "styled-components";

export const ActorList = styled.ul`
    /* display: flex;
flex-wrap: wrap;
gap: 20px; */
display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-gap: 20px;
`;

export const ActorItem = styled.li`
        list-style: none;
   
`;

export const Name = styled.p`
    color: blue;
`;

export const Charaster = styled.p`
    color: #149b14;
    max-width: 200px;
`
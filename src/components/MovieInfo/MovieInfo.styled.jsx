import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const ButtonBox = styled.div`
    display: flex;
    
    
`;

export const Link = styled(NavLink)`

display: inline-flex;
align-items: center;
gap: 5px;
    padding: 8px 16px;
  border-radius: 4px;
  /* box-shadow: rgb(235 312 123) 0px 0px 10px 1px; */
 
  text-decoration: none;
  color: #20c5c5;
  background-color: #f7f7f7;
  font-weight: 500;

  &:hover {
 color: #ca2c54;
 }
`;

export const FilmTitle = styled.h2`
     margin: 0 0 20px 0;
     color: #7e20ca;
`;

export const FilmText = styled.p`
    margin: 0 0 40px 0;
`;

export const OverviewTitle = styled.h3`
    margin: 0 0 20px 0;
`;

export const OverviewText = styled.p`
    margin: 0 0 40px 0;
`;

export const GenresTitle = styled.h3`
    margin: 0 0 20px 0;
`;

export const GenresText = styled.p`
     margin: 0 0 40px 0;
`;
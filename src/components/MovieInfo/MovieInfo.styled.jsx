import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonBox = styled.div`
  display: flex;
`;
const Button = `
display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 8px 16px;
  border-radius: 4px;
  /* box-shadow: rgb(235 312 123) 0px 0px 10px 1px; */

  text-decoration: none;
  color: #20c5c5;
 
  font-weight: 500;

  &:hover {
    color: #ca2c54;
  }
`;

export const DarkLink = styled(NavLink)`
  ${Button}
  background-color: #242264;
`;
export const LightLink = styled(NavLink)`
  ${Button}
  background-color: #f2ff7f;
  /* for light #f2ff7f or #ffd8d8;*/
`;

export const FilmTitle = styled.h2`
  margin: 0 0 20px 0;
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.xl};
`;

export const FilmText = styled.p`
  margin: 0 0 40px 0;
  color: ${p => p.theme.colors.primary};
`;

export const OverviewTitle = styled.h3`
  margin: 0 0 20px 0;
  color: ${p => p.theme.colors.h1};
`;

export const OverviewText = styled.p`
  margin: 0 0 40px 0;
  color: ${p => p.theme.colors.primary};
`;

export const GenresTitle = styled.h3`
  margin: 0 0 20px 0;
  color: ${p => p.theme.colors.h1};
`;

export const GenresText = styled.p`
  margin: 0 0 40px 0;
  color: ${p => p.theme.colors.primary};
`;

export const AdditionalTitle = styled.h3`
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Cast = styled.li`
  font-size: ${p => p.theme.fontSizes.m};
`;
export const Reviews = styled.li`
  font-size: ${p => p.theme.fontSizes.m};
`;

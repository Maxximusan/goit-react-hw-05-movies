import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  margin: 10px;
  display: inline-block;
  border-radius: 6px;
  text-decoration: none;
  color: #22b937;
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.l};
  box-shadow: 0 0 10px 1px #22b937;

  &.active {
    color: ${p => p.theme.colors.my};
    box-shadow: 0 0 20px 3px orangered;
  }
  &:hover {
    text-decoration: underline;
  }
`;

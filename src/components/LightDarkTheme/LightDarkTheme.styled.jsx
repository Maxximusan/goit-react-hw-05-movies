import styled from 'styled-components';

export const LightButton = styled.button`
  border: none;
  background-color: ${p => p.theme.colors.black};
  cursor: pointer;
`;

export const DarkButton = styled.button`
  border: none;
  background-color: ${p => p.theme.colors.lightYellow};
  cursor: pointer;
`;

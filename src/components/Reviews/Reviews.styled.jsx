import styled from 'styled-components';

export const Title = styled.p`
  color: ${p => p.theme.colors.h1};

  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const P = styled.p`
  color: ${p => p.theme.colors.primary};
  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px;
`;

import styled, { css } from 'styled-components';

type HomeBackground = {
  background: string;
};

export const Wrapper = styled.div<HomeBackground>`
  ${({ background }) => css`
    background: ${background};
  `}
`;

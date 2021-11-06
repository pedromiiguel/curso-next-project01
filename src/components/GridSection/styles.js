/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../Text/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); */
    grid-template-columns: 1fr 1fr 1fr;

    gap: ${theme.spacings.large};
    counter-reset: grid-counter;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      width: 80%;
      position: relative;
      left: 5rem;
    }

    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: 7rem;
      top: -2rem;
      left: -5rem;
      transform: rotate(5deg);
    }
  `}
`;

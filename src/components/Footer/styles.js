/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../Text/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    word-break: break-word;
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    a {
      color: inherit;
      text-decoration: none;
    }
    & ${TextComponent} {
      font-size: ${theme.fonts.sizes.small};
    }

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;

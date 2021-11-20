import styled, { css } from 'styled-components';

export type HeadingProps = {
  colorDark?: boolean;
  size?: 'small' | 'medium' | 'big' | 'huge';
  uppercase?: boolean;
};

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.fonts.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.fonts.sizes.xlarge};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<HeadingProps>`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.darkBg : theme.colors.lightBg};
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
  `}
`;

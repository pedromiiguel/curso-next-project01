import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${background ? theme.colors.primaryColor : theme.colors.white};
    color: ${background ? theme.colors.white : theme.colors.primaryColor};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;

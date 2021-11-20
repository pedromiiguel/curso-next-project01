import React, { ReactNode } from 'react';
import * as Styled from './styles';

export type HeadingProps = {
  children: ReactNode;
  colorDark?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'big' | 'huge';
  uppercase?: boolean;
};

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'small',
  uppercase = false,
}: HeadingProps) => {
  return (
    <Styled.Title
      colorDark={colorDark}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
};

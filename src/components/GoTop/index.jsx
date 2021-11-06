import * as Styled from './styles';
import { ArrowUpward } from '@styled-icons/material-outlined/ArrowUpward';
export const GoTop = () => {
  return (
    <Styled.Container href="#" title="Go to top" aria-label="Go to top">
      <ArrowUpward />
    </Styled.Container>
  );
};

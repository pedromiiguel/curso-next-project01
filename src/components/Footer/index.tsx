import * as Styled from './styles';
import { Text } from '../Text';
import { SectionContainer } from '../SectionContainer';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Text>{footerHtml}</Text>
      </SectionContainer>
    </Styled.Container>
  );
};

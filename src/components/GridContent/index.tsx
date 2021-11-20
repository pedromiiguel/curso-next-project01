/* eslint-disable no-unused-vars */

import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export type GridContentProps = {
  title: string;
  html: string;
  background: boolean;
  sectionId?: string;
  component?: string;
};

export const GridContent = ({
  title,
  html,
  background = false,
  sectionId = '',
}: GridContentProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase size="big" colorDark={!background} as="h2">
          {title}
        </Heading>
        <Styled.Html>
          <Text>{html}</Text>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};

/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridContent = ({
  title,
  html,
  background = false,
  sectionId = '',
}) => {
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

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  srcImage: P.string,
  background: P.bool,
  sectionId: P.string,
};

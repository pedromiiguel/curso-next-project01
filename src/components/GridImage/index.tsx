// eslint-disable-next-line no-unused-vars

import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export type GridImageProps = {
  title: string;
  description: string;
  grid: {
    altText: string;
    srcImg: string;
  }[];

  background?: boolean;
  sectionId?: string;
  component?: string;
};

export const GridImage = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridImageProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Text>{description}</Text>
        <Styled.Grid>
          {grid.map((el, index) => (
            <Styled.GridElement key={`${el.srcImg} - ${index}`}>
              <Styled.Image src={el.srcImg} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

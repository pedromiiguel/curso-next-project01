import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export type GridSectionProps = {
  title: string;
  description: string;
  grid: {
    title: string;
    description: string;
  }[];
  background?: boolean;
  sectionId?: string;
  component?: string;
};

export const GridSection = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridSectionProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Text>{description}</Text>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading size="medium" colorDark={!background} as="h3">
                {el.title}
              </Heading>
              <Text>{el.description}</Text>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

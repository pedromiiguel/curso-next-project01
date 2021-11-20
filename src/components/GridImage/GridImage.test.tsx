import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';
import mock from './mock';

describe('<GridImage />', () => {
  it('should render grid image with background', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grid image without background', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});

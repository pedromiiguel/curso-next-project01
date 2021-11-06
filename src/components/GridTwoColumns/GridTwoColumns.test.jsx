import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumns } from '.';
import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('should render two columns grid', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render image background', () => {
    renderTheme(<GridTwoColumns {...mock} />);

    expect(screen.getByAltText('Grid Two Columns')).toHaveAttribute(
      'src',
      'assets/images/javascript.svg',
    );
  });
});

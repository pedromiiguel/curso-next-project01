import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Text } from '.';

describe('<Text />', () => {
  it('should render', () => {
    renderTheme(<Text>children</Text>);
    expect(screen.getByText('children')).toBeInTheDocument();
  });

  it('should march snapshot', () => {
    const { container } = renderTheme(<Text>children</Text>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        children
      </div>
    `);
  });
});

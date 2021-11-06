import { renderTheme } from '../../styles/render-theme';
import Home from '.';

describe('<Home />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Home />);

    expect(container).toMatchSnapshot();
  });
});

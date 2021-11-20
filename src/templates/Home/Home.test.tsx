import { renderTheme } from '../../styles/render-theme';
import Home from '.';

describe('<Home />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <Home
        data={[
          {
            menu: { links: [], text: '', link: '', srcImg: '' },
            sections: [],
            footerHtml: '',
            slug: '',
            title: '',
          },
        ]}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});

import { screen } from '@testing-library/dom';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.small,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.lightBg,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.small,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">Texto</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">Texto</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">Texto</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge,
    });
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    screen.getByRole('heading', { name: 'texto' });

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyleRule(
      'font-size',
      theme.fonts.sizes.xlarge,
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Texto</Heading>);
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Heading as="h6">Texto</Heading>);
    expect(container).toMatchSnapshot();
  });
});

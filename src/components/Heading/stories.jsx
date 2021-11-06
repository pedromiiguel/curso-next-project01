import { Heading } from './index';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto tá escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'dark',
  },
  colorDark: false,
};

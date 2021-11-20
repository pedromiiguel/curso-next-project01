import { Meta, Story } from '@storybook/react/types-6-0';
import { Heading, HeadingProps } from './index';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto tá escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Light: Story<HeadingProps> = (args) => <Heading {...args} />;
export const Dark: Story<HeadingProps> = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'dark',
  },
  colorDark: false,
};

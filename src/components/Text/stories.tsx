import { Meta, Story } from '@storybook/react/types-6-0';
import { Text, TextProps } from '.';

export default {
  title: 'Text',
  component: Text,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur,
    adipisicing elit. Recusandae nemo ipsa impedit?
    Itaque facilis earum, aspernatur a nostrum ratione.
    Quidem consequatur saepe voluptatum commodi incidunt ab,
    officia assumenda eligendi minima.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<TextProps> = (args) => {
  return (
    <div>
      <Text {...args} />
    </div>
  );
};

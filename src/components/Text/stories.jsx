import { Text } from '.';

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
};

export const Template = (args) => {
  return (
    <div>
      <Text {...args} />
    </div>
  );
};

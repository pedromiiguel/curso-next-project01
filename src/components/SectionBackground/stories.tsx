import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackground, SectionBackgroundProps } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quae
          voluptate ipsum, ullam qui dicta iste, nihil voluptatem est inventore,
          asperiores tenetur perspiciatis ex maiores libero blanditiis
          perferendis neque. Illo?
        </p>
      </div>
    ),
    background: true,
  },
  argTypes: {
    children: { type: '' },
  },
} as Meta;

export const Template: Story<SectionBackgroundProps> = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};

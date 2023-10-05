import type {Meta, StoryObj} from '@storybook/react';

import DoubleButton from './DoubleButton';
import Button from './Button';

const meta: Meta<typeof DoubleButton> = {
  title: 'Component/DoubleButton',
  component: DoubleButton,
} as Meta<typeof DoubleButton>;

export default meta;

type Story = StoryObj<typeof DoubleButton>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <Button onPress={() => {}} label={'Inscription'}></Button>
        <Button onPress={() => {}} label={'Connexion'}></Button>
      </>
    ),
  },
};

import type {Meta, StoryObj} from '@storybook/react';

import DoubleButton from './DoubleButton';
import DefaultButton from "./DefaultButton";

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
        <DefaultButton onPress={() => {}} label={'Inscription'}></DefaultButton>
        <DefaultButton onPress={() => {}} label={'Connexion'}></DefaultButton>
      </>
    ),
  },
};

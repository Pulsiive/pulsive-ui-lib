import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pagination } from '../../src/component/snippet';

export default {
  title: 'Snippets/Pagination',
  component: Pagination,
  argTypes: {
    page: { control: 'disabled' },
    nbPages: { control: 'disabled' }
  }
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  const [page, setPage] = useState<number>(1);

  return (
    <Pagination {...args} page={page} pageCount={9} onClick={setPage} />
  );
}

export const Default = Template.bind({});

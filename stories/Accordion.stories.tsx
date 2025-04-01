import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '../lib/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: {
    multiToggle: false,
    data: [
      {
        id: 1,
        header: 'What is React?',
        body: 'React is a JavaScript library for building UIs.',
      },
      {
        id: 2,
        header: 'How does React work?',
        body: 'React uses a virtual DOM to optimize rendering.',
      },
      {
        id: 3,
        header: 'What is JSX?',
        body: 'JSX is a syntax extension for JavaScript that looks like XML/HTML.',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {};

export const MultiToggle: Story = {
  args: {
    multiToggle: true,
  },
};

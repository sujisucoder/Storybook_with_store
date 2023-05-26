import type { Meta, StoryObj } from '@storybook/angular/';

import { TaskComponent } from './task.component';
import { action } from '@storybook/addon-actions';
import { Task } from '../../models/task.model';
const meta: Meta<TaskComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Task/TaskComponent',
  component: TaskComponent,

};

export default meta;
type Story = StoryObj<TaskComponent>;

const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};


export const DefaultTask: Story = {
args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    }
  },
};

export const Pinned: Story = {
  args:{
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_PINNED',
    },
  }
};

export const Archived: Story = {
args:{
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_ARCHIVED',
  }
}
};

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;


export const LongTitle: Story = {
args:{
  task: {
    ...(DefaultTask?.args?.['task'] as Task),
    title: longTitleString,
  },
}
};

import type { Meta, StoryObj } from '@storybook/angular';

 import { importProvidersFrom } from '@angular/core';

 import { Store, NgxsModule } from '@ngxs/store';
 import { TaskListState } from 'src/app/state/tasklist.state';
 import { TaskPinState } from 'src/app/state/tasklist-pinned.state';  


 import { moduleMetadata, applicationConfig } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { PureInboxScreenComponent } from '../pure-inbox-screen/pure-inbox-screen.component';

import { TaskModule } from '../task.module'; 

const meta: Meta<PureInboxScreenComponent> = {
  component: PureInboxScreenComponent,
  title: 'Data/InboxScreen',
 
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TaskModule],
    }),
   applicationConfig({
     providers: [Store, importProvidersFrom(NgxsModule.forRoot([TaskPinState]))],
    }),
  ],
};

export default meta;
type Story = StoryObj<PureInboxScreenComponent>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: true,
  },
};

import type { Meta, StoryObj } from '@storybook/angular';

import { importProvidersFrom } from '@angular/core';

 import { Store, NgxsModule } from '@ngxs/store';
 import { TaskListState } from 'src/app/state/tasklist.state'; 

 import { moduleMetadata, applicationConfig } from '@storybook/angular';


import { CommonModule } from '@angular/common';

import {PureInboxScreenComponent} from './pure-inbox-screen.component';

import { TaskModule } from '../task.module';

const meta: Meta<PureInboxScreenComponent> = {
  component: PureInboxScreenComponent,
  title: 'Screen/PureInboxScreen',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TaskModule],
    }),
    applicationConfig({
     providers: [Store, importProvidersFrom(NgxsModule.forRoot([TaskListState]))],
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
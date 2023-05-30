
import type { Meta, StoryObj } from '@storybook/angular';

 import { importProvidersFrom } from '@angular/core';

 import { Store, NgxsModule } from '@ngxs/store';
 import { TaskListState } from 'src/app/state/tasklist.state'; 
 import { TaskPinState } from 'src/app/state/tasklist-pinned.state';  


 import { moduleMetadata, applicationConfig } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { TaskListComponent } from './tasklist.component'; 

import { TaskModule } from '../task.module'; 

const meta: Meta<TaskListComponent> = {
  component: TaskListComponent,
  title: 'Data/TaskList',

  decorators: [
    moduleMetadata({
      imports: [CommonModule, TaskModule],
    }),
   applicationConfig({
     providers: [Store, importProvidersFrom(NgxsModule.forRoot([]))],
    }),
  ],
};

export default meta;
type Story = StoryObj<TaskListComponent>;

export const Default: Story = {
    args: {
        
    
    },

};

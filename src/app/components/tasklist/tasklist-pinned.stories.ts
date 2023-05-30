
import type { Meta, StoryObj } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { Store, NgxsModule } from '@ngxs/store';
import { TaskPinState } from 'src/app/state/tasklist-pinned.state';  


import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TaskListPinModule } from './tasklist-modules/tasklist-pinned.module'; 

import { TaskListComponent } from './tasklist.component'; 

const meta: Meta<TaskListComponent> = {
  component: TaskListComponent,
  title: 'Data/TaskListPinned',
  
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TaskListPinModule],
    }),
   applicationConfig({
     providers: [Store, importProvidersFrom(NgxsModule.forRoot([]))],
    }),
  ],
};

export default meta;
type Story = StoryObj<TaskListComponent>;

export const Pinned: Story = {
    args: {
        
    
    },

};
        
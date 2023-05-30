
import type { Meta, StoryObj } from '@storybook/angular';

 import { importProvidersFrom } from '@angular/core';

 import { Store, NgxsModule } from '@ngxs/store';


 import { moduleMetadata, applicationConfig } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { InboxScreenComponent } from './inbox-screen.component'; 

import { InboxScreenModule } from './inbox-module/inboxsScreen.module'; 

const meta: Meta<InboxScreenComponent> = {
  component: InboxScreenComponent,
  title: 'Data/InboxScreenError',
 
  decorators: [
    moduleMetadata({
      imports: [CommonModule, InboxScreenModule],
    }),
   applicationConfig({
     providers: [Store, importProvidersFrom(NgxsModule.forRoot([]))],
    }),
  ],
};

export default meta;
type Story = StoryObj<InboxScreenComponent>;

export const Error: Story = {


};
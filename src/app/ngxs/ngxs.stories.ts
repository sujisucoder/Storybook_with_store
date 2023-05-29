import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { NgxsComponent } from './ngxs.component';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule,MarkdownService } from 'ngx-markdown';
import { applicationConfig } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';

const metaDetail: Meta<NgxsComponent> = {

    title: 'Setup/Ngxs',
  component: NgxsComponent,
  decorators:[
    moduleMetadata({
        //👇 Imports both components to allow component composition with storybook
        declarations: [NgxsComponent],
        imports: [            
            CommonModule,
            // SharedModule,
            HttpClientModule,
            MarkdownModule.forRoot({loader: HttpClient}),
        ],
        providers:[MarkdownService]
      }),
      applicationConfig({
        providers: [
          importProvidersFrom(
            MarkdownService
          ),
        ],
      }),
  componentWrapperDecorator(story => `<app-ngxs [myselectedtemp]= "myselectedtemp"></app-ngxs>`)
  ]
};

export default metaDetail;
type StoryDetail = StoryObj<NgxsComponent>;


const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};


export const Installation: StoryDetail = {
    args:{
      myselectedtemp : 'installationNgxs'
    }
};


export const Create_Store: StoryDetail = {
  args:{
    myselectedtemp : 'createStore'
  }
};

export const Create_Action: StoryDetail = {
  args:{
    myselectedtemp : 'createAction'
  }
};

export const Create_State: StoryDetail = {
  args:{
    myselectedtemp : 'createState'
  }
};

export const Create_Html: StoryDetail = {
  args:{
    myselectedtemp : 'createHtml'
  }
};
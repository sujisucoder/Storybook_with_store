
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { HideComponent } from '../hide/hide.component';
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { applicationConfig } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
// import { SharedModule } from '../shared/shared.module';

const metaDetail: Meta<HideComponent> = {

    
  title: 'Hide/Task',
  component: HideComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with storybook
      declarations: [HideComponent],
      imports: [
        CommonModule,
        // SharedModule,
        HttpClientModule,
        MarkdownModule.forRoot({ loader: HttpClient }),
      ]
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(
          CommonModule,
          HttpClientModule,
          MarkdownModule.forRoot({ loader: HttpClient }),
          MarkdownService
        ),
      ],
    }),
    componentWrapperDecorator(story => `<app-hide-story [myselectedtemp]= "myselectedtemp"></app-hide-story>`)
  ]
};

export default metaDetail;
type StoryDetail = StoryObj<HideComponent>;


export const SimpleTaskMermaid: StoryDetail = {	
  args: {	
    myselectedtemp: 'simpleTask'	
  }	
};	
export const TaskListMermaid: StoryDetail = {	
  args: {	
    myselectedtemp: 'taskList'	
  }	
};
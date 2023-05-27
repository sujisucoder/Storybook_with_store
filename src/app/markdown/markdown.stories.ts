
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { MarkdownComponent } from './markdown.component';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule,MarkdownService } from 'ngx-markdown';
import { applicationConfig } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
// import { SharedModule } from '../shared/shared.module';

const metaDetail: Meta<MarkdownComponent> = {

  title: 'Setup/Markdown',
  component: MarkdownComponent,
  decorators:[
    moduleMetadata({
        //👇 Imports both components to allow component composition with storybook
        declarations: [MarkdownComponent],
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
  componentWrapperDecorator(story => `<app-markdowncode [myselectedtemp]= "myselectedtemp"></app-markdowncode>`)
  ]
};

export default metaDetail;
type StoryDetail = StoryObj<MarkdownComponent>;


const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};


export const MarkdownFromTemplate: StoryDetail = {
  args:{
    myselectedtemp : 'fromTemplate'
  }
  };

  export const MarkdownFromComponent: StoryDetail = {
    args:{
      myselectedtemp : 'fromComponent'
    }
    };

    export const MarkdownFromsrc: StoryDetail = {
      args:{
        myselectedtemp : 'fromSrc'
      }
      };

      export const ShowCommandline: StoryDetail = {
        args:{
          myselectedtemp : 'showcommandline'
        }
        };

        export const ShowClipboard: StoryDetail = {
          args:{
            myselectedtemp : 'showclipboard'
          }
          };
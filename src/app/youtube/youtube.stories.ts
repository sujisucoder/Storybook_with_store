
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { YoutubeComponent } from '../youtube/youtube.component';
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { applicationConfig } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
// import { SharedModule } from '../shared/shared.module';

const metaDetail: Meta<YoutubeComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Youtube/Title',
  component: YoutubeComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with storybook
      declarations: [YoutubeComponent],
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
    componentWrapperDecorator(story => `<app-youtube [myselectedtemp]= "myselectedtemp"></app-youtube>`)
  ]
};

export default metaDetail;
type StoryDetail = StoryObj<YoutubeComponent>;



export const Title: StoryDetail = {
  args: {
    myselectedtemp: 'plan'
  }
};

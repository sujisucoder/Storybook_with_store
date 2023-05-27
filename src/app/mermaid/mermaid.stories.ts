
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { MermaidComponent } from './mermaid.component';
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { applicationConfig } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
// import { SharedModule } from '../shared/shared.module';

const metaDetail: Meta<MermaidComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Setup/Mermaid',
  component: MermaidComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with storybook
      declarations: [MermaidComponent],
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
    componentWrapperDecorator(story => `<app-mermaidcode [myselectedtemp]= "myselectedtemp"></app-mermaidcode>`)
  ]
};

export default metaDetail;
type StoryDetail = StoryObj<MermaidComponent>;



export const MermaidFromTemplate: StoryDetail = {
  args: {
    myselectedtemp: 'fromTemplate'
  }
};


export const MermaidFromComponent: StoryDetail = {
  args: {
    myselectedtemp: 'fromComponent'
  }
};


export const MermaidFromSrc: StoryDetail = {
  args: {
    myselectedtemp: 'fromSrc'
  }
};

export const MermaidSubgraph: StoryDetail = {
  args: {
    myselectedtemp: 'subgraph'
  }
};


export const MermaidAttachClass: StoryDetail = {
  args: {
    myselectedtemp: 'attachclass'
  }
};
export const MermaidSimpleform: StoryDetail = {
  args: {
    myselectedtemp: 'simpleform'
  }
};

export const MermaidCustomColors: StoryDetail = {
  args: {
    myselectedtemp: 'customcolors'
  }
};

export const MermaidFontawesome: StoryDetail = {
  args: {
    myselectedtemp: 'fa'
  }
};

export const MermaidThemes: StoryDetail = {
  args: {
    myselectedtemp: 'themes'
  }
};

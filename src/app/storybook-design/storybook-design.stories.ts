
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { StorybookDesignComponent } from './storybook-design.component';
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { applicationConfig } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
// import { SharedModule } from '../shared/shared.module';

const metaDetail: Meta<StorybookDesignComponent> = {

  title: 'Setup/Storybook',
  component: StorybookDesignComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with storybook
      declarations: [StorybookDesignComponent],
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
    componentWrapperDecorator(story => `<app-storybook-design [myselectedtemp]= "myselectedtemp"></app-storybook-design>`)
  ]
};

export default metaDetail;
type StoryDetail = StoryObj<StorybookDesignComponent>;



export const ImportantSteps: StoryDetail = {
  args: {
    myselectedtemp: 'plan'
  }
};

export const ModifyMetaData: StoryDetail = {
  args: {
    myselectedtemp: 'meta'
  }
};


export const ImportModules: StoryDetail = {
  args: {
    myselectedtemp: 'import'
  }
};

export const FileStructure: StoryDetail = {
  args: {
    myselectedtemp: 'structure'
  }
};

export const AddStory: StoryDetail = {
  args: {
    myselectedtemp: 'addstory'
  }
};

export const AddMDX: StoryDetail = {
  args: {
    myselectedtemp: 'mdx'
  }
};

export const ModifyPreview: StoryDetail = {
  args: {
    myselectedtemp: 'order'
  }
};

export const GitComamnds: StoryDetail = {
  args: {
    myselectedtemp: 'git'
  }
};

export const DeployChromatic: StoryDetail = {
  args: {
    myselectedtemp: 'chromatic'
  }
};
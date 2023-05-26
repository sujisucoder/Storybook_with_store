import { moduleMetadata ,componentWrapperDecorator} from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import { TasklistComponent } from './tasklist.component';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { applicationConfig } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import * as TaskStory from '../task/task.stories';
import { Task } from '../../models/task.model';

const metaDetail: Meta<TasklistComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Task/TaskListComponent',
  component: TasklistComponent,
  decorators: [
    moduleMetadata({
      declarations: [TasklistComponent, TaskComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        
      ]
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(
          CommonModule,
          HttpClientModule,
   
        ),
      ],
    }),
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`)
  ]
};

export default metaDetail;
type tasklistStyleStory = StoryObj<TasklistComponent>;


export const Template: tasklistStyleStory = {
    args: {
        onPinTask: TaskStory.DefaultTask.args?.onPinTask,
        onArchiveTask: TaskStory.DefaultTask.args?.onArchiveTask,
      }
};

export const Default  : tasklistStyleStory = {
    args: {
        tasks: [
            { ...(TaskStory.DefaultTask.args?.['task'] as Task), id: '1', title: 'Task 1' },
            { ...(TaskStory.DefaultTask.args?.['task'] as Task), id: '2', title: 'Task 2' },
            { ...(TaskStory.DefaultTask.args?.['task'] as Task), id: '3', title: 'Task 3' },
            { ...(TaskStory.DefaultTask.args?.['task'] as Task), id: '4', title: 'Task 4' },
            { ...(TaskStory.DefaultTask.args?.['task'] as Task), id: '5', title: 'Task 5' },
            { ...(TaskStory.DefaultTask.args?.['task'] as Task), id: '6', title: 'Task 6' },
            { ...(TaskStory.DefaultTask.args?.['task'] as Task), id: '7', title: 'Task 7' },
          ],
      }
};

export const WithPinnedTasks : tasklistStyleStory = {
  args: {
    tasks: [
        ...(Default.args?.['tasks'] as Task[]).slice(0,5),
      { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
    }
};

export const Loading : tasklistStyleStory = {
  args: {
    tasks: [],
    loading: true
    }
};

export const Empty : tasklistStyleStory = {
  args: {
    ...Loading.args,
    loading: false,
    }
};

 
 
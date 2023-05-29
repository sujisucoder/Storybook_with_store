import { Injectable } from '@angular/core';
import { State, Selector} from '@ngxs/store';
import { Task } from '../models/task.model';

const defaultTasks = {

  id: '1', title: 'new task', state: 'TASK_INBOX'

}

export interface TaskStateModel {
    task: Task;

}

// Sets the default state
@State<TaskStateModel>({
    name: 'taskstate',
    defaults: {
      task: defaultTasks,
    },
  })

  @Injectable()
  export class TaskState {

    @Selector()
    static getTask(state: TaskStateModel): Task {
      return state.task;
    }

  }
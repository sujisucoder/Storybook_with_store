
import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { patch, updateItem } from '@ngxs/store/operators';
import { Task } from '../models/task.model';

// Defines the actions available to the app
export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK',
  ERROR: 'APP_ERROR',

};

export class ArchiveTask {
  static readonly type = actions.ARCHIVE_TASK;

  constructor(public payload: string) {}
}

export class PinTask {
  static readonly type = actions.PIN_TASK;

  constructor(public payload: string) {}
}

export class AppError {
       static readonly type = actions.ERROR;
       constructor(public payload: boolean) {}
     }
    

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTasks = [
  { id: '1', title: 'Something', state: 'TASK_PINNED' },
  { id: '2', title: 'Something more', state: 'TASK_PINNED' },
  { id: '3', title: 'Something else', state: 'TASK_PINNED' },
  { id: '4', title: 'Something again', state: 'TASK_PINNED' },
];

export interface TaskListPinStateModel {
  tasks: Task[];
  status: 'idle' | 'loading' | 'success' | 'error';
  error: boolean;
}

// Sets the default state
@State<TaskListPinStateModel>({
  name: 'taskListPinState',
  defaults: {
    tasks: defaultTasks,
    status: 'idle',
    error: false,
  },
})

//state

@Injectable()
export class TaskPinState {
  // Defines a new selector for the error field
  @Selector()
  static getError(state: TaskListPinStateModel): boolean {
    return state.error;
  }

  @Selector()
  static getAllTasks(state: TaskListPinStateModel): Task[] {
    return state.tasks;
  }

  // Triggers the PinTask action, similar to redux
  @Action(PinTask)
  pinTask(
    { getState, setState }: StateContext<TaskListPinStateModel>,
    { payload }: PinTask
  ) {
    const task = getState().tasks.find((task) => task.id === payload);

    if (task) {
      const updatedTask: Task = {
        ...task,
        state: 'TASK_PINNED',
      };
      setState(
        patch({
          tasks: updateItem<Task>(
            (pinnedTask) => pinnedTask?.id === payload,
            updatedTask
          ),
        })
      );
    }
  }
  // Triggers the archiveTask action, similar to redux
  @Action(ArchiveTask)
  archiveTask(
    { getState, setState }: StateContext<TaskListPinStateModel>,
    { payload }: ArchiveTask
  ) {
    const task = getState().tasks.find((task) => task.id === payload);
    if (task) {
      const updatedTask: Task = {
        ...task,
        state: 'TASK_ARCHIVED',
      };
      setState(
        patch({
          tasks: updateItem<Task>(
            (archivedTask) => archivedTask?.id === payload,
            updatedTask
          ),
        })
      );
    }
  }

   @Action(AppError)
 setAppError(
   { patchState, getState }: StateContext<TaskListPinStateModel>,
   { payload }: AppError
 ) {
   const state = getState();
   patchState({
     error: !state.error,
   });

}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TaskComponent } from './task/task.component';
import { PureTaskComponent } from './pure-task/pure-task.component';
import { TaskListComponent } from './tasklist/tasklist.component';
import { TaskListState } from '../state/tasklist.state';
import { TaskState } from '../state/task.state';
import { TaskPinState } from '../state/tasklist-pinned.state'; 
import { PureTaskListComponent } from './pure-tasklist/pure-tasklist.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TaskListState,TaskPinState,TaskState])],
  exports: [PureTaskComponent, TaskListComponent,TaskComponent],
  declarations: [PureTaskComponent, TaskListComponent, PureTaskListComponent,TaskComponent],
  providers: [],
})
export class TaskModule {}
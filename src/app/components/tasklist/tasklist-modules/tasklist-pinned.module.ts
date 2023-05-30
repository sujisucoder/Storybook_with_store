import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TaskComponent } from '../../task/task.component'; 
import { PureTaskComponent } from '../../pure-task/pure-task.component'; 
import { TaskListComponent } from '../tasklist.component'; 
import { TaskPinState } from 'src/app/state/tasklist-pinned.state'; 
import { PureTaskListComponent } from '../../pure-tasklist/pure-tasklist.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TaskPinState])],
  exports: [PureTaskComponent, TaskListComponent,TaskComponent],
  declarations: [PureTaskComponent, TaskListComponent, PureTaskListComponent,TaskComponent],
  providers: [],
})
export class TaskListPinModule {}
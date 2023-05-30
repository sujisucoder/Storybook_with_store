import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TaskComponent } from '../../task/task.component'; 
import { PureTaskComponent } from '../../pure-task/pure-task.component'; 
import { TaskListComponent } from '../../tasklist/tasklist.component';  
import { InboxState } from 'src/app/state/inbox-screen-error.state'; 
import { PureTaskListComponent } from '../../pure-tasklist/pure-tasklist.component';
import { PureInboxScreenComponent } from '../../pure-inbox-screen/pure-inbox-screen.component'; 
import { InboxScreenComponent } from '../inbox-screen.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([InboxState])],
  exports: [ InboxScreenComponent,TaskListComponent,TaskComponent],
  declarations: [PureTaskComponent, TaskListComponent,InboxScreenComponent,PureInboxScreenComponent, PureTaskListComponent,TaskComponent],
  providers: [],
})
export class InboxScreenModule {}
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ArchiveTask, PinTask } from '../../state/tasklist.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  template: `
    <app-pure-tasklist
      [tasks]="tasks$ | async"
      (onArchiveTask)="archiveTask($event)"
      (onPinTask)="pinTask($event)"
    ></app-pure-tasklist>
  `,
})
export  class TaskListComponent {
  tasks$?: Observable<any>;

  constructor(private store: Store) {

    this.tasks$ = store.select((state) => state.taskListState.tasks);

  }
  /**
   * Component method to trigger the archiveTask event
   */
  archiveTask(id: string) {

    this.store.dispatch(new ArchiveTask(id));

  }

  /**
   * Component method to trigger the pinTask event
   */
  pinTask(id: string) {

    this.store.dispatch(new PinTask(id));
    
  }
}
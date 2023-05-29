import { AfterContentInit, Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ngxs',
  templateUrl: './ngxs.component.html',
})
export class NgxsComponent implements  AfterContentInit {

  markdownNgxsInstallation = `  
  ### Use npm package
  \`\`\`typescript 
  npm install @ngxs/store @ngxs/logger-plugin @ngxs/devtools-plugin
  \`\`\`
  ### import the below code in app.module.ts
  \`\`\`typescript 

  import { NgxsModule } from '@ngxs/store';
  @NgModule({
    imports: [
      NgxsModule.forRoot([], { // here login state 
        developmentMode: !environment.production
      })
    ]
  })
  export class AppModule {}

  \`\`\`


  `;

  markdownNgxsStore = `  
  ## Create a store in your app.component.ts file.

  \`\`\`typescript 
  import { Component, Input, Output, EventEmitter } from '@angular/core';
  import { Task } from '../../models/task.model';
  import { Store } from '@ngxs/store';
  import { Observable } from 'rxjs';
  
  @Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
  })
  export class TaskComponent {
    @Input()
    task: Observable<any>;
    constructor(private store: Store) {
  
    this.task = store.select((state) => state.taskstate.task);

    }
  }
  
  
  \`\`\`
  `;

  markdownNgxsAction = `

  ### Create a folder state and put the todo-actions.ts file and add below code


  \`\`\`typescript  

  // File name todo-actions.ts
export class AddTodo {
    static readonly type = '[Todo] Add';
    constructor(public payload: any) { }
}

export class EditTodo {
    static readonly type = '[Todo] Edit';
    constructor(public payload: any) { }
}

export class FetchAllTodos {
    static readonly type = '[Todo] Fetch All';
}

export class DeleteTodo {
    static readonly type = '[Todo] Delete';
    constructor(public id: number) { }
}
  \`\`\`  
  `;

  markdownNgxsState = `
    \`\`\`typescript 
    import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { patch, updateItem } from '@ngxs/store/operators';
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
    \`\`\` 
  `;

  
  markdownNgxsHtml = `
    ### Here we have created component.html file.
    \`\`\`typescript 
    <div class="list-item {{ (task | async).state }}">
    <label
      [attr.aria-label]="'archiveTask-' + (task | async).id"
      for="checked-{{ (task | async).id }}"
      class="checkbox"
    >
    \`\`\` 


  
  `;

  @ViewChild('installationNgxs', { static: true })
  installationNgxs!: TemplateRef<any>;

  @ViewChild('createStore', { static: true })
  createStore!: TemplateRef<any>;

  @ViewChild('createAction', { static: true })
  createAction!: TemplateRef<any>;

  @ViewChild('createState', { static: true })
  createState!: TemplateRef<any>;

  @ViewChild('createHtml', { static: true })
  createHtml!: TemplateRef<any>;

  tems: TemplateRef<any> = this.installationNgxs;

  myContext = { $implicit: 'World', localSk: 'Svet' };


  @Input()
  myselectedtemp: string = 'fromComponent';

  ngAfterContentInit() {
    switch (this.myselectedtemp) {
      case 'installationNgxs':
        this.tems = this.installationNgxs;
      break;

      case 'createStore':
       this.tems = this.createStore;
      break;

      case 'createAction':
        this.tems = this.createAction;
      break;

      
      case 'createState':
        this.tems = this.createState;
      break;

      case 'createHtml':
        this.tems = this.createHtml;
      break;



    }
  }

}

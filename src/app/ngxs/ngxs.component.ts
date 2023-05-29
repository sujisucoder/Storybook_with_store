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
      NgxsModule.forRoot([ToDoState], { // here login state 
        developmentMode: !environment.production
      })
    ]
  })
  export class AppModule {}

  \`\`\`
  ## here ToDoState is a reference to a class that defines the state of your application. 


  `;

  markdownNgxsStore = `  
  ### Here we have created a component that dispatches actions to create a to-do and for other operations. Apart from that, we are using a selector TodoState, from which we are listening for the updated to-do list.

  ### Put this code in the app.component.ts.
  \`\`\`typescript 
  // File name app.component.ts
  import { Component } from '@angular/core';
  import { Store, Select } from '@ngxs/store';
  import { TodoActions } from './state/todo-actions';
  import { FormGroup, FormControl, Validators } from '@angular/forms';
  import { TodoState, ITodo } from './state/todo-state';
  import { Observable } from 'rxjs';
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent {
    title = 'ngxs-todo-app';
  
    @Select(TodoState) todoList$: Observable<ITodo>;
  
    addForm = new FormGroup({
      title: new FormControl('', [Validators.required])
    });
    constructor(private store: Store){}
    onSubmit(form: any){
      this.store.dispatch(new TodoActions.AddTodo(form));
    }
    markDone(id: string, is_done: boolean){
      this.store.dispatch(new TodoActions.markDone(id, is_done));
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
    ### Here we have created the state of the todo, it contains the global state of the todo list. Create a folder state and put the todo-state.ts file and add below code
    \`\`\`typescript 

    // File name todo-state.ts
    import { Injectable } from '@angular/core';
    import { State, NgxsOnInit, Action, StateContext } from '@ngxs/store';
    import { TodoActions } from './todo-actions';
    import { patch, updateItem } from '@ngxs/store/operators';
    
    export interface ITodo {
        id: string;
        title: string;
        is_done: boolean;
    }
    export interface ITodoStateModel {
        todoList: ITodo[];
    }
    @State<ITodoStateModel>({
        name: 'todoList',
        defaults: {
            todoList: [],
        },
    })
    @Injectable()
    export class TodoState implements NgxsOnInit {
        ngxsOnInit(ctx) {
            ctx.dispatch(new TodoActions.FetchAllTodos());
        }
        @Action(TodoActions.markDone)
        markDone(
          ctx: StateContext<ITodoStateModel>, 
          { payload, is_done }: TodoActions.markDone
        ) {
            ctx.setState(
                patch({
                    todoList: updateItem(
                      (item: ITodo) => item.id === payload, 
                      patch({ is_done: !is_done })
                    )
                })
            );
        }
    
        @Action(TodoActions.AddTodo)
        add(
            ctx: StateContext<ITodoStateModel>,
            { payload }: TodoActions.AddTodo,
        ) {
            const state = ctx.getState();
            ctx.setState({
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        ...payload,
                        id: Math.random().toString(36).substring(7),
                        is_done: false
                    }
                ],
            }
            );
        }
    
    }

    \`\`\` 
  `;

  
  markdownNgxsHtml = `
    ### Here we have created a form that we use to create todo and listed all todos. put this code in your app.component.html
    \`\`\`typescript 
    <!-- File name  app.component.html -->
    <form [formGroup]="addForm" (ngSubmit)="onSubmit(addForm.value)">
      <input type="text" formControlName="title" class="form-control todo-list-input" placeholder="What do you need to do today?">
      <button class="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button> 
    </form>
    <ul class="d-flex flex-column-reverse todo-list">
        <li *ngFor="let todo of (todoList$ | async) ?. todoList" [ngClass]="{'completed': todo.is_done}">
          <div class="form-check"> 
            <label class="form-check-label"> 
              <input (click)="markDone(todo.id, todo.is_done)" class="checkbox" type="checkbox" [checked]="todo.is_done">{{todo.title}} <i class="input-helper"></i></label> 
          </div>
        </li>
      </ul>
    \`\`\` 


  
  `;

  @ViewChild('installationNgxs', { static: true })
  installationNgxs!: TemplateRef<any>;

  @ViewChild('createState', { static: true })
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

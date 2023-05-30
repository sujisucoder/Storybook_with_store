import {
  Component,
  Input,
  AfterContentInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';


@Component({
  selector: 'app-hide-story',
  templateUrl: './hide.component.html',
})
export class HideComponent implements AfterContentInit {

  @ViewChild('simpleTask', { static: true })
  simpleTask!: TemplateRef<any>;
  @ViewChild('taskList', { static: true })
  taskList!: TemplateRef<any>;
  @ViewChild('pureInbox', { static: true })
  pureInbox!: TemplateRef<any>;

  @ViewChild('dataTasklist', { static: true })
  dataTasklist!: TemplateRef<any>;

  @ViewChild('dataTasklistPinned', { static: true })
  dataTasklistPinned!: TemplateRef<any>;

  @ViewChild('dataInboxScreen', { static: true })
  dataInboxScreen!: TemplateRef<any>;

  @ViewChild('dataInboxScreenError', { static: true })
  dataInboxScreenError!: TemplateRef<any>;
  tems: TemplateRef<any> = this.simpleTask;

  myContext = { $implicit: 'World', localSk: 'Svet' };

  @Input()
  myselectedtemp: string = 'fromComponent';

  simpleTaskMermaid = `	
  <pre class="mermaid">	
  flowchart TD	
  id1([Create a task.component.ts ])-->id2([Create a task.stories.ts])	
  id2-->id3([Make 3 Stories ])	
  id3-->id4[[1.Default]]	
  id3-->id5[[2.Pinned]]	
  id3-->id6[[3.Archived]]	
  </pre>	
  `;
  simpleTaskMarkdown1 = `	
  	
- The Taskbox app is gonna consists of a   checkbox/Square box that can be activated or deactivated when ticked 	
- you can add the task title .	
- by using the pin icon on the right side of the corner you can set a task to be pinned on the top.	
 	
  ### The taskbox app will have 3 states which we are going to make through 3 different stories.	
  `;
  simpleTaskMarkdown2 = `	
  what these three stories create is a scenerio 	
  - Default : In this story the app is gonna be default means it  will not be having any pinned or archived tasks.	
  - Pinned : In this story the  task is gonna be in pinned state means the selected task is pinned to the top of the list, but for now there is only one task.	
  - Archived : In this story the task is considered as finished.	
  ### Let's use Typescript to create an interface for the Task model 	
  src/app/models/task.model.ts	
  \`\`\`typescript	
export interface Task {	
  id: string;	
  title: string;	
  state: string;	
}	
  \`\`\`	
  `;

  taskListMermaid = `	
  	
  <pre class="mermaid">	
    flowchart TD	
    id1([Create a tasklist.Component.ts file ])--> id2([Create a  tasklist.Stories.ts file])	
    id2-->id3([Create 4 Stories])	
    id3-->id4[[1.Default]]	
    id3-->id5[[2.Pinned ]]	
    id3-->id6[[3.Empty]]	
    id3-->id7[[4.Loading]]	
    id3-->id8([create an Empty array named task])	
    id8-->id9([Create a boolean varriable loading and set it false. ])	
    id9-->id10([change the  task array values to see different stories ])	
   	
    	
    	
  </pre>	
  `;
  taskListMarkdown1 = `	
    #####  As you can see  now we added two more states using storybook.	
    - Loading: In this story, we created a state where the task list is going to be loading to show 	
    - Empty: In this story, we don't have any tasks left to finish. 	
  `;

  pureInboxMarkdown1 =`
    ### pure Inbox screen consists of two screeen 
    - Default: This screen shows the  app with tasks. 
    - Error: This screen is for showing an error if the server failed to load.

    
  `;

  pureInboxMarkdown2 =`
   
  `;


  pureInboxMermaid1 =`
  ## PureInbox screen gonna have 2 stories.
  <pre class="mermaid">	
  flowchart TD	
  id1([ InboxScreen ])--> id2([ Default story  ])	
  id1-->id3([Error story])	
</pre>
  `

  dataTasklistMarkdown = `
  ### The tasklist component is connected with an ngxs store, for that first  import NgxsModule  from '@ngxs/store'
  \`\`\`typescript	
    import { NgxsModule } from '@ngxs/store';
    \`\`\`

  ### Mention the created state.ts file to the imports.

  \`\`\`typescript	
  imports: [CommonModule, NgxsModule.forFeature([TaskListState])],
  \`\`\`

  ### Now in the stories.ts file , import the module which you mentioned the state.

  \`\`\`typescript	
   applicationConfig({providers: [Store,importProvidersFrom(NgxsModule.forRoot([]))],})
  \`\`\`


  
  `;

  dataTasklistPinnedMarkdown =`
    ### Let's start with making a new state.ts file , in this file change the defaultTasks's state to TASK_PINNED.

    \`\`\`typescript	
    // Usually you would fetch this from a server
    const defaultTasks = [
      { id: '1', title: 'Something', state: 'TASK_PINNED' },
      { id: '2', title: 'Something more', state: 'TASK_PINNED' },
      { id: '3', title: 'Something else', state: 'TASK_PINNED' },
      { id: '4', title: 'Something again', state: 'TASK_PINNED' },
    ];
    \`\`\`

    ### create another module.ts file for taking the new state indivitually, In the module import the ngxsModule and mention it in the NgModule.

      
    \`\`\`typescript	

    import { TaskPinState } from 'src/app/state/tasklist-pinned.state';

    @NgModule({
      imports: [CommonModule, NgxsModule.forFeature([TaskPinState])],
      exports: [PureTaskComponent, TaskListComponent,TaskComponent],
      declarations: [PureTaskComponent, TaskListComponent, PureTaskListComponent,TaskComponent],
      providers: []
    })
    export class TaskListPinModule {}
    \`\`\`

    ### create a new stories .ts file,Include the newly created module in the imports.

    \`\`\`typescript	

    import { TaskListPinModule } from './tasklist-modules/tasklist-pinned.module'; 

    decorators: [
      moduleMetadata({
        imports: [CommonModule, TaskListPinModule],
      }),
     applicationConfig({
       providers: [Store, importProvidersFrom(NgxsModule.forRoot([]))],
      }),
    \`\`\`
  
  `;

  
  dataInboxScreenMarkdown =`
  ### The InboxScreen component is connected with an ngxs store, for that first  import NgxsModule  from '@ngxs/store'
  \`\`\`typescript	
    import { NgxsModule } from '@ngxs/store';
    \`\`\`


  ### Now in the stories.ts file , import the module which you mentioned the state.

  \`\`\`typescript	
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TaskModule],
    }),
   applicationConfig({
     providers: [Store, importProvidersFrom(NgxsModule.forRoot([]))],
    }),
  ],  
  \`\`\`
 
  
  `;

  
  dataInboxScreenErrorMarkdown =`
    ### Start with making a new state.ts file , in this file change the error property from false to true , error property is a boolean type.

    #### In state.ts file.
  \`\`\`typescript	
    // Sets the default state
    @State<InboxStateModel>({
      name: 'taskListState',
      defaults: {
        tasks: defaultTasks,
        status: 'idle',
        error: true,
      },
    })
  \`\`\`

  ### Create another module.ts file for taking the new state indivitually, In the module import the ngxsModule and mention it in the NgModule.

  \`\`\`typescript	
  import { InboxState } from 'src/app/state/inbox-screen-error.state'; 

  @NgModule({
    imports: [CommonModule, NgxsModule.forFeature([InboxState])],
    exports: [ InboxScreenComponent,TaskListComponent,TaskComponent],
    declarations: [PureTaskComponent, TaskListComponent,InboxScreenComponent,PureInboxScreenComponent, PureTaskListComponent,TaskComponent],
    providers: [],
  })
  export class InboxScreenModule {}
  \`\`\`

  ### Create a new stories .ts file,Include the newly created module in the imports.

  \`\`\`typescript	
  import { InboxScreenModule } from './inbox-module/inboxsScreen.module'; 

  decorators: [
    moduleMetadata({
      imports: [CommonModule, InboxScreenModule],
    }),
   applicationConfig({
     providers: [Store, importProvidersFrom(NgxsModule.forRoot([]))],
    }),
  \`\`\`



  
  `;


  ngAfterContentInit() {
    switch (this.myselectedtemp) {
      case 'simpleTask':
        this.tems = this.simpleTask;
        break;
      case 'taskList':
        this.tems = this.taskList;
        break;
      case 'pureInbox':
        this.tems = this.pureInbox;
        break;
        case 'dataTasklist':
         this.tems = this.dataTasklist;
          break;
           case 'dataTasklistPinned':
          this.tems = this.dataTasklistPinned;
          break; 
          case 'dataInboxScreen':
          this.tems = this.dataInboxScreen;
          break;
           case 'dataInboxScreenError':
          this.tems = this.dataInboxScreenError;
          break;
    }
  }

}

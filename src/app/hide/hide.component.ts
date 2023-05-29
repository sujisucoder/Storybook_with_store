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
    ## storybook with store
    ### Currently, the Taskbox app lacks a store to enhance its dynamism. To address this, we will employ a state behavior library, NGXS.


    ### Let's start with installing the ngxs npm package

    \`\`\`typescript	  
    npm install @ngxs/store @ngxs/logger-plugin @ngxs/devtools-plugin
    \`\`\`

      ### For creating an InboxScreen
        1. Develop a store, task.state.ts file.
        2. Rename the tasklist to pure-tasklist.
        3. Develop the tasklist.component.ts file,connect with store.
        4. Establish a screen,Create inbox-screen.component.ts file.
  `;

  pureInboxMarkdown2 =`
    ## PureInbox screen gonna have 2 stories.
  `;


  pureInboxMermaidDraft =`
  <pre class="mermaid">	
  flowchart TD	
  id1([Create  task.state.ts ])--> id2([Add the presentational version of the taskbox])	
  id2-->id3([ Rename tasklist.component.ts to   pure-task-list.component.ts])	
  id1-->id4[[update our TaskList component to read data from the store]]	
  id4 -->id5[[make task-list.component.ts ]]	
  id1-->id6[[create a module to bridge  components and  store.]]
  id6-->id7[[make task.module.ts]]
  id7-->id8[[  In app.module.ts at imports]]
  id8-->id9[[Add NgxsModule]]
  id8-->id10[[Add TaskModule]]
  id8-->id11[[Add NgxsReduxDevtoolsPluginModule]]
  id8-->id12[[Add NgxsLoggerPluginModule]]
  id3-->id13[[Rename task-list.stories.ts to pure-task-list.stories.ts]]
</pre>	
  `;
  pureInboxMermaid1 =`
  <pre class="mermaid">	
  flowchart TD	
  id1([ InboxScreen ])--> id2([ Default story  ])	
  id1-->id3([Error story])	
</pre>
  `

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
    }
  }

}

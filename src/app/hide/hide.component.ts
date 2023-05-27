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
  ngAfterContentInit() {
    switch (this.myselectedtemp) {
      case 'simpleTask':
        this.tems = this.simpleTask;
        break;
      case 'taskList':
        this.tems = this.taskList;
        break;
    }
  }

}

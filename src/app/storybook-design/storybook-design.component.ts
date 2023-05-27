import {
  Component,
  Input,
  AfterContentInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-storybook-design',
  templateUrl: './storybook-design.component.html',
})
export class StorybookDesignComponent implements AfterContentInit {


  @ViewChild('plan', { static: true })
  fromplan!: TemplateRef<any>;

  @ViewChild('meta', { static: true })
  meta!: TemplateRef<any>;

  @ViewChild('import', { static: true })
  import!: TemplateRef<any>;

  @ViewChild('structure', { static: true })
  structure!: TemplateRef<any>;

  @ViewChild('addstory', { static: true })
  addstory!: TemplateRef<any>;

  @ViewChild('addmdx', { static: true })
  mdx!: TemplateRef<any>;

  @ViewChild('order', { static: true })
  order!: TemplateRef<any>;

  @ViewChild('git', { static: true })
  git!: TemplateRef<any>;

  @ViewChild('chromatic', { static: true })
  chromatic!: TemplateRef<any>;


  tems: TemplateRef<any> = this.fromplan;

  myContext = { $implicit: 'World', localSk: 'Svet' };

  @Input()
  myselectedtemp: string = 'fromComponent';


  metasteps = `
  \`\`\`powershell
const metaDetail: Meta<StorybookDesignComponent> = {

  title: 'Setup/Storybook',
  component: StorybookDesignComponent,
  decorators: [
    ...
  ]
};

export default metaDetail;
type StoryDetail = StoryObj<StorybookDesignComponent>;
\`\`\`
---
`;
  importsteps = `

  # Import Modules for story use
  ## Import sharedModule which contains FlexBox, HTTPClient Module for MarkdownModule
  ## Component is used in the StorybookdesignComponent

  \`\`\`powershell
  moduleMetadata({

    declarations: [StorybookDesignComponent],
    imports: [
      CommonModule,
      SharedModule,
      HttpClientModule,
      MarkdownModule.forRoot({ loader: HttpClient }),
    ]
  }),
  applicationConfig({
    providers: [
      importProvidersFrom(
        CommonModule,
        HttpClientModule,
        MarkdownModule.forRoot({ loader: HttpClient }),
        MarkdownService
      ),
    ],
  }),
  \`\`\`
  `;
  structuresteps = `
  ## PageDesign __works__!
  \`\`\`powershell
  <pre class="mermaid">
    flowchart TD
      id1([Prepare ngTemplate]) -->  id2([Mmyselectedtemp receive input from story])

      id2([myselectedtemp receive input from story]) -->  id3([Shows the template])

      id3([Shows the template]) -->  id4([use templateOutlet and context])
  </pre>
  \`\`\`
  # In html use the different templates
  \`\`\`powershell
  <ng-template #storydesign >
  </ng-template>
  \`\`\`

  # call the templates using templateOutlet and can pass a context

  \`\`\`powershell
  <ng-container 
  [ngTemplateOutlet]="tems"
  [ngTemplateOutletContext]="myContext"> 
  \`\`\`

  # use the context in html

  \`\`\`powershell
  <ng-template #storydesign >
  <h1>
      Working
  </h1>>
  </ng-template>
  <ng-template #greet let-person><span>Hello {{person}} </span></ng-template>
  <ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>
  <ng-template #svk let-person="localSk" ><span>Ahoj {{person}}!</span></ng-template>

  \`\`\`

  # use the context in component

  \`\`\`powershell
  @ViewChild('greet', { static: true })
  greet!: TemplateRef<any>;
  @ViewChild('svk', { static: true })
  svk!: TemplateRef<any>;
  @ViewChild('eng', { static: true })
  eng!: TemplateRef<any>;
  @ViewChild('storydesign', { static: true })
  storydesign!: TemplateRef<any>;

  myContext = { $implicit: 'World', localSk: 'Svet' };
  tems: TemplateRef<any> = this.greet;
  \`\`\`

  # use AfterContentInit

  \`\`\`powershell

  import { OnInit, AfterContentInit, ViewChild, TemplateRef, Input, Component } from '@angular/core';

  Component=>  implements OnInit, AfterContentInit {

  @Input()
  myselectedtemp: string = 'greet';

  ngAfterContentInit() {

    switch (this.myselectedtemp) {
      case 'greet':
        this.tems = this.greet;
        break;
      case 'svk':
        this.tems = this.svk;
        break;
      case 'eng':
        this.tems = this.eng;
        break;
      case 'storydesign':
        this.tems = this.storydesign;
        break;
      }
    }

    constructor() { }

    ngOnInit(): void {
    }
  }

  \`\`\`
  `;
  addstorysteps = `
  # Add the story here
  
  \`\`\`powershell
export const ImportantSteps: StoryDetail = {
  args: {
    myselectedtemp: 'plan'
  }
};
\`\`\`
  `;

  addmdxsteps= `
  
  # Refer to other stories and add them in the mdx file

  ## MDX file should have the same name as the component to replace the docs

  \`\`\`powershell
  import { Canvas, Meta, Story } from '@storybook/blocks';

import * as markdown from '../markdowncode/markdown.stories';
import * as mermaid from '../mermaidcode/mermaid.stories';
import * as task from './simpletask.stories';

<Meta of={task} />

# Checkbox

A checkbox is a square box that can be activated or deactivated when ticked. 

Use checkboxes to select one or more options from a list of choices.

## Usage

<Story of={mermaid.MermaidFromTemplate} />

# Checkbox

A checkbox is a square box that can be activated or deactivated when ticked. 

Use checkboxes to select one or more options from a list of choices.

## Usage

<Story of={markdown.MarkdownFromTemplate} />

\`\`\`
  `;
  ordersteps = `
  
  # The order of the strories can be set in the preview.js -> parameters

  \`\`\`powershell
options: {
    storySort: {
      order: [
       'YoutubeMaking', ['StorybookDesign'], 'Example', ['Page', '*']
       ],
    },
  },
     
   \`\`\`

---
   # For centering the stories, in Preview.js
   \`\`\`powershell
   const preview: Preview = {
    parameters: {
      layout: 'centered',
    \`\`\`
---
   # To hide the Panel

\`\`\`powershell
options: {
  storySort: {
    order: [...
    ],
  },
   showPanel: false
 \`\`\`
 ---
 `;
  gitsteps = `
  
  # Git commands to push to repo and gh-pages
  \`\`\`powershell
  git remote remove origin
  git remote add origin https://github.com/gmanojisaac/AngularStorybook.git
  git remote -v show
  git add .
  git commit -am “Completed storybook design”
  git push -u origin storydesign
  npm run pre-deploy
  npm run deploy-storybook

  \`\`\`
  `;

  chromaticsteps = `
  
  # Create Chromtic login and create a new project tocken
  \`\`\`powershell

  "chromatic": "npx chromatic --project-token=f38be8eee28a  --exit-once-uploaded"
  
  \`\`\`
  `;


  ngAfterContentInit() {
    switch (this.myselectedtemp) {
      case 'plan':
        this.tems = this.fromplan;
        break;
      case 'meta':
        this.tems = this.meta;
        break;
      case 'import':
        this.tems = this.import;
        break;
      case 'structure':
        this.tems = this.structure;
        break;
      case 'addstory':
        this.tems = this.addstory;
        break;
      case 'mdx':
        this.tems = this.mdx;
        break;
      case 'order':
        this.tems = this.order;
        break;
      case 'git':
        this.tems = this.git;
        break;
      case 'chromatic':
        this.tems = this.chromatic;
        break;

    }



  }
}

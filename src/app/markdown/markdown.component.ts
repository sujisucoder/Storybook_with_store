import {
  Component,
  Input,
  AfterContentInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-markdowncode',
  templateUrl: './markdown.component.html',
  
})
export class MarkdownComponent implements  AfterContentInit {
  markdownfromtemplate = `  
  ### Usage is done by:
  \`\`\`typescript
  <markdown ngPreserveWhitespaces> --- </markdown>  
  <markdown ngPreserveWhitespaces >
    ### Lists
      1. Ordered list
      2. Another bullet point
        - Unordered list
        - Another unordered bullet
    {{ '#working' | language: 'typescript' }}
    </markdown>
    <markdown ngPreserveWhitespaces> --- </markdown>  
  \`\`\`
  `;

  markdownfromcomponent = ` 
  ## keep a variable in component to load the value 


  \`\`\`typescript
  markdownfromcomponent = XXX
  \`\`\`

  ### From the HTML the usage is:
   \`\`\`typescript
   <div markdown ngPreserveWhitespaces>{{ markdownfromcomponent }}</div>
   \`\`\`

  `;

  markdownfromsrc = `
  # Working for app.component.html but not working in strories
  ## Need to raise PR for storybook
  
  \`\`\`typescript
      <div class="markdown">
      <markdown mermaid [src]="'../../assets/Testing.md'"></markdown>
      </div>
  \`\`\`
  `;

  markdownnofilter = `
  # Working fine
  ## Need to give the prompt and filtered output
  \`\`\`typescript
  <markdown
  ngPreserveWhitespaces
  commandLine
  [prompt]="'PS C:\Users\Chris>'"
  [filterOutput]="'(out)'">
  \`\`\`typescript
  Get-Date
  (out)
  (out)Sunday, November 7, 2021 8:19:21 PM
  (out)
  \`\`\`
  </markdown>
  \`\`\` 
  `;

  markdownnclipboard = `
  # Clipboard copy feature Working for app.component.html but not working in strories
  ## Need to raise PR for storybook

  \`\`\`typescript
  <markdown ngPreserveWhitespaces clipboard>
  {{someothervar}}
  {{ somevar | language: 'typescript' }}
  </markdown>
  \`\`\`
  `;


  someothervar = `
  ## Markdown from component no code __works__!
  ---
  `;
  somevar = `
  ## Markdown from component with typescript __works__!
  ---
  `;

  @ViewChild('fromTemplate', { static: true })
  fromTemplate!: TemplateRef<any>;

  @ViewChild('fromComponent', { static: true })
  fromComponent!: TemplateRef<any>;

  @ViewChild('fromSrc', { static: true })
  fromsrc!: TemplateRef<any>;

  @ViewChild('showcommandline', { static: true })
  showcommandline!: TemplateRef<any>;

  @ViewChild('showclipboard', { static: true })
  showclipboard!: TemplateRef<any>;
  
  tems: TemplateRef<any> = this.fromTemplate;

  myContext = { $implicit: 'World', localSk: 'Svet' };

  @Input()
  myselectedtemp: string = 'fromComponent';


  ngAfterContentInit() {
    switch (this.myselectedtemp) {
      case 'fromTemplate':
        this.tems = this.fromTemplate;
        break;

      case 'fromComponent':
        this.tems = this.fromComponent;
        break;

      case 'fromSrc':
        this.tems = this.fromsrc;
        break;

      case 'showcommandline':
        this.tems = this.showcommandline;
        break;

        case 'showclipboard':
          this.tems = this.showclipboard;
          break;

    }
  }
}

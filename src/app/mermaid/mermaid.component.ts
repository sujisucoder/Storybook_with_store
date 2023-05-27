import {
  Component,
  Input,
  AfterContentInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';


@Component({
  selector: 'app-mermaidcode',
  templateUrl: './mermaid.component.html',
})
export class MermaidComponent implements AfterContentInit {

  @ViewChild('fromTemplate', { static: true })
  fromTemplate!: TemplateRef<any>;

  @ViewChild('fromComponent', { static: true })
  fromComponent!: TemplateRef<any>;

  @ViewChild('fromSrc', { static: true })
  fromSrc!: TemplateRef<any>;


  @ViewChild('subgraph', { static: true })
  subgraph!: TemplateRef<any>;

  @ViewChild('attachclass', { static: true })
  attachclass!: TemplateRef<any>;

  @ViewChild('simpleform', { static: true })
  simpleform!: TemplateRef<any>;

  @ViewChild('customcolors', { static: true })
  customcolors!: TemplateRef<any>;

  @ViewChild('fa', { static: true })
  fa!: TemplateRef<any>;

  @ViewChild('themes', { static: true })
  themes!: TemplateRef<any>;


  tems: TemplateRef<any> = this.fromTemplate;

  myContext = { $implicit: 'World', localSk: 'Svet' };

  @Input()
  myselectedtemp: string = 'fromComponent';



  mermaidfromtemplate = `
  ## keep a variable in component to load the value 

  \`\`\`typescript
  <markdown mermaid  ngPreserveWhitespaces>
  <pre class="mermaid">
    flowchart TD
    id1([Mermaid]) --> id2([Markdown in html])
    id1([Mermaid]) -->  id3([Markdown in template])
    id1([Mermaid]) --> id4([Markdown in data])
    id1([Mermaid]) --> id5([Markdown loaded from src])
  </pre>
  </markdown>
  \`\`\`

  `;

  mermaidfromcomponent = `
  <pre class="mermaid">
    flowchart TD
    id1([Mermaid]) --> id2([Markdown in html])
    id1([Mermaid]) -->  id3([Markdown in template])
    id1([Mermaid]) --> id4([Markdown in data])
    id1([Mermaid]) --> id5([Markdown loaded from src])
  </pre>
  </markdown>
  `;

  mermaidfromcomponentExplain = `
  ## keep a variable in component to load the value 

  \`\`\`typescript
  mermaidfromcomponent = \`
  <pre class="mermaid">
    flowchart TD
    id1([Mermaid]) --> id2([Markdown in html])
    id1([Mermaid]) -->  id3([Markdown in template])
    id1([Mermaid]) --> id4([Markdown in data])
    id1([Mermaid]) --> id5([Markdown loaded from src])
  </pre>
  </markdown>
  \`
  \`\`\`

  ## And call the variable from Template

  \`\`\`typescript
  <markdown mermaid  ngPreserveWhitespaces>
  {{ mermaidfromcomponent}}
  </markdown>
  \`\`\`
  `;

  mermaidfromSrcExplain = `
  # Working for app.component.html but not working in strories
  ## Need to raise PR for storybook
  
  \`\`\`typescript
  <div class="markdown" >
  <markdown mermaid [src]="'./Testing.md'"></markdown>
  </div>
  \`\`\`

  ## Testing.md file contains
  \`\`\`typescript
  <pre class="mermaid">
  journey
    title My Career Graph
    section Before Tech
    Secondary- 88%: 1: Manoj
    Higher Secondary-89%: 2: Manoj
    College-UG- 67%: 3: Manoj
    College-PG- 74%: 4: Manoj
    section After Tech
    Lecturer- 1Y: 5: Manoj
    Telecom Testing- 14Y: 6: Manoj
    Development- 7Y: 7: Manoj
  
  </pre>
  \`\`\`
  `;

  mermaidsubgraph = `
  <pre class="mermaid">
  flowchart TB
  c1-->a2
  subgraph one
  a1-->a2
  end
  subgraph two
  b1-->b2
  end
  subgraph three
  c1-->c2
  end
</pre>
  `;

  mermaidsubgraphExplained = `
  ## Easiliy we can explain ideas in subgraphs
  \`\`\`typescript
  <pre class="mermaid">
  flowchart TB
  c1-->a2
  subgraph one
  a1-->a2
  end
  subgraph two
  b1-->b2
  end
  subgraph three
  c1-->c2
  end
</pre>
\`\`\`
  `;

  mermaidattachclass = `
  <pre class="mermaid">
  flowchart LR
    A:::someclass --> B
    classDef someclass fill:#f96;
    </pre>
  `;

  mermaidattachclassExplained = `
  
  ## Easiliy we can explain relationship between classes
  \`\`\`typescript
  <pre class="mermaid">
  flowchart LR
    A:::someclass --> B
    classDef someclass fill:#f96;
    </pre>
\`\`\`
  `;

  mermaidsimpleform = `
  <pre class="mermaid">
    graph LR
    %% Nodes
    1([Start])
    2[Look for lost item]
    3{Did I find it?}
    4([Stop])
    %% Node links
    1 --> 2 --> 3 -->|Yes| 4
    3 -.->|No| 2
  </pre>
  `;

  mermaidsimpleformExplained = `
  
  ## Easiliy we can explain Simple Forms
  \`\`\`typescript
  <pre class="mermaid">
    graph LR
    %% Nodes
    1([Start])
    2[Look for lost item]
    3{Did I find it?}
    4([Stop])
    %% Node links
    1 --> 2 --> 3 -->|Yes| 4
    3 -.->|No| 2
  </pre>
\`\`\`
  `;

  mermaidcustomcolors = `
  <pre class="mermaid">

  graph TD
  %% Nodes
      0[Key Variable]
      1[Top Variable 1]
      2[Top Variable 2]
      3[Top Variable 3]
      31[Sub Variable 1]
      32[Sub Variable 2]
      321[Element 1]
      322[Element 2]

  %% Links
      0 --- 1
      0 --- 2
      0 --- 3
      3 --- 31
      3 --- 32
      32 --- 321
      32 --- 322

          %% Defining the styles
      classDef Red fill:#FF9999;
      classDef Amber fill:#FFDEAD;
      classDef Green fill:#BDFFA4;

  %% Assigning styles to nodes
      class 3,32,321 Red;
      class 322 Amber;
      class 1,2,31 Green;

</pre>

  `;

  mermaidcustomcolorsExplained = `
  
  ## Easiliy we can explain with custom colors
  \`\`\`typescript
  <pre class="mermaid">

  graph TD
  %% Nodes
      0[Key Variable]
      1[Top Variable 1]
      2[Top Variable 2]
      3[Top Variable 3]
      31[Sub Variable 1]
      32[Sub Variable 2]
      321[Element 1]
      322[Element 2]

  %% Links
      0 --- 1
      0 --- 2
      0 --- 3
      3 --- 31
      3 --- 32
      32 --- 321
      32 --- 322

          %% Defining the styles
      classDef Red fill:#FF9999;
      classDef Amber fill:#FFDEAD;
      classDef Green fill:#BDFFA4;

  %% Assigning styles to nodes
      class 3,32,321 Red;
      class 322 Amber;
      class 1,2,31 Green;

</pre>

\`\`\`
  `;

  mermaidfa = `
  <pre class="mermaid">
  flowchart TD
    B["fab:fa-twitter for peace"]
    B-->C[fa:fa-ban forbidden]
    B-->D(fa:fa-spinner);
    B-->E(A fa:fa-camera-retro perhaps?)
</pre>


  `;

  mermaidfaExplained = `
  
  ## Font Awesome is not working - Mermaid is now only compatible with Font Awesome versions 4 and 5
  \`\`\`typescript
  <pre class="mermaid">
    flowchart TD
      B["fab:fa-twitter for peace"]
      B-->C[fa:fa-ban forbidden]
      B-->D(fa:fa-spinner);
      B-->E(A fa:fa-camera-retro perhaps?)
  </pre>


\`\`\`
  `;

  mermaidthemes = `

  <pre class="mermaid">
    %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#ff0000'}}}%%
            graph TD
              A[Christmas] -->|Get money| B(Go shopping)
              B --> C{Let me think}
              B --> G[/Another/]
              C ==>|One| D[Laptop]
              C -->|Two| E[iPhone]
              C -->|Three| F[fa:fa-car Car]
              subgraph section
                C
                D
                E
                F
                G
              end
  </pre>




  `;

  mermaidthemesExplained = `
  
  ## Themes is working
  \`\`\`typescript
  <pre class="mermaid">
  <pre class="mermaid">
    %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#ff0000'}}}%%
            graph TD
              A[Christmas] -->|Get money| B(Go shopping)
              B --> C{Let me think}
              B --> G[/Another/]
              C ==>|One| D[Laptop]
              C -->|Two| E[iPhone]
              C -->|Three| F[fa:fa-car Car]
              subgraph section
                C
                D
                E
                F
                G
              end
  </pre>

  </pre>


\`\`\`
  `;

  ngAfterContentInit() {
    switch (this.myselectedtemp) {
      case 'fromTemplate':
        this.tems = this.fromTemplate;
        break;
      case 'fromComponent':
        this.tems = this.fromComponent;
        break;
      case 'fromSrc':
        this.tems = this.fromSrc;
        break;
      case 'subgraph':
        this.tems = this.subgraph;
        break;
      case 'attachclass':
        this.tems = this.attachclass;
        break;

      case 'simpleform':
        this.tems = this.simpleform;
        break;
      case 'customcolors':
        this.tems = this.customcolors;
        break;
      case 'fa':
        this.tems = this.fa;
        break;
      case 'themes':
        this.tems = this.themes;
        break;

    }
  }

}

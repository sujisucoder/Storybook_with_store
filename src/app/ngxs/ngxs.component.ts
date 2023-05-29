import { AfterContentInit, Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ngxs',
  templateUrl: './ngxs.component.html',
})
export class NgxsComponent implements  AfterContentInit {

  markdownNgxs = `  
  ### Use  npm install
  \`\`\`typescript 
  npm install @ngxs/store @ngxs/logger-plugin @ngxs/devtools-plugin
  \`\`\`
  `;

  @ViewChild('installationNgxs', { static: true })
  installationNgxs!: TemplateRef<any>;

  tems: TemplateRef<any> = this.installationNgxs;

  myContext = { $implicit: 'World', localSk: 'Svet' };


  @Input()
  myselectedtemp: string = 'fromComponent';

  ngAfterContentInit() {
    switch (this.myselectedtemp) {
      case 'installationNgxs':
        this.tems = this.installationNgxs;
        break;



    }
  }

}

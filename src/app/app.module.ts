import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TaskModule } from './components/task.module';
 import { NgxsModule } from '@ngxs/store';
 import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
 import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
 import { MarkdownModule } from 'ngx-markdown';



 import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { PureInboxScreenComponent } from './components/pure-inbox-screen/pure-inbox-screen.component';
import { InboxScreenComponent } from './components/inbox-screen/inbox-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { MarkdownComponent } from './markdown/markdown.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MermaidComponent } from './mermaid/mermaid.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { StorybookDesignComponent } from './storybook-design/storybook-design.component';
import { HideComponent } from './hide/hide.component';
import { NgxsComponent } from './ngxs/ngxs.component';
import { TaskListPinModule } from './components/tasklist/tasklist-modules/tasklist-pinned.module';

@NgModule({
  declarations: [
    AppComponent,
    PureInboxScreenComponent,
    InboxScreenComponent,
    MarkdownComponent,
    MermaidComponent,
    YoutubeComponent,
    StorybookDesignComponent,
    HideComponent,
    NgxsComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule,
    TaskListPinModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    NgxsModule.forRoot([], {
    developmentMode: !environment.production,
 

    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({
    disabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

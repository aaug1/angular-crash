import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
@NgModule({
  // Created components must go here (using CLI does this automatically)
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent
  ],
  // New modules to interact with dom
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  // Services / global provides for fetching data
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

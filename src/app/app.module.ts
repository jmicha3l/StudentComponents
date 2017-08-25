import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { StudListComponent } from './stud-list/stud-list.component';
import { StudInfoComponent } from './stud-info/stud-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentsComponent,
    StudListComponent,
    StudInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

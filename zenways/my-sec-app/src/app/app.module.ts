import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './data-sharing/parent/parent.component';
import { ChildComponent } from './data-sharing/chilld/child.component';
import { RouterModule } from '@angular/router'

const route : Route []= [
  {
  path : 'pipes' , 
  }

]

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }


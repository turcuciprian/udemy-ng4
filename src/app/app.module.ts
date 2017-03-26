import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Page1Component } from './page1.component';
import { Page2Component } from './page2.component';

const appRoutes: Routes = [
  {
    path:'', component: Page1Component
  },
  {
    path:'page1', component: Page1Component
  },
  {
    path:'page2', component: Page2Component
  },  
]; 
@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

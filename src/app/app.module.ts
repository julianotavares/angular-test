import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course.list.component';
import { StarComponent } from './shared/component/star/star.component';
import { ReplacePipe } from './shared/pipe/replace.pipe';
import { NavBarComponent } from './core/component/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './core/component/error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent,
    HttpClientModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CourseListComponent,
      },
      {
        path: 'course/info', component: CourseInfoComponent,
      },
      {
        path: '', redirectTo: 'courses', pathMatch: 'full',
      },
      {
        path: '**', component: Error404Component
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StarComponent } from './shared/component/star/star.component';
import { NavBarComponent } from './core/component/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './core/component/error-404/error-404.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    NavBarComponent,
    Error404Component,
    HttpClientModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
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

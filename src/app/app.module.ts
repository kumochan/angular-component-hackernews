import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LikesComponent } from './likes/likes.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LikesComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

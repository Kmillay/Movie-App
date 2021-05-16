import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NeedToWatchComponent } from './need-to-watch/need-to-watch.component';
import { SeenComponent } from './seen/seen.component';
import { NeedEditComponent } from './need-to-watch/need-edit/need-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NeedToWatchComponent,
    SeenComponent,
    NeedEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

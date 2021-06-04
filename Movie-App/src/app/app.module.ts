import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< Updated upstream

@NgModule({
  declarations: [
    AppComponent
=======
import { HeaderComponent } from './header/header.component';
import { NeedToWatchComponent } from './need-to-watch/need-to-watch.component';
import { SeenComponent } from './seen/seen.component';
import { NeedEditComponent } from './need-to-watch/need-edit/need-edit.component';
import { FormsModule } from '@angular/forms';
import { NeedDetailComponent } from './need-to-watch/need-detail/need-detail.component';
import { SeenEditComponent } from './seen/seen-edit/seen-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NeedToWatchComponent,
    SeenComponent,
    NeedEditComponent,
    NeedDetailComponent,
    SeenEditComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

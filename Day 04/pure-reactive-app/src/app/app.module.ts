import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterPresenterComponent } from './components/counter-presenter/counter-presenter.component';
import { CounterEditorComponent } from './components/counter-editor/counter-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterPresenterComponent,
    CounterEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

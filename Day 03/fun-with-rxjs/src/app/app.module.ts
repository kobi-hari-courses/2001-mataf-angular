import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterReaderComponent } from './components/counter-reader/counter-reader.component';
import { CounterEditorComponent } from './components/counter-editor/counter-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterReaderComponent,
    CounterEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

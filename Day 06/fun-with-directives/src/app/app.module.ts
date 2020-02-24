import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TitleComponent } from './components/title/title.component';
import { NoSpaceDirective } from './directives/no-space.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,
    NoSpaceDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

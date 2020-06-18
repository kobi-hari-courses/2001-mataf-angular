import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListsComponent } from './components/lists/lists.component';
import { ItemsComponent } from './components/items/items.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListViewerComponent } from './components/list-viewer/list-viewer.component';
import { ListEditorComponent } from './components/list-editor/list-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListsComponent,
    ItemsComponent,
    NotFoundComponent,
    ListViewerComponent,
    ListEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

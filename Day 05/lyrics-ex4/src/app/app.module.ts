import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenresListComponent } from './components/genres-list/genres-list.component';
import { SongsOfGenreComponent } from './components/songs-of-genre/songs-of-genre.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { SongLyricsComponent } from './components/song-lyrics/song-lyrics.component';

@NgModule({
  declarations: [
    AppComponent,
    GenresListComponent,
    SongsOfGenreComponent,
    SongsListComponent,
    SongLyricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

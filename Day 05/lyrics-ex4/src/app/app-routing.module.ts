import { SongsListComponent } from './components/songs-list/songs-list.component';
import { SongsOfGenreComponent } from './components/songs-of-genre/songs-of-genre.component';
import { GenresListComponent } from './components/genres-list/genres-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongLyricsComponent } from './components/song-lyrics/song-lyrics.component';


const routes: Routes = [
  {path: '', redirectTo: 'genres', pathMatch: 'full'}, 
  { path: 'genres', component: GenresListComponent}, 
  { path: 'genres/:name', component: SongsOfGenreComponent}, 
  { path: 'songs', component: SongsListComponent}, 
  { path: 'songs/:name', component: SongLyricsComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

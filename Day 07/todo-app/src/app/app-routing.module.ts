import { EmptyListsGuard } from './core/guards/empty-lists.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ItemsComponent } from './components/items/items.component';
import { ListEditorComponent } from './components/list-editor/list-editor.component';
import { ListViewerComponent } from './components/list-viewer/list-viewer.component';
import { ListsComponent } from './components/lists/lists.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  {path: 'home', component: HomeComponent}, 
  {path: 'lists', component: ListsComponent, canActivate: [EmptyListsGuard]}, 
  {path: 'lists/:id', component: ListViewerComponent}, 
  {path: 'lists/:id/edit', component: ListEditorComponent}, 
  {path: 'items', component: ItemsComponent}, 
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

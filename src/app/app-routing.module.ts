import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameCategListComponent } from './sidenav-menu/game-categ-list/game-categ-list.component';
import { BookCategListComponent } from './sidenav-menu/book-categ-list/book-categ-list.component';


const routes: Routes = [
  { path: 'games', component: GameCategListComponent},
  { path: 'books', component: BookCategListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

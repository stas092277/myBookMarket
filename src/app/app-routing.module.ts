import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameCategListComponent } from './sidenav-menu/game-categ-list/game-categ-list.component';
import { BookCategListComponent } from './sidenav-menu/book-categ-list/book-categ-list.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';


const routes: Routes = [
  { path: '', redirectTo: 'start-page', pathMatch: 'full'},
  { path: 'start-page', component: SidenavMenuComponent, children:[
    { path: 'games', component: GameCategListComponent},
    { path: 'books', component: BookCategListComponent},
  ]},
  { path: 'department/:id', component: EmployeesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

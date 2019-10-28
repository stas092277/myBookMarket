import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { CategoresListComponent } from './sidenav-menu/categores-list/categores-list.component';
import { DialogListComponent } from './sidenav-menu/categores-list/dialog-list/dialog-list.component';
import { BookCategListComponent } from './sidenav-menu/book-categ-list/book-categ-list.component';
import { GameCategListComponent } from './sidenav-menu/game-categ-list/game-categ-list.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeCardComponent } from './employees-list/employee-card/employee-card.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SidenavMenuComponent,
    CategoresListComponent,
    DialogListComponent,
    BookCategListComponent,
    GameCategListComponent,
    EmployeesListComponent,
    EmployeeCardComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogListComponent]
})
export class AppModule { }

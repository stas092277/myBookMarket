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


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { CategoresListComponent } from './sidenav-menu/categores-list/categores-list.component';
import { DialogListComponent } from './sidenav-menu/categores-list/dialog-list/dialog-list.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavMenuComponent,
    CategoresListComponent,
    DialogListComponent
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogListComponent],

})
export class AppModule { }

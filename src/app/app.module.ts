import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FormulariosComponent } from './formularios/formularios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { LoopsComponent } from './loops/loops.component';
import { SwitchComponent } from './switch/switch.component';
import { App01Component } from './switch/app01/app01.component';
import { App02Component } from './switch/app02/app02.component';
import { TableComponent, TableComponent2 } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    FormulariosComponent,
    DataBindingComponent,
    PageNotfoundComponent,
    DialogModalComponent,
    LoopsComponent,
    SwitchComponent,
    App01Component,
    App02Component,
    TableComponent,
    TableComponent2,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

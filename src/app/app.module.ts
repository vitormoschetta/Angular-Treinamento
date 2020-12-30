import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FormulariosComponent } from './formularios/formularios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    FormulariosComponent,
    DataBindingComponent,
    PageNotfoundComponent,
    DialogModalComponent
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
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

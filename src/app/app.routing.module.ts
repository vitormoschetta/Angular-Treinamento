import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

const appRoutes: Routes = [
  { path: 'formularios', component: FormulariosComponent },
  { path: 'binding', component: DataBindingComponent },
  { path: '', component: AppComponent },
  { path: '**', component: PageNotfoundComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

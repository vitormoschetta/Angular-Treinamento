import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { LoopsComponent } from './loops/loops.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { SwitchComponent } from './switch/switch.component';
import { TableComponent } from './table/table.component';

const appRoutes: Routes = [
  { path: 'formularios', component: FormulariosComponent },
  { path: 'dialog', component: DialogModalComponent },
  { path: 'table', component: TableComponent },
  { path: 'switch', component: SwitchComponent },
  { path: 'loops', component: LoopsComponent },
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

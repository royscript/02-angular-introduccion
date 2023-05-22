import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* Nuevas importaciones */
import { ListComponent } from './components/list/list.component'; 
import { NewComponent } from './components/new/new.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  /* Ruta principal */
  { path: '', component: ListComponent },
  { path: 'new', component: NewComponent },
  { path : 'edit/:id', component: EditComponent },
  /*ruta comodin en caso que se quiera acceder a una ruta que no este definida 
    redirecciona a pagina principal */
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

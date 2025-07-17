import { Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo.component';
import { ContactoComponent } from './contacto.component';

export const routes: Routes = [
  { path: '', component: CatalogoComponent },
  { path: 'contacto', component: ContactoComponent }
];

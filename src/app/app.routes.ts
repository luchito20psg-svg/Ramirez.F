import { Routes } from '@angular/router';

import { Nosotros} from './paginas/nosotros/nosotros';
import { Servicios } from './paginas/servicios/servicios';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'nosotros',
    pathMatch: 'full'
  },

  {
    path: 'nosotros',
    component: Nosotros
  },

  {
    path: 'servicios',
    component: Servicios
  },

  {
    path: '**',
    redirectTo: 'nosotros'
  }

];
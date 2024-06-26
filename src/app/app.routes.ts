import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewComponent } from './components/new/new.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'new',
    component: NewComponent,
  },
  {
    path: 'produto',
    //Lazy Loading
    loadChildren: () =>
      import('./features/produto/produto.module').then((m) => m.ProdutoModule),
  },
];

import { Routes } from '@angular/router';
import {PaypalComponent} from './component/paypal/paypal';

export const routes: Routes = [
  {
    path: '',
    component: PaypalComponent
  },
  {
    path: 'paypal',
    component: PaypalComponent
  }
];

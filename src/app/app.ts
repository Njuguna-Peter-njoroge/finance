import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PaypalComponent} from './component/paypal/paypal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaypalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'paypal';
}

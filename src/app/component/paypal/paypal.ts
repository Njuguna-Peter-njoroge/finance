import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.html',
  styleUrls: ['./paypal.css']
})
export class PaypalComponent implements OnInit {
  paypalBalance: string = '0.00';
  moneyOnHold: string = '36.04';

  ngOnInit() {
    // Initialize with some demo values
    this.updateBalances();

    // Update balances every minute
    setInterval(() => {
      this.updateBalances();
    }, 60000); // 60,000 ms = 1 minute
  }

  private updateBalances() {
    // Generate random demo values
    const newPaypalBalance = (Math.random() * 1000).toFixed(2);
    const newMoneyOnHold = (Math.random() * 100).toFixed(2);

    // Assign to variables
    this.paypalBalance = newPaypalBalance;
    this.moneyOnHold = newMoneyOnHold;
  }
}

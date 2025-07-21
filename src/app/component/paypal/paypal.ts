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
    // Initialize with balances > $10,000
    this.updateBalances();

    // Update balances every minute
    setInterval(() => {
      this.updateBalances();
    }, 60000); // 60 seconds
  }

  private updateBalances() {
    // Generate random demo values above $10,000
    const newPaypalBalance = (Math.random() * 20000 + 10000).toFixed(2); // 10,000 to 30,000
    const newMoneyOnHold = (Math.random() * 5000 + 10000).toFixed(2); // 10,000 to 15,000

    this.paypalBalance = newPaypalBalance;
    this.moneyOnHold = newMoneyOnHold;
  }
}

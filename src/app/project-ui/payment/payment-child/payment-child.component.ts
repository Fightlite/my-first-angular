import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-payment-child',
  templateUrl: './payment-child.component.html',
  styleUrls: ['./payment-child.component.css']
})
export class PaymentChildComponent implements OnInit {

  paymentInfo: any = {
    nextdue: "01/10/2023",
    amount: 10000,
    paidby: "buyer",
    payifdue: true,
  };

  @Output() dataEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    this.dataEvent.emit(this.paymentInfo);
  }
}

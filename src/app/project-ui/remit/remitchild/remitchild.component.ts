import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remitchild',
  templateUrl: './remitchild.component.html',
  styleUrls: ['./remitchild.component.css']
})
export class RemitchildComponent implements OnInit {
  // create remit data to pass to parent component: Remit
  public remit: any = {
    organization: "ABC Real Estate",
    address: "123 Manhattan St",
    address2: "111 Madison Ave St",
    zipcode: "55555-1234",
    city: "New York",
    state: "New York",
    email: "abc@gmail.co.us",
    phone: "555-555-5555",
    fax: "555-555-5555"
  };

  constructor() { }

  ngOnInit(): void {
  }

}

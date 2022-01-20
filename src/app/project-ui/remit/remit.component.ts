import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RemitchildComponent } from './remitchild/remitchild.component';

@Component({
  selector: 'app-remit',
  templateUrl: './remit.component.html',
  styleUrls: ['./remit.component.css']
})
export class RemitComponent implements AfterViewInit {
  // this component receive data by @ViewChild from RemitchildComponent
  @ViewChild(RemitchildComponent) child: any;

  constructor() { }

  public states = [
    "Washington",
    "New York",
    "Massachusetts",
    "Michigan"
  ];;

  public remitTo: any = {
    organization: "Bay County Tax Collector",
    address: "999 Walsh Street",
    address2: "Suite 300",
    zipcode: "99999-1258",
    city: "Paloma",
    state: "Washington",
    email: "aaa@gmail.co.us",
    phone: "(123) 456 - 7891",
    fax: "(123) 456 - 7891"
  };

  ngAfterViewInit() {
    // get the data from RemitchildComponent
    this.remitTo = this.child.remit;
    console.log(this.remitTo);
  }

}

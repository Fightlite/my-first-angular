import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
  // this component receive data by @Input from parent component: HomeComponent
  
  @Input() taxInfo: any;

  public schedules = [
    "Monthly",
    "Quaterly",
    "Annually",
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

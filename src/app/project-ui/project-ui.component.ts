import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-ui',
  templateUrl: './project-ui.component.html',
  styleUrls: ['./project-ui.component.css']
})
export class ProjectUiComponent implements OnInit {

  // create tax amount information passing to child: TaxComponent
  public taxAmount:any = {
    schedule: "Monthly",
    annualfee: 30000,
    janmar: 100,
    aprjun: 200,
    julsep: 300,
    octdec: 400,
    paidthru: "01/01/2022",
    prorationdate: "10/10/2023"
  };

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  propertyTax: any = [
    "Property Tax",
    "1",
    "2",
    "3"
  ];

  copyFrom: any = [
    "",
    "1",
    "2",
    "3"
  ];

  generalInformation: any = {
    type: 0,
    value: 0,
    account: '',
    parcelId: '',
    copyFrom: 0,
    map: '',
    ward: '',
    lot: '',
    block: ''
  };
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.generalInformation = this.commonService.getGeneralInformation();
  }

}

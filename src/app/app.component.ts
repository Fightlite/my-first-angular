import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonService } from './Services/common.service';
import { ServerHttpService } from './Services/server-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  public isOpened = false;
  public totalStudents = 0;

  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService
  ) {}


  ngOnInit(): void {
    this.common.totalStudents$.subscribe(total => {
      this.totalStudents = total;
    });

    if (this.common.totalStudents === 0) {
      this.serverHttp.getStudents().subscribe((data) => { 
         this.totalStudents = data.length;
       });
     }
  }

  public openLeftSide() {
    this.isOpened = !this.isOpened;
    // this.sidenav.toggle();
  }

  public closeleftSide() {
    this.isOpened = false;
  }
}

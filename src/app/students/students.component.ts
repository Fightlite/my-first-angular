import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any = [];

  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.serverHttp.getStudents().subscribe((data) => {
      console.log("Students: ", data);
      this.students = data;

      // set the total of students
      this.common.setTotalStudents(data.length);
    })
  }

  // create a method to navigate to student form
  public addStudent() {
    this.router.navigate(['student-form', 0]);
  }

  // create a method to delete student
  public deleteStudent(studentId: number) {
    this.serverHttp.deleteStudent(studentId).subscribe(data => {
      console.log('delete', data);
      this.loadData();
    })
  }

  public editStudent(studentId: number) {
    this.router.navigate(['student-form', studentId]);
  }

}

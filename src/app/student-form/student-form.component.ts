import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/Student';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  public id = 0;
  public studentForm = new FormGroup({
    code: new FormControl(''),
    gender: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    picture: new FormControl('')
  })

  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {   
    this.id = this.route.snapshot.params['id'];
    if (this.id > 0) {
      this.loadData(this.id);
    }
  }

  private loadData(id: number) {
    console.log('Loading data', id);
    this.serverHttp.getStudent(id).subscribe(data => {
      for (const control in this.studentForm.controls) {
        if (control) {
          this.studentForm.controls[control].setValue(data[control]);
        }
      }
    })
  }

  private createNewStudent(){
    const newStudent: any = {};
    for (const control in this.studentForm.controls){
      if (control) {
        newStudent[control] = this.studentForm.controls[control].value;
      }
    }
    return newStudent as Student;
  }

  public saveAndGoToList() {
    if (this.id > 0 ){
      // call the addStudent method to add a new student
      this.serverHttp.modifyStudent(this.id, this.createNewStudent()).subscribe((data: any) => {
        // turn back to the list
        this.router.navigate(['students']);
      });
    } else {
      // call the addStudent method to add a new student
      this.serverHttp.addStudent(this.createNewStudent()).subscribe(data => {
        // turn back to the list
        this.router.navigate(['students']);
      });
    }
  }

  public save() {
    if (this.id > 0 ){
      this.serverHttp.modifyStudent(this.id, this.createNewStudent()).subscribe((data: any) => {
        //
      });

    } else {
      // call the addStudent method to add a new student
      this.serverHttp.addStudent(this.createNewStudent()).subscribe(data => {
        console.log('Student added', data);
        // call the increase student method to increase the total of students
        this.common.increaseStudent();
        //reset the studentForm field
        this.studentForm.reset();
      });
    }
  }

}

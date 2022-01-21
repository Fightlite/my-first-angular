import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/Student';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';
import { forbiddenCodeValidator } from '../validators/code.validator';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  public id = 0;
  public studentForm = new FormGroup({
    code: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(8),
      forbiddenCodeValidator(/sv001/i),
    ])),
    gender: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    dob: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    picture: new FormControl('')
  })

  student_validation_messages = {
    'code': [
      { type: 'required', message: 'Code is required' },
      { type: 'minlength', message: 'Code must be at least 5 characters long' },
      { type: 'maxlength', message: 'Code cannot be more than 8 characters long' },
      { type: 'pattern', message: 'Your Code must contain only numbers and letters' },
      { type: 'forbiddenName', message: 'Your Code has already been taken' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'minlength', message: 'Username must be at least 8 characters long' },
      { type: 'pattern', message: 'Enter a valid email' }
    ]
  };

  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {   
    // check if modify or create new one: 0 is modified, > 0 is create
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
          this.studentForm.controls[control].setValue(data.data[control]);
        }
      }
    })
  }

  private createNewStudent(){
    const newStudent: any = {};
    for (const control in this.studentForm.controls){
      if (control) {
        newStudent[control] = this.studentForm.controls[control].value;
        //set id for student because form has no id
        newStudent['id']= this.common.totalStudents + 1;
      }
    }
    return newStudent as Student;
  }

  public saveAndGoToList() {
    if (this.id > 0 ){
      // call the addStudent method to modify student
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

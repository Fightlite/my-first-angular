import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: User = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  register_validation_messages = {
    'username': [
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
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'pattern', message: 'Enter a valid password' }
    ],
    'confirmPassword': [
      { type: 'required', message: 'Confirm Password is required' },
      { type: 'pattern', message: 'Enter a valid confirm password' },
      { type: 'validateEqual', message: 'Please enter confirm password same to password'}
    ]
  };

  ngOnInit(): void {   
  }


  save(model: User) {
    // call API to save customer
    console.log(model);
  }
}

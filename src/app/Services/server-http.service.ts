import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})

export class ServerHttpService {

  // http options
  private httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
    }),
  }

  private REST_API_SERVER = 'http://localhost:3000'

  constructor(private httpClient : HttpClient) { }

  // create a method to get all of students
  public getStudents() {
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // create a method to get a student by id
  public getStudent(studentId: number) {
    const url = `${this.REST_API_SERVER}/students/` + studentId;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // create a method to add students
  public addStudent(data : Student) {
    const url = `${this.REST_API_SERVER}/students`;
    
    return this.httpClient
      .post<any>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

    // create a method to modify students
    public modifyStudent(studentId: number, data : Student) {
      const url = `${this.REST_API_SERVER}/students/` + studentId;
      
      return this.httpClient
        .put<any>(url, data, this.httpOptions)
        .pipe(catchError(this.handleError));
    }

  // create a method to add students
  public deleteStudent(studentId: number) {
    const url = `${this.REST_API_SERVER}/students/` + studentId;
    return this.httpClient
      .delete<any>(url)
      .pipe(catchError(this.handleError));
    
  }

  // create a method to handle errors
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public totalStudents = 0;

  // create a behavior subject to track the change of total students
  public totalStudents$ = new BehaviorSubject<number>(0);

  constructor() { }

  public setTotalStudents (total: number) {
    this.totalStudents = total;
    // inform to all of components know about the change of students
    this.totalStudents$.next(total);
  }

  public increaseStudent () {
    this.totalStudents++;
    // inform to all of components know about the change of students
    this.totalStudents$.next(this.totalStudents);
  }

}

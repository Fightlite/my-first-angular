import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectUiComponent } from './project-ui/project-ui.component';
import { RegisterComponent } from './register/register.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'student-form/:id', component: StudentFormComponent},
  { path: 'project-ui', component: ProjectUiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

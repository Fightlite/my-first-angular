import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsComponent } from './students/students.component';
import { StudentFormComponent } from './student-form/student-form.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialExampleModule} from '../material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { EqualValidator } from './directives/equal-validator.directive';
import { ProjectUiComponent } from './project-ui/project-ui.component';
import { InformationComponent } from './project-ui/information/information.component';
import { PaymentComponent } from './project-ui/payment/payment.component';
import { RemitComponent } from './project-ui/remit/remit.component';
import { TaxComponent } from './project-ui/tax/tax.component';
import { AdditionalInformationComponent } from './project-ui/additional-information/additional-information.component';
import { RemitchildComponent } from './project-ui/remit/remitchild/remitchild.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { PaymentChildComponent } from './project-ui/payment/payment-child/payment-child.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentFormComponent,
    RegisterComponent,
    EqualValidator,
    ProjectUiComponent,
    InformationComponent,
    PaymentComponent,
    RemitComponent,
    TaxComponent,
    AdditionalInformationComponent,
    RemitchildComponent,
    PaymentChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialExampleModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

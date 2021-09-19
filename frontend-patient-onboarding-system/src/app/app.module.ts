
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientSignUpComponent } from './components/patientSignUp/patientSignUp.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { LoginComponent } from './components/login/login.component';
import { PatientUpdateComponent } from './components/patient-update/patient-update.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { PatientOperationsComponent } from './patient-operations/patient-operations.component';
import { AdminOperationsComponent } from './components/admin-operations/admin-operations.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SearchdoctorComponent } from './components/searchdoctor/searchdoctor.component';
import { ShowAvailabilityComponent } from './components/show-availability/show-availability.component';
import { BookappointmentComponent } from './components/bookappointment/bookappointment.component';
import { ViewappointmentComponent } from './components/viewappointment/viewappointment.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { DoctorOperationsComponent } from './components/doctor-operations/doctor-operations.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { DoctorUpdateComponent } from './components/doctor-update/doctor-update.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { DoctorRegisterComponent } from './components/doctor-register/doctor-register.component';
import { AddDoctorAvailabilityComponent } from './components/add-doctor-availability/add-doctor-availability.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';




@NgModule({
  declarations: [
    AppComponent,
    PatientSignUpComponent,
    PatientListComponent,
    LoginComponent,
    PatientUpdateComponent,
    ViewProfileComponent,
    PatientOperationsComponent,
    AdminOperationsComponent,
    AboutusComponent,
    SearchdoctorComponent,
    ShowAvailabilityComponent,
    BookappointmentComponent,
    ViewappointmentComponent,
    FeedbackComponent,
    HomeComponent,
    DoctorLoginComponent,
    DoctorOperationsComponent,
    DoctorProfileComponent,
    DoctorUpdateComponent,
    AdminLoginComponent,
    DoctorRegisterComponent,
    AddDoctorAvailabilityComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

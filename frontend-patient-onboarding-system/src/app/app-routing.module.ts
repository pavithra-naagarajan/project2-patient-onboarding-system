import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AddDoctorAvailabilityComponent } from './components/add-doctor-availability/add-doctor-availability.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminOperationsComponent } from './components/admin-operations/admin-operations.component';
import { BookappointmentComponent } from './components/bookappointment/bookappointment.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { DoctorOperationsComponent } from './components/doctor-operations/doctor-operations.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { DoctorRegisterComponent } from './components/doctor-register/doctor-register.component';
import { DoctorUpdateComponent } from './components/doctor-update/doctor-update.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientUpdateComponent } from './components/patient-update/patient-update.component';
import { PatientSignUpComponent } from './components/patientSignUp/patientSignUp.component';
import { SearchdoctorComponent } from './components/searchdoctor/searchdoctor.component';
import { ShowAvailabilityComponent } from './components/show-availability/show-availability.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { ViewappointmentComponent } from './components/viewappointment/viewappointment.component';
import { PatientOperationsComponent } from './patient-operations/patient-operations.component';


const routes: Routes = 
[
  //{ path: '', component:PatientListComponent },
  { path: 'signUp', component:PatientSignUpComponent },
  { path: 'login', component:LoginComponent },
  { path: 'viewProfile/:patientId', component:PatientListComponent },
  { path: 'signUp/patientId', component:PatientSignUpComponent },
  { path: 'viewProfile', component:ViewProfileComponent },
  { path: 'update/:patientId', component:PatientUpdateComponent },
  { path: 'patientFunc/:patientId', component:PatientOperationsComponent },
 
  { path: 'adminFunc', component:AdminOperationsComponent },
  {path:'aboutus/:patientId',component:AboutusComponent},
  {path:'feedback', component:FeedbackComponent},
  //{path:"patient",component:PatientComponent},
  {path:"search/:patientId",component:SearchdoctorComponent},
  {path:"show/:doctorId/:patientId",component:ShowAvailabilityComponent},
  {path:"book/:availabilityNo/:doctorId/:patientId",component:BookappointmentComponent},
  {path:"view/:patientId",component:ViewappointmentComponent},
  
  {path: '', component:HomeComponent},
  {path: 'doctorlogin', component:DoctorLoginComponent},
  {path: 'doctorregister', component:DoctorRegisterComponent},
  {path: 'adminlogin', component:AdminLoginComponent},
  //{path: 'patientlogin', component:PatientLoginComponent},
  {path: 'doctoroperations/:doctorId', component:DoctorOperationsComponent},
  {path: 'doctorprofile/:doctorId', component:DoctorProfileComponent},
  {path: 'updateDoctor/:doctorId', component:DoctorUpdateComponent},
  {path: 'availability/:doctorId', component:AddDoctorAvailabilityComponent}

  //{path: 'doctorbookings/:doctorId', component:PatientbookingsComponent}

  // { path: 'addProduct/:productId', component:ProductAddComponent } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

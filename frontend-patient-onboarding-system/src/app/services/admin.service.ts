import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {retry, catchError} from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { Admin } from '../model/admin';
import { Doctor } from 'patient-app/src/app/model/doctor';
import { Patient } from 'patient-app/src/app/model/patient';

const doctorUrl = "http://localhost:9090/Doctor"
const patientUrl = "http://localhost:9090/patients"
const adminUrl = "http://localHost:9090/doctor/Admin"
const doctorAvailabilityUrl ="http://localhost:9090/DoctorAvailability"
const PatientBookingUrl ="http://localhost:9090/PatientBookingController"
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(public http: HttpClient) { }
  adminLogin(adminId: number, adminPassword: string): Observable<Admin>{
    return this.http.get<Admin>(`${adminUrl}/searchByAdminIdAndAdminPassword/${adminId}/${adminPassword}`)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }
  // return this.http.get<Patient>(`${URL}/login/${patientId}/${password}`)
 
  getDoctors(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(doctorUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  getPatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>(patientUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }  


  deleteDoctor(doctorId:number) : Observable<Doctor>{
    return this.http.delete(`${doctorUrl}/${doctorId}`)
     .pipe(
       retry(0),
       catchError(this.errorHandler)
     )
   }
 
   deletePatient(patientId:number) : Observable<Patient>{
    return this.http.delete(`${patientUrl}/${patientId}`)
     .pipe(
       retry(0),
       catchError(this.errorHandler)
     )
   }
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}





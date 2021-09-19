import { Injectable } from '@angular/core';
import {retry, catchError} from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Doctor } from 'patient-app/src/app/model/doctor';
import { DoctorAvailability } from '../model/doctor-availability';
import { PatientAppointment } from '../model/patient-appointment';
const doctorUrl = "http://localhost:9090/Doctor"
const patientUrl = "http://localhost:9090/Patient"
const doctorAvailabilityUrl ="http://localhost:9090/doctoravailability"
const adminUrl = "http://localHost:9090/doctor"
@Injectable({
  providedIn: 'root'
})

export class DoctorService {
  

httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
  constructor(public http: HttpClient) { }

  getPatientById(doctorId: number) {
    throw new Error('Method not implemented.');
  }
  doctorLogin(doctorId: number, doctorPassword: String): Observable<Doctor>{
   return this.http.get<Doctor>(`${doctorUrl}/searchByDoctorIdAndDoctorPassword/${doctorId}/${doctorPassword}`)
   .pipe(
     retry(0),
     catchError(this.errorHandler)
   )
  }

  getDoctorById(doctorId: number): Observable<Doctor>{
    return this.http.get<Doctor>(`${doctorUrl}/searchByDoctorId/${doctorId}`)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }
  
  updateDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(doctorUrl, doctor, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }

  registerDoctor(doctor: Doctor): Observable<Doctor>{
    return this.http.post<Doctor>(adminUrl, doctor, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
      )
  }
  

  
  saveAvailability(doctorAvailability: DoctorAvailability): Observable<DoctorAvailability>{
    return this.http.post<DoctorAvailability>(doctorAvailabilityUrl, doctorAvailability, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
      )
  }

  saveStatus(doctor:Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(doctorUrl, doctor, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }

  getAppointmentByDoctorId(doctorId:number):Observable<PatientAppointment>{
    return this.http.get<PatientAppointment>(`http://localhost:9090/patientappointment/getAppiontmentByDoctorId/${doctorId}`)
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

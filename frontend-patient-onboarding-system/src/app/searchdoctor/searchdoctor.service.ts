import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { DoctorsList } from '../model/doctors-list';
import { DoctorAvailability } from '../model/doctor-availability';
import { PatientAppointment } from '../model/patient-appointment';

const doctorUrl="http://localhost:9090/doctor"
const appointmentURL='http://localhost:9090/patientappointment'
@Injectable({
  providedIn: 'root'
})
export class SearchdoctorService {

  constructor(public http:HttpClient) { }
 
   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getDoctors():Observable<DoctorsList[]>
  {
        return this.http.get<DoctorsList[]>(doctorUrl)
        .pipe(
          retry(1),
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
  
    getDoctorsByDomain(domainName:any):Observable<DoctorsList>{

      return this.http.get('http://localhost:9090/doctor/filterDoctorByDomain/'+`${domainName}`)
    }
  
    getDoctorAvailabilities(doctorId:any):Observable<DoctorAvailability>
    {
      return this.http.get('http://localhost:9090/doctoravailability/getDoctorAvailabilityByDomain/'+`${doctorId}`);
    }
    
    getDoctorBySeriallNo(serialNo:any):Observable<DoctorAvailability>
    {
      return this.http.get('http://localhost:9090/doctoravailability/getDoctorBySerialNo/'+`${serialNo}`);
    }

    saveAppointmentHistory(patientAppointment :PatientAppointment):Observable<PatientAppointment>{
      return this.http.post<PatientAppointment>(appointmentURL, patientAppointment, this.httpOptions)
           .pipe(
            retry(0),
             catchError(this.errorHandler)
           )
    }
    
    getappointmentHistory():Observable<PatientAppointment[]>
    {
       
      return this.http.get<PatientAppointment[]>(appointmentURL)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
    }
    getappointmentHistoryById(patientId:any):Observable<PatientAppointment>
    {
      return this.http.get('http://localhost:9090/patientappointment/getAppiontmentByPatientId/'+`${patientId}`);
    }
    
    //http://localhost:9090/doctoravailability/avail/1

    getAvailabilityByDoctorId(doctorId:number){
      return this.http.get( 'http://localhost:9090/doctoravailability/avail/'+`${doctorId}`);
    }
  }


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Patient } from '../model/patient';
import { retry, catchError } from 'rxjs/operators';
import { Doctor } from '../model/doctor';



const URL = "http://localhost:9090/patient"

@Injectable({
  providedIn: 'root'
})
export class PatientService {

// Http Headers
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
   //patientLogin
   autheticatePatient(patientId:number,password:string): Observable<Patient> {
    return this.http.get<Patient>(`${URL}/login/${patientId}/${password}`)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }

  //get patient by id
  getPatientById(patientId: number): Observable<Patient> {
    return this.http.get(`${URL}/${patientId}`)
      
  }
  
  //deleting a patient
  deleteProduct(patientId: number): Observable<Patient> {
    return this.http.delete(`${URL}/${patientId}`)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }
  
  
  


  
  constructor(public http:HttpClient) { }

//save patient
  addPatient(patient :Patient) :Observable<Patient>{
    return this.http.post<Patient>(URL,patient,this.httpOptions).pipe(retry(0),
    catchError(this.errorHandler)
  );
  }
  //updating a patient
  updatePatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(URL, patient)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      )
  }

  //get all patients
  getAllPatients() :Observable<Patient[]>{
    return this.http.get<Patient[]>(`http://localhost:9090/doctor/patientDetails`).pipe(retry(0),
    catchError(this.errorHandler)
);
}

//get doctors
getAllDoctors() :Observable<Doctor[]>{
  return this.http.get<Doctor[]>(`http://localhost:9090/doctor`).pipe(retry(0),
  catchError(this.errorHandler)
);
}


//Error Handler
errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side message
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }

  switch (error.status) {
    case 200:    console.log("200's");

      break;
    case 401:
      break;
    case 403:
      break;
    case 0:
    case 400:
    case 405:
    case 406:
    case 409:
    case 500:
      break;
  }

  console.log(errorMessage);
  return throwError(errorMessage);
}


}
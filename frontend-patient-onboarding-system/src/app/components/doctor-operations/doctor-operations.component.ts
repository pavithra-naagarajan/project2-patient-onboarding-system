import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/model/doctor';
import { PatientAppointment } from 'src/app/model/patient-appointment';
import { SearchdoctorService } from 'src/app/searchdoctor/searchdoctor.service';
import { DoctorService } from 'src/app/services/doctor.service';


@Component({
  selector: 'app-doctor-operations',
  templateUrl: './doctor-operations.component.html',
  styleUrls: ['./doctor-operations.component.css']
})
export class DoctorOperationsComponent implements OnInit {
doctorId?:number;
showStatus?:boolean;
availabilityForm:FormGroup;
statusForm?:FormGroup;
doctor:Doctor




view?:boolean;
textbox?:boolean;
viewId?:boolean;
patientForm?:FormGroup;

patientAppointment:Observable<PatientAppointment[]>|any
  constructor(public router: Router, public activatedRoute: ActivatedRoute,public doctorService:DoctorService,
    public formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.doctorId = this.activatedRoute.snapshot.params['doctorId'];


    this.statusForm = this.formBuilder.group({
     
      status: ['', [Validators.required]],
  
})}

  addAvailability(){
    this.router.navigate(['availability',this.doctorId])
  }
viewProfile(){
  console.log("My profile")
  this.router.navigate(['doctorprofile', this.doctorId])
}

patientBookings(){
  console.log("Patient bookings")
  this.doctorService.getAppointmentByDoctorId(this.doctorId).subscribe(res=>
    {
      console.log(res)
      this.view=true
      this.patientAppointment=res
    })
this.view=true

}



home(){
  console.log("Returning Home")
  this.router.navigate([''])
}
logout(){
  console.log("Returning to Doctor Login Page")
  this.router.navigate(['doctorlogin'])
}

addStatus(){
this.showStatus=true
}


updateStatus(){
  this.doctorService.getDoctorById(this.doctorId).subscribe(
    res=>{
      this.doctor=res
      this.doctor.status=this.statusForm?.value.status
    
      this.doctorService.saveStatus(this.doctor).subscribe(
        res=>{}
        ,error => {
         
          this.router.navigate(['doctoroperations',this.doctorId])
          
          window.alert("Your status is updated successfully!")
          
        });
      })
    }
    return (){
      this.router.navigate(['doctoroperations',this.doctorId])
    }
  }

 
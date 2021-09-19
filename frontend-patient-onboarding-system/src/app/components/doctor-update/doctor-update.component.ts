import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-update',
  templateUrl: './doctor-update.component.html',
  styleUrls: ['./doctor-update.component.css']
})
export class DoctorUpdateComponent implements OnInit {

  doctorForm:FormGroup;
  doctor:Doctor;
  doctorId?:number;
  constructor(public router:Router,public doctorService:DoctorService,public activatedRoute:ActivatedRoute,
    public formBuilder:FormBuilder) { }

 
  ngOnInit(): void {
    this.doctor=new Doctor()
   this.doctorId = this.activatedRoute.snapshot.params['doctorId'];
   /* console.log(this.inputPatientId)
    this.patient = new Patient();
     */
  if(this.doctorId!=-1){
      this.doctorService.getDoctorById(this.doctorId)
      .subscribe(data=>{
        console.log(data)
        this.doctor=data
      
    this.doctorForm = this.formBuilder.group({
      doctorId:[this.doctor.doctorId],
      doctorName: [this.doctor.doctorName, [Validators.required, Validators.minLength(3)]],
      doctorPassword: [this.doctor.doctorPassword, [Validators.required, Validators.minLength(3)]],
      doctorDomain:[this.doctor.doctorDomain, [Validators.required, Validators.minLength(2)]],
      
      doctorExperience: [this.doctor.doctorExperience, [Validators.required]],
      doctorMobileNo: [this.doctor.doctorMobileNo, [Validators.required,Validators.minLength(10)]],
      doctorEmail: [this.doctor.doctorEmail, [Validators.required,Validators.email]],
      doctorSalary: [this.doctor.doctorSalary, [Validators.required]]
      })
    })}}
    updateDetails(){
      this.doctorService.updateDoctor(this.doctorForm?.value)
      .subscribe(
        response => {
          console.log(response);
          console.log("#######updated successfully ");
          
          
        },
        error => {
          window.alert("Your Details are updated successfully!")
          this.router.navigate([''])
          console.log("ERROR in save : " + error);
        });
}




return(){
    
  this.router.navigate([''])
  
}
}
 

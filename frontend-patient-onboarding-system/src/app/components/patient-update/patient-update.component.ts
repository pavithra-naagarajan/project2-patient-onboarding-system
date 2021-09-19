import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {

  patientForm:FormGroup;
  patient:Patient;
  patientId?:number;
  constructor(public router:Router,public patientService:PatientService,public activatedRoute:ActivatedRoute,
    public formBuilder:FormBuilder) { }

 
  ngOnInit(): void {
    this.patient=new Patient()
   this.patientId = this.activatedRoute.snapshot.params['patientId'];
   /* console.log(this.inputPatientId)
    this.patient = new Patient();
     */
  if(this.patientId!=-1){
      this.patientService.getPatientById(this.patientId)
      .subscribe(data=>{
        console.log(data)
        this.patient=data
      
    this.patientForm = this.formBuilder.group({
     patientId:[this.patient.patientId,[Validators.required]],
      patientName: [this.patient.patientName, [Validators.required, Validators.minLength(5)]],
      password: [this.patient.password, [Validators.required, Validators.minLength(5)]],
     
      gender: [this.patient.gender, [Validators.required]],
      patientAge: [this.patient.patientAge, [Validators.required]],
      mobileNumber: [this.patient.mobileNumber, [Validators.required,Validators.minLength(10)]],
      mailId: [this.patient.mailId, [Validators.required,Validators.email]],
      address: [this.patient.address, [Validators.required]]
      })
    })}}
    updateDetails(){
      this.patientService.updatePatient(this.patientForm?.value)
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
 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../model/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-operations',
  templateUrl: './patient-operations.component.html',
  styleUrls: ['./patient-operations.component.css']
})
export class PatientOperationsComponent implements OnInit {

  
  patientId?:number;
  patient?:Patient;
  errorMessage: any;
  showPatient?:boolean;
  update?:boolean;

  back?:boolean;
  patientForm?: FormGroup;



  constructor(public router:Router,public patientService:PatientService,public activatedRoute:ActivatedRoute,
    public formBuilder:FormBuilder) { }

 
  ngOnInit(): void {
    this.patientId = this.activatedRoute.snapshot.params['patientId'];
    console.log(this.patientId)
    this.patient = new Patient();
    
    this.patientForm = this.formBuilder.group({
     patientId:['',[Validators.required]],
      patientName: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      patientAge: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required,Validators.minLength(10)]],
      mailId: ['', [Validators.required,Validators.email]],
      address: ['', [Validators.required]]
      })
    }
    
 

  createPatientAccount(){
    
  this.router.navigate(['signUp']);
  }
  patientLogin(){
    
    this.router.navigate(['login']);
    }
    
     searchDoctor(patientId:number){
      this.router.navigate(['search',this.patientId]);
     } 


     feedback(){
      this.router.navigate(['feedback']);
     }

    patientProfile(){
      this.patientService.getPatientById(this.patientId).subscribe(
         (res:any)=>{
          
          console.log(res);
          this.patient= res;
          if(this.patientId!=-1)
            this.showPatient=true;
         // this.router.navigate(['viewProfile']);
        },
          err => {
            
            this.errorMessage = err}) 
      }
      logout(){
        this.router.navigate(['login'])
      }
          
     /*  updateDetails(){
        this.patientService.updatePatient(this.patientForm?.value)
        .subscribe(
          response => {
            console.log(response);
            console.log("#######updated successfully ");
            
          },
          error => {
            
            this.router.navigate([''])
            console.log("ERROR in save : " + error);
          });
  } */
  aboutUs(patientId:number){
  this.router.navigate(['aboutus',this.patientId])
}
  updatePatient(patientId:number){
    this.router.navigate(['update',patientId])

  }
  viewAppointment(patientId:number){
    this.router.navigate(['view',this.patientId])
  }
  return(){
    
    this.router.navigate(['patientId',this.patientId])
    this.update=false
  }
}

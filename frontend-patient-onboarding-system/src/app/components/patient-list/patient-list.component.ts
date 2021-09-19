import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
 
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
      adminLogin(){
        this.router.navigate(['adminFunc'])
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

  return(){
    
    this.router.navigate([''])
    this.update=false
  }
    
}


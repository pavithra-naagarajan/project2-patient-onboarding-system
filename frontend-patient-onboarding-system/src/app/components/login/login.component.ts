import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';




@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    errorMessage?:string;

    
 
    constructor(public router:  Router,public activatedRoute: ActivatedRoute ,
        public formBuilder:FormBuilder,public patientSevice:PatientService
){}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            patientId: ['', Validators.required],
            patientName: ['', Validators.required],
            password: ['', Validators.required]
        });

        
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    


    patientLogin(){
        this.patientSevice.autheticatePatient(this.loginForm.get('patientId')?.value,this.loginForm.get('password')?.value).
        subscribe(
            response => {
              console.log(response);
              if(response==null){
                this.errorMessage="Your Login details are not matched!"
                console.log(this.loginForm.get('patientName')?.value +" check your details");

                this.router.navigate(['login'])
              }
              else{
                this.router.navigate(['patientFunc',this.loginForm.get('patientId')?.value])
                console.log(this.loginForm.get('patientName')?.value +"#######logged successfully ");
  
                      }          },
            error => {
              
              console.log(error);
            });
      }
}

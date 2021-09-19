import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {retry, catchError} from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  doctors: any[];
  errorMessage: any;
  adminlogin: FormGroup;
  successMessage:string="";
  adminId?: number;
  adminPassword?: string;
 
  constructor(public router:Router, public adminService: AdminService,public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.adminlogin = this.formBuilder.group({
      adminId:['',[Validators.required,Validators.min(3),Validators.max(10)]],
      adminPassword:['',[Validators.required,Validators.pattern("{A-Za-z0-9!_$@*^%.,}")]]
    })
    }
    adminLogin(){
      this.adminService.adminLogin(this.adminlogin.get('adminId')?.value, this.adminlogin.get('adminPassword')?.value)
      .subscribe(
        response => {
          console.log(response)
          if(response==null){
            console.log("login failed")
            this.router.navigate(['adminlogin'])
          }
          else{
          this.successMessage = this.adminId + ", you have logged successfully"
          console.log("#######logged successfully ");
          this.router.navigate(['adminFunc'])
        }},
        error => {
          
          console.log(error)
        });
    }




   /*  patientLogin(){
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
              this.router.navigate(['viewProfile',this.loginForm.get('patientId')?.value])
              console.log(this.loginForm.get('patientName')?.value +"#######logged successfully ");

                    }          },
          error => {
            
            console.log(error);
          });
    }
     */
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

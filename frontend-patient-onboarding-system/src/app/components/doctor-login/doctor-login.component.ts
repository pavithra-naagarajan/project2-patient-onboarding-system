import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';



@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  successMessage:string=""
  doctorlogin:FormGroup
  doctorId?: number
  doctorPassword?: string
   errorMessage: any;
  constructor(private formBuilder: FormBuilder, public router: Router, public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorlogin = this.formBuilder.group({
      doctorId:['',[Validators.required]],
      doctorPassword:['',[Validators.required]]
    })
  }
  
 doctorLogin(){
  this.doctorService.doctorLogin(this.doctorlogin.get('doctorId')?.value,this.doctorlogin.get('doctorPassword')?.value)
    .subscribe(
      response => {
        console.log(response);
        if(response==null){
          this.errorMessage="Your Login details are not matched!"
          console.log(this.doctorlogin.get('doctorId')?.value +" check your details");
          this.router.navigate(['doctorlogin'])
              }

         else{
        this.successMessage = this.doctorlogin.get('doctorId')?.value+ ", you have logged successfully"
        console.log("#######logged successfully ");
        console.log(this.successMessage)

        this.router.navigate(['doctoroperations',this.doctorlogin.get('doctorId')?.value])
      }},
      error => {
        console.log(error)
      });
}

}


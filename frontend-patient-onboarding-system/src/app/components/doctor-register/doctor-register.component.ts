import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';


@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {
  doctorForm?: FormGroup;
  errorMessage?: string;
  doctorId?:number;

  constructor(public doctorService: DoctorService, public formBuilder: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.doctorForm = this.formBuilder.group({
      doctorId: ['', Validators.required],
      doctorName:['', Validators.required],
      doctorPassword:['', Validators.required],
      gender:['',Validators.required],
      doctorMobileNo:['', Validators.required],
      doctorEmail:['',Validators.required],
      doctorDomain:['',Validators.required],
      doctorSalary:['',Validators.required],
      doctorExperience:['', Validators.required]
    })
  }

  saveDoctor(){
    this.doctorService.registerDoctor(this.doctorForm?.value)
        .subscribe(
          response => {
            console.log(response);
           
          },
          error => {
            window.alert("You have added Doctor successfully!")
            this.router.navigate(['adminFunc'])
         
           
          });
          console.log(this.doctorForm?.value)
  }
  return(){
    this.router.navigate(['adminFunc'])
  }

}

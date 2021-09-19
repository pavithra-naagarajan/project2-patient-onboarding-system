import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouteConfigLoadStart, Router } from '@angular/router';
import { DoctorAvailability } from 'src/app/model/doctor-availability';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-add-doctor-availability',
  templateUrl: './add-doctor-availability.component.html',
  styleUrls: ['./add-doctor-availability.component.css']
})
export class AddDoctorAvailabilityComponent implements OnInit {

  doctorId1?:number;
  availabilityForm:FormGroup;
  doctorAvailability:DoctorAvailability;
  constructor(public activatedRoute:ActivatedRoute,
    public formBuilder:FormBuilder,public doctorService:DoctorService,public router:Router ) { }

  ngOnInit(): void {

    this.doctorId1 = this.activatedRoute.snapshot.params['doctorId'];
    console.log("doctor Id:" +this.doctorId1)

    this.availabilityForm = this.formBuilder.group({
      
      availableDate: ['', [Validators.required]],
      availableTime: ['', [Validators.required]]
    })
  }
  addAvailability(){
    this.doctorAvailability=new DoctorAvailability();
    this.doctorAvailability.doctorId=this.doctorId1;
    this.doctorAvailability.availableDate=this.availabilityForm?.value.availableDate;
    this.doctorAvailability.availableTime=this.availabilityForm?.value.availableTime;

    this.doctorService.saveAvailability(this.doctorAvailability).subscribe(
      res=>{

     
       
        this.router.navigate(['doctoroperations',this.doctorId1])
        
        window.alert("Your Available status added successfully!")
        
      });
    

  }

}

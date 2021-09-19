import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

 // id=localStorage.getItem("user")
  patient:Patient|any
  patientId:number;

  //public logindata:StaffLogin | any
   constructor(public patientService:PatientService,public router: Router) { }
  ngOnInit(): void {
    this.patientId=this.patient.patientId;
    console.log(this.patientId);
  }

  

}



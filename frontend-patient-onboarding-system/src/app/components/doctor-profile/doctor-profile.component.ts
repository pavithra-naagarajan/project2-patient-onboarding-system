import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';

import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  doctor:Doctor|any
  doctorId:number;
  constructor(public router: Router, public doctorService: DoctorService, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.doctorId = this.activatedRoute.snapshot.params['doctorId'];
    console.log(this.doctorId)
      this.doctorService.getDoctorById(this.doctorId)
        .subscribe(data => {
          console.log(data),
            this.doctor = data
        },
          error => console.log(error)
        )
}
updateDoctor(doctorId:number){
this.router.navigate(['updateDoctor',doctorId])
}
}
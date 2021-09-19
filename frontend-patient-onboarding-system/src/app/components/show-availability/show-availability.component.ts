import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DoctorAvailability } from '../../model/doctor-availability';
import { DoctorsList } from '../../model/doctors-list';
import { SearchdoctorService } from '../../searchdoctor/searchdoctor.service';

@Component({
  selector: 'app-show-availability',
  templateUrl: './show-availability.component.html',
  styleUrls: ['./show-availability.component.css']
})
export class ShowAvailabilityComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute,public searchDoctorService:SearchdoctorService,public router:Router) { }


  doctorId?:number;
  patientId?:number;
  doctorName?:any
  doctorAvailability:Observable<DoctorAvailability[]>|any
  doctor=new DoctorsList();
  ngOnInit(): void {
    this.doctorId=this.activatedRoute.snapshot.params['doctorId'];
    this.patientId=this.activatedRoute.snapshot.params['patientId'];
    console.log("####Selected Doctor ID:"+this.doctorId)
    console.log("####Selected Patient ID:"+this.patientId)
     this.searchDoctorService.getDoctorAvailabilities(this.doctorId).subscribe(
        res=>{
          this.doctorAvailability=res
          console.log(this.doctorAvailability)
        }
      )
  }

  bookAppointment(availabilityNo:number)
  {
    
    console.log("Doctor Availability Series No: "+availabilityNo);
    console.log("Doctor Id: "+this.doctorId);
    this.router.navigate(['book',availabilityNo,this.doctorId,this.patientId])
  }
}


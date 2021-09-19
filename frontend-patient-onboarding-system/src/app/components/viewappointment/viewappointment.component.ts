import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientAppointment } from 'src/app/model/patient-appointment';
import { SearchdoctorService } from 'src/app/searchdoctor/searchdoctor.service';


@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {

  patientAppointment:Observable<PatientAppointment[]>|any
  errorMessage?:string
  constructor(public activatedRoute:ActivatedRoute,public searchDoctorService:SearchdoctorService,public router:Router) { }

  patientId?:any
  ngOnInit(): void {
    this.patientId=this.activatedRoute.snapshot.params['patientId'];
    this.searchDoctorService.getappointmentHistoryById(this.patientId).subscribe(
      res=>{
        this.patientAppointment=res
        console.log(res)
  }
    )
}

return(){
  this.router.navigate(['patientFunc',this.patientId])
}
}

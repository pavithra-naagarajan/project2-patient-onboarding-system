import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { SearchdoctorService } from 'src/app/searchdoctor/searchdoctor.service';
import { DoctorsList } from 'src/app/model/doctors-list';
import { DoctorAvailability } from 'src/app/model/doctor-availability';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/services/patient.service';
@Component({
  selector: 'app-searchdoctor',
  templateUrl: './searchdoctor.component.html',
  styleUrls: ['./searchdoctor.component.css']
})
export class SearchdoctorComponent implements OnInit {

  constructor(public searchDoctorService:SearchdoctorService,
    public router:Router,public activatedRoute:ActivatedRoute,public patientService:PatientService) { }

  doctorsList:Observable<DoctorsList[]>|any
  doctorAvailability:Observable<DoctorAvailability[]>|any
  patientId?:number;
  domainName:Number[]|any
  errorMessage?:string
  showDoctors=false;
  selectAvailability=false;

  patient?:Patient;
  searchDomainForm=new FormGroup
  ({
    domainName:new FormControl('',[Validators.required])
  })

  ngOnInit(): void {
   // this.refreshDoctors();
   this.patientId = this.activatedRoute.snapshot.params['patientId'];
   this.patient=new Patient();
   this.patientService.getPatientById(this.patientId).subscribe(
    (res:any)=>{
     
     console.log(res);
     this.patient= res;
    
    // this.router.navigate(['viewProfile']);
   },
     err => {
       
       this.errorMessage = err}) 
 }
  
  
  //to get the doctors based on domain
  searchDomain()
  {
      this.showDoctors=true
      this.searchDoctorService.getDoctorsByDomain(this.searchDomainForm.get('domainName')?.value).subscribe(
        res=>{
          this.doctorsList=res
          console.log(res)
        }
      )
  }

  //to get all doctors
  refreshDoctors()
  {
   
      this.searchDoctorService.getDoctors().subscribe((data: any[])=>{
      console.log("###doctors list recieved from spring :")
      console.log(data);
      this.doctorsList = data;
    },err=>this.errorMessage=err) 
  }

  //to get the availability of doctor after selecting a domain
  selectDoctor(doctorId:number,patientId:number)
  {
      console.log(doctorId)
      this.router.navigate(['show',doctorId,patientId])
  }

  
}



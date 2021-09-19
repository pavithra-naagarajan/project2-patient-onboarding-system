import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/model/doctor';
import { DoctorAvailability } from 'src/app/model/doctor-availability';
import { DoctorsList } from 'src/app/model/doctors-list';
import { Patient } from 'src/app/model/patient';
import { PatientAppointment } from 'src/app/model/patient-appointment';
import { SearchdoctorService } from 'src/app/searchdoctor/searchdoctor.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';




@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute,public searchDoctorService:SearchdoctorService,
    public router:Router,public patientService:PatientService,public doctorService:DoctorService) { }

  doctor:Observable<DoctorsList[]>|any

  
  patientData?:Patient;
  patientAppointment= new PatientAppointment();

  doctorAvailability:Observable<DoctorAvailability[]>|any
  availabilityNo?:any
  patient?:Patient;
  doctorId?:any
  patientId?:number
  patientName?:string
  patientAge?:number

  /* ngOnInit(): void {
    this.availabilityNo=this.activatedRoute.snapshot.params['availabilityNo'];
    this.doctorId=this.activatedRoute.snapshot.params['doctorId'];
    this.patientId=this.activatedRoute.snapshot.params['patientId'];
    console.log(this.availabilityNo);  
    this.searchDoctorService.getDoctorBySeriallNo(this.availabilityNo).subscribe(
      res=>{
        this.doctorAvailability=res
      this.patientId=this.patient.patientId=4;
        this.patientName=this.patient.patientName="pavithra"
        this.patientAge=this.patient.patientAge=20;
    this.patientService.getPatientById(this.patientId).subscribe(
          res=>{
          console.log(res)
            this.patientData=res;

           console.log('***************'+this.patientData.patientId)
          }
        )
      })

/* this.patient=new Patient();
this.patient.patientId=this.patientData.patientId;
        this.patient.patientName=this.patientData.patientName
        this.patient.patientAge=this.patientData.patientAge

        this.patientAppointment.patientId=this.patient.patientId
        this.patientAppointment.patientName=this.patient.patientName
        this.patientAppointment.patientAge=this.patientAge 

        this.patientAppointment.doctorId=this.doctorAvailability[0].doctor.doctorId
        this.patientAppointment.doctorName=this.doctorAvailability[0].doctor.doctorName
        this.patientAppointment.doctorDomain=this.doctorAvailability[0].doctor.doctorDomain
        this.patientAppointment.doctorExperience=this.doctorAvailability[0].doctor.doctorExperience
        this.patientAppointment.doctorMobileNo=this.doctorAvailability[0].doctor.doctorMobileNo
        this.patientAppointment.availableDate=this.doctorAvailability[0].availableDate
        this.patientAppointment.availableTime=this.doctorAvailability[0].availableTime
      

    
  } */

  ngOnInit(): void {
    this.availabilityNo=this.activatedRoute.snapshot.params['availabilityNo'];
    this.doctorId=this.activatedRoute.snapshot.params['doctorId'];
    this.patientId=this.activatedRoute.snapshot.params['patientId'];
    console.log(this.availabilityNo);  
this.searchDoctorService.getAvailabilityByDoctorId(this.doctorId).subscribe(
  result=>{
    this.doctorAvailability=result
  }

)
this.doctorService.getDoctorById(this.doctorId).subscribe(
  data=>{
    this.doctor=data
  }
)

    this.searchDoctorService.getDoctorBySeriallNo(this.availabilityNo).subscribe(
      res=>{
        this.doctorAvailability=res
        console.log("Doctor Availabality:"+this.doctorAvailability) 

       
        console.log("GET DOCTOR AVAILABLITY.....")
        console.log(this.doctorAvailability)
        console.log(this.doctorAvailability[0].doctor)
        console.log("############# DOCTOR ID.....")
        console.log(this.doctorAvailability[0].doctor.doctorId)
        console.log("**************************DOCTOR ID....."+this.doctorId)
        console.log("-----------------------------------------")
        console.log("Doctor Id:"+this.doctorId)
        console.log("Doctor Name: "+this.doctorAvailability[0].doctor.doctorName)
        console.log("Doctor Domain: "+this.doctorAvailability[0].doctor.doctorDomain)
        console.log("Doctor Experince: "+this.doctorAvailability[0].doctor.doctorExperience)
        console.log("Doctor Mobile No: "+this.doctorAvailability[0].doctor.doctorMobileNo)
        console.log("Available date:"+this.doctorAvailability[0].availableDate)
        console.log("Available Time:"+this.doctorAvailability[0].availableTime) 
      
        
        /* this.patientId=this.patient.patientId=1;
        this.patientName=this.patient.patientName="gaju"
        this.patientAge=this.patient.patientAge=20;

        this.patientAppointment.patientId=this.patientId
        this.patientAppointment.patientName=this.patientName
        this.patientAppointment.patientAge=this.patientAge */


        this.patientAppointment.doctorId=this.doctorAvailability[0].doctor.doctorId
        this.patientAppointment.doctorName=this.doctorAvailability[0].doctor.doctorName
        this.patientAppointment.doctorDomain=this.doctorAvailability[0].doctor.doctorDomain
        this.patientAppointment.doctorExperience=this.doctorAvailability[0].doctor.doctorExperience
        this.patientAppointment.doctorMobileNo=this.doctorAvailability[0].doctor.doctorMobileNo
        this.patientAppointment.availableDate=this.doctorAvailability[0].availableDate
        this.patientAppointment.availableTime=this.doctorAvailability[0].availableTime
      }

    )
    this.patientService.getPatientById(this.patientId).subscribe(
      res=>{
        this.patientData=res
        console.log(res)
        this.patientAppointment.patientId=this.patientData.patientId
        this.patientAppointment.patientName=this.patientData.patientName
        this.patientAppointment.patientAge=this.patientData.patientAge
      })
  }






 confrimAppoinment()
  {
    this.searchDoctorService.saveAppointmentHistory(this.patientAppointment)
    .subscribe(
      res=>{
        console.log(res);
        console.log("#######Saved successfully ");
      },
      error => {
        console.log(error);
        window.alert("You have successfully Booked")
        this.router.navigate(['view',this.patientId])
      });
  }

}


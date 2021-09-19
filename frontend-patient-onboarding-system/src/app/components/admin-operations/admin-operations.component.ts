import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/model/doctor';
import { Patient } from 'src/app/model/patient';
import { PatientAppointment } from 'src/app/model/patient-appointment';
import { SearchdoctorService } from 'src/app/searchdoctor/searchdoctor.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-admin-operations',
  templateUrl: './admin-operations.component.html',
  styleUrls: ['./admin-operations.component.css']
})
export class AdminOperationsComponent implements OnInit {
show?:boolean;
showDoctor?:boolean
patients: Patient[] = [] ;
doctors:Doctor[]=[];
view?:boolean;
textbox?:boolean;
viewId?:boolean;
patientForm?:FormGroup;

patientAppointment:Observable<PatientAppointment[]>|any


  constructor(public patientService:PatientService,public router:Router,
    public searchdoctorService:SearchdoctorService,public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
     
      patientId: ['', [Validators.required]],
      })
    }
  viewPatients(){
    this.patientService.getAllPatients().subscribe(
      (res:any)=>{
       this.show=true
       this.view=false
       this.viewId=false
       this.textbox=false
       this.showDoctor=false
       this.patients=res
       console.log(res);
       
       
     }
    )}


    
viewDoctors(){

  this.patientService.getAllDoctors().subscribe(
    (res:any)=>{
      this.showDoctor=true
      this.show=false
      this.view=false
       this.viewId=false
       this.textbox=false
      this.doctors=res
      console.log(res);
     console.log(res);
     
     
   }
  )}

  return(){
    this.router.navigate(['adminlogin'])
  }

  registerDoctor(){
    this.router.navigate(['doctorregister'])
  }


  viewAppointmentById(){
 this.searchdoctorService.getappointmentHistoryById(this.patientForm?.value.patientId).subscribe(
      res=>{
        this.viewId=true
        this.show=false
        this.view=false
       this.showDoctor=false
       this.textbox=false
        this.patientAppointment=res
        console.log(res)
        
  }
    )
  }

  viewById(){
    this.textbox=true
    this.viewId=false
        this.show=false
        this.view=false
       this.showDoctor=false
  }

home(){
  this.router.navigate([''])
}

  viewAllAppointments(){
    this.searchdoctorService.getappointmentHistory().subscribe(res=>
      {
        console.log(res)
        this.patientAppointment=res
      })
this.view=true
this.textbox=false
    this.viewId=false
        this.show=false
        
       this.showDoctor=false
  }
  //dependency injection


// ngOnInit(): void {
//     this.refreshProducts();
// }


// addProduct(){
//   //write the code to navigate programmatically
//   console.log("Add products called")
//   this.router.navigate(['addProduct',-1]);
// }
/* 
deleteProduct(productId:number){
  this.productService.deleteProduct(productId)
    .subscribe(
      response => {
        console.log(response);
        console.log("#######Deleted successfully ");
      },
      error => {
        this.successMessage1="Product with productId : "+productId+" Deleted successfully "
        this.refreshProducts();
        this.router.navigate([''])
        console.log(error);
      });
} */

//update function
/* 
editProduct(productId: number) {
  this.router.navigate(['addProduct',productId])
 
}



refreshProducts(){
  this.productService.getProducts().subscribe((data: any[])=>{
    console.log("###Products recieved from spring :")
    this.successMessage="Product list updated successfully"
    console.log(data);
    this.products = data;
  },
    err => {
      
      this.errorMessage = err}) 
} */
}
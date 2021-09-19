import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  doctorLogin(){
    console.log("Doctor Login Page")
    this.router.navigate(['doctorlogin'])
  }

  adminLogin(){
    console.log("Admin Login Page")
    this.router.navigate(['adminlogin'])
  }
  
  patientLogin(){
    console.log("Welcome to Patient Login")
    this.router.navigate(['login'])
  }


}
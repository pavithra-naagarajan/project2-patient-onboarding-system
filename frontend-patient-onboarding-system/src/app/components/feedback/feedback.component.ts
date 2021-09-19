import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  message?:string;
  patientId?:number;
  
  constructor(public router:Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.patientId = this.activatedRoute.snapshot.params['patientId'];
    console.log("##Feedback component Called...")
   
  }
  
  saveFeedback()
  {
    this.message="Thanks for your Feedback :)";
    console.log(this.message)
  }
  returnMain()
  {
    this.router.navigate(['patientFunc',this.patientId])
  }

  
}


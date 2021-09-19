import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
patientId?:number;
  constructor(public router:Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.patientId = this.activatedRoute.snapshot.params['patientId'];
  }
return(){
  this.router.navigate(['patientFunc',this.patientId])
}
}

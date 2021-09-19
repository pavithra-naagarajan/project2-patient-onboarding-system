package com.revature.training.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.revature.training.model.Doctor;
import com.revature.training.service.DoctorService;
import com.revature.training.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;



@Controller
@RequestMapping("Doctor")
@CrossOrigin(origins ="http://localhost:4200")
public class DoctorController {
	
	@Autowired
	DoctorService doctorService;
	
	@Autowired
	PatientService patientService;
	
	@PutMapping("/updateStatus/{status}/{doctorId}")
	public void updateDoctorStatus(@PathVariable("status") String status,@PathVariable("doctorId") int doctorId) {
		Doctor doctor=doctorService.getDoctorById(doctorId);
		doctor.setStatus(status);
		doctorService.updateDoctorStatus(doctor);
		System.out.println("updateDoctorStatus called");
		
	}
	
	
@GetMapping("/searchByDoctorIdAndDoctorPassword/{doctorId}/{doctorPassword}")
	public ResponseEntity<Doctor> doctorLogin(@PathVariable("doctorId") int doctorId,
			                   @PathVariable("doctorPassword") String doctorPassword){
		ResponseEntity<Doctor> responseEntity = null;
		Doctor doctor= new Doctor();
		 boolean res=false;	
		 res= doctorService.doctorLogin(doctorId, doctorPassword);
		if(res) {
			doctor= doctorService.viewDoctorDetails(doctorId);
			responseEntity=new ResponseEntity<Doctor>(doctor, HttpStatus.OK);
			System.out.println("You have logged in successfully");		
		}
		else {
			responseEntity=new ResponseEntity<Doctor>(doctor, HttpStatus.OK);
			System.out.println("Sorry ID or Pasword is inavlid");
		}
		return responseEntity;
	}
	

@GetMapping("/searchByDoctorId/{doctorId}")
public ResponseEntity<Doctor> getDoctorById(@PathVariable("doctorId") int doctorId){
	ResponseEntity<Doctor> responseEntity = null;
	Doctor doctor = new Doctor();
	if(doctorService.isDoctorExists(doctorId)) {
		doctor = doctorService.viewDoctorDetails(doctorId);
		responseEntity = new ResponseEntity<Doctor>(doctor, HttpStatus.OK);
	}
	else {
		responseEntity = new ResponseEntity<Doctor>(doctor, HttpStatus.OK);

	}
	return responseEntity;
}

@PutMapping
public ResponseEntity<String> updateMyProfile(@RequestBody Doctor doctor){
   ResponseEntity<String> responseEntity = null;
   int doctorId= doctor.getDoctorId();
   String message= null;
   if(doctorService.isDoctorExists(doctorId)) {
	   doctorService.updateDoctor(doctor);
	   message="Doctor with doctorId" +doctorId + "updated Successfully";
	   responseEntity = new ResponseEntity<String>(message, HttpStatus.OK);
   }
   else {
	   message="Doctor with doctorId" +doctorId+ "does not exist";
	   responseEntity = new ResponseEntity<String>(message, HttpStatus.OK);
   }
   return responseEntity;
}
}





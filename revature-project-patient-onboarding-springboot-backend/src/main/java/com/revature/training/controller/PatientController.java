package com.revature.training.controller;

import java.net.http.HttpHeaders;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.training.model.Doctor;
//import com.revature.training.model.FeedBack;
import com.revature.training.model.Patient;

import com.revature.training.service.DoctorService;
import com.revature.training.service.PatientService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("patient")
public class PatientController {
	@Autowired
	PatientService patientService;
	
	@Autowired
	DoctorService doctorService;
	//get patient by id
	@GetMapping("{patientId}")
	public ResponseEntity<Patient> getPatientById(@PathVariable("patientId") int patientId) {
		ResponseEntity<Patient> responseEntity=null;
		Patient patient =new Patient();
		if(patientService.isPatientExists(patientId)) {
			patient=patientService.getPatientById(patientId);
			responseEntity=new ResponseEntity<Patient> (patient,HttpStatus.OK);
		}
		else
			responseEntity=new ResponseEntity<Patient> (patient,HttpStatus.NO_CONTENT);
		
		return responseEntity;

	}
		//insert a patient
		@PostMapping
		public ResponseEntity<String> addPatient(@RequestBody Patient patient) {
			ResponseEntity<String> responseEntity=null;
			long patientId=patient.getPatientId();
			String message=null;
			if(patientService.isPatientExists(patientId)) {
			message="Patient with patientId "+patientId+" already exists";
			responseEntity =new ResponseEntity<String>(message,HttpStatus.NO_CONTENT);
			}
			else {
				patientService.addPatient(patient);
				//message="Patient with patientId "+patientId+" saved successfully";
				long mailPatientId=patient.getPatientId();
				String mail=(patient.getMailId());
				message="Your Patient Id for Login is:\n"+mailPatientId+"\nThank you.";
				MailSend.sendMail(mail,"Patient Id For Login :", message);
				responseEntity =new ResponseEntity<String>(message,HttpStatus.OK);
			}
			
			System.out.println(patient);
			return responseEntity;			
		}

		/*
		 * //feedback msg
		 * 
		 * @PostMapping("/feedback") public ResponseEntity<String>
		 * addFeedback(@RequestBody FeedBack feedBack) { ResponseEntity<String>
		 * responseEntity=null; patientService.addFeedBack(feedBack); return
		 * responseEntity; }
		 */
	
		@PutMapping
		public ResponseEntity<String> updatePatient(@RequestBody Patient patient) {
			ResponseEntity<String> responseEntity=null;
			long patientId=patient.getPatientId();
			String message=null;
			if(patientService.isPatientExists(patientId)) {
				patientService.updatePatient(patient);
			message="Patient with patientId "+patientId+" Updated Successfully";
			responseEntity =new ResponseEntity<String>(message,HttpStatus.OK);
			}
			else {
				
				message="Patient with patientId "+patientId+" not exist";
				responseEntity =new ResponseEntity<String>(message,HttpStatus.NO_CONTENT);
			}
			
			
			return responseEntity;
		}
		
		
		
		//login
		@GetMapping("login/{patientId}/{password}")
		public ResponseEntity<Patient> patientLogin(
				@PathVariable("patientId") long patientId,
				
				@PathVariable("password") String password) {
			ResponseEntity<Patient> responseEntity=null;
			Patient patient =new Patient();
			boolean res=false;
			
			res=patientService.patientLogin(patientId,password);
			if(res) {
				patient=patientService.getPatientById(patientId);
				responseEntity=new ResponseEntity<Patient> (patient,HttpStatus.OK);
				System.out.println("logged successfully");
			}
			else {
				responseEntity=new ResponseEntity<Patient> (patient,HttpStatus.NO_CONTENT);
			System.out.println("Your login details are not matched");}

			return responseEntity;

			
				
			

		}
		

		

		@DeleteMapping("/{patientId}")
		public ResponseEntity<String> deletePatient(@PathVariable("patientId") int patientId) {
			ResponseEntity<String> responseEntity = null;

			String message = null;
			if (patientService.isPatientExists(patientId)) {
				patientService.deletePatient(patientId);
				message = "Patient with patientId " + patientId + " deleted Successfully";
				responseEntity = new ResponseEntity<String>(message, HttpStatus.OK);
			} else {

				message = "Patient with patientId " + patientId + " not exist";
				responseEntity = new ResponseEntity<String>(message, HttpStatus.NO_CONTENT);
			}

			return responseEntity;
		}

		

	
				
				
				
		

}

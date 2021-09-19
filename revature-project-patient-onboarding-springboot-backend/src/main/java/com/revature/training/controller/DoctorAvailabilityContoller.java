package com.revature.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.training.model.DoctorAvailability;
import com.revature.training.model.Patient;
import com.revature.training.service.DoctorAvailabilityService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("doctoravailability")
public class DoctorAvailabilityContoller {

	@Autowired
	DoctorAvailabilityService doctorAvailabilityService;

	// get all doctors
	@GetMapping
	public ResponseEntity<List<DoctorAvailability>> getAllAvailability() {
		ResponseEntity<List<DoctorAvailability>> responseEntity = null;
		List<DoctorAvailability> availabilities = doctorAvailabilityService.getAllAvailability();
		if (availabilities.size() == 0) {
			responseEntity = new ResponseEntity<List<DoctorAvailability>>(availabilities, HttpStatus.OK);
		} else
			responseEntity = new ResponseEntity<List<DoctorAvailability>>(availabilities, HttpStatus.OK);
		return responseEntity;
	}

	
	@GetMapping("avail/{doctorId}")
	public List<DoctorAvailability> getDoctorAvailabilityByDoctorId(@PathVariable ("doctorId") int doctorId) {
		List<DoctorAvailability> responseEntity = null;
		responseEntity=doctorAvailabilityService.getDoctorAvailabilityByDoctorId(doctorId);
		
		return responseEntity;
	}

	// localhost:9090/doctoravailability/getDoctorAvailabilityByDomain/1

	@GetMapping("/getDoctorAvailabilityByDomain/{doctorId}")
	public List<DoctorAvailability> getDoctorAvailabilityByDoctorDomain(@PathVariable("doctorId") int doctorId) {
		System.out.println("getDoctorAvailabilityByDomain called...");
		return doctorAvailabilityService.getDoctorAvailabilityByDoctorDomain(doctorId);
	}

	@GetMapping("/getDoctorBySerialNo/{serialNo}")
	public List<DoctorAvailability> getDoctorBySerialNo(@PathVariable("serialNo") int serialNo) {
		System.out.println("getDoctorBySerialNo called...");
		return doctorAvailabilityService.getDoctorBySerialNo(serialNo);
	}
	@PostMapping
	public ResponseEntity<String> addAvailability(@RequestBody DoctorAvailability doctorAvailability) {
		ResponseEntity<String> responseEntity=null;
		/*
		 * String availableDate = doctorAvailability.getAvailableDate(); String
		 * availableTime = doctorAvailability.getAvailableTime(); int doctorId =
		 * doctorAvailability.getDoctor().getDoctorId()
		 */;
	doctorAvailabilityService.addStatusAvailability(doctorAvailability);
		System.out.println("addAvailability called...");
		responseEntity =new ResponseEntity<String>(HttpStatus.OK);
		
		return responseEntity;			
	}
	

}
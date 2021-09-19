package com.revature.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.revature.training.model.PatientAppointment;
import com.revature.training.service.PatientAppointmentService;
import com.revature.training.service.PatientService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("patientappointment")
public class PatientAppointmentController {

	@Autowired
	PatientAppointmentService appointmentService;
	@Autowired
	PatientService patientService;

	@GetMapping
	public ResponseEntity<List<PatientAppointment>> getAllAppointments() {
		ResponseEntity<List<PatientAppointment>> responseEntity = null;
		List<PatientAppointment> appointments = appointmentService.getAllAppointment();
		if (appointments.size() == 0) {
			responseEntity = new ResponseEntity<List<PatientAppointment>>(appointments, HttpStatus.OK);
		} else
			responseEntity = new ResponseEntity<List<PatientAppointment>>(appointments, HttpStatus.OK);
		return responseEntity;
	}

	// insert appointments..
	@PostMapping
	public ResponseEntity<String> addAppointment(@RequestBody PatientAppointment appointment) {
		ResponseEntity<String> responseEntity = null;
		int appointementId = appointment.getSerialNumber();
		String message = null;

		appointmentService.addAppointment(appointment);
		System.out.println(appointment);
		long patientId=appointment.getPatientId();
		
		Patient patient=patientService.getPatientById(patientId);
		String mail=patient.getMailId();
		 message="You have Booked appointment successfully!\n"+
				 "Doctor Name :"+appointment.getDoctorName()+
				 "\nBooked Date :"+appointment.getAvailableDate()+
				 "\nBooked Time:"+appointment.getAvailableTime()
				 
				 +"\nThank you.";
		
		 BookingMailSend.sendMail(mail,"Patient Appointment Details:", message);
		
		message = "Appointment with Appintment Id " + appointementId + " saved successfully";
		responseEntity = new ResponseEntity<String>(message, HttpStatus.OK);

		return responseEntity;

	}
	
	@GetMapping("/getAppiontmentByPatientId/{patientId}")
	public List<PatientAppointment> getAppiontmentByPatientId(@PathVariable("patientId") int patientId) {
		System.out.println("getAppiontmentByPatientId called...");
		return appointmentService.getAppiontmentByPatientId(patientId);
	}

	@GetMapping("/getAppiontmentByDoctorId/{doctorId}")
	public List<PatientAppointment> getAppiontmentByDoctorId(@PathVariable("doctorId") int doctorId) {
		System.out.println("getAppiontmentByDoctorId called...");
		return appointmentService.getDoctorByDoctorId(doctorId);
	}
  

}

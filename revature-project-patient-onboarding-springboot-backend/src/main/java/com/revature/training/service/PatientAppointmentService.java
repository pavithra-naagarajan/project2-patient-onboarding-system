package com.revature.training.service;

import java.util.List;

import com.revature.training.model.PatientAppointment;

public interface PatientAppointmentService {

	public boolean addAppointment(PatientAppointment appointment);
	public boolean deleteAppointment(int serialNumber);
	public boolean updateAppointment(PatientAppointment appointment);
	public List<PatientAppointment> getAllAppointment();
	public List<PatientAppointment> getAppiontmentByPatientId(int patientId);
	
	public List<PatientAppointment> getDoctorByDoctorId(int doctorId);

	  
	
}
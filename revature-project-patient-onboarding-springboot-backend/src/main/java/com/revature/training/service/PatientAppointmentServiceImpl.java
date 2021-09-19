package com.revature.training.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.training.model.Doctor;
import com.revature.training.model.PatientAppointment;
import com.revature.training.repository.DoctorAvailabilityRepository;
import com.revature.training.repository.PatientAppointmentRepository;

@Service
public class PatientAppointmentServiceImpl implements PatientAppointmentService{

	@Autowired
	PatientAppointmentRepository appointmentRepository;
	@Override
	public boolean addAppointment(PatientAppointment appointment) {
		appointmentRepository.save(appointment);
		return true;	
	}

	@Override
	public boolean deleteAppointment(int serialNumber) {
		appointmentRepository.deleteById(serialNumber);
		return true;
	}

	@Override
	public boolean updateAppointment(PatientAppointment appointment) {
		
		appointmentRepository.save(appointment);
		return true;
	}

	@Override
	public List<PatientAppointment> getAllAppointment() {
		
		List<PatientAppointment> appointments=(List<PatientAppointment>) appointmentRepository.findAll();
		return appointments;
	}

	@Override
	public List<PatientAppointment> getAppiontmentByPatientId(int patientId) {
		List<PatientAppointment> appointmentData = (List<PatientAppointment>)appointmentRepository.getAppiontmentByPatientId(patientId);
		return appointmentData;
	}
	
	
	@Override
	public List<PatientAppointment> getDoctorByDoctorId(int doctorId) {
		List<PatientAppointment> appointmentData = (List<PatientAppointment>)appointmentRepository.getDoctorByDoctorId(doctorId);
		return appointmentData;
	}

	
}




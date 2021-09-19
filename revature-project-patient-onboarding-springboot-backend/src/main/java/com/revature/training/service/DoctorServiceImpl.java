package com.revature.training.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.training.model.Doctor;
import com.revature.training.model.DoctorAvailability;
import com.revature.training.repository.DoctorAvailabilityRepository;
import com.revature.training.repository.DoctorRepository;

@Service
public class DoctorServiceImpl implements DoctorService{

	@Autowired
	DoctorRepository doctorRepository;
	
	@Override
	public boolean addDoctor(Doctor doctor) {
		doctorRepository.save(doctor);
		return true;	
	}

	@Override
	public boolean deleteDoctor(int doctorId) {
		doctorRepository.deleteById(doctorId);
		return true;
	}

	@Override
	public boolean updateDoctor(Doctor doctor) {
		doctorRepository.save(doctor);
		return true;
	}

	@Override
	public Doctor getDoctorById(int doctorId) {
		Optional<Doctor> doctorData = doctorRepository.findById(doctorId);
		Doctor doctor = doctorData.get();
		return doctor;
	}

	@Override
	public List<Doctor> getAllDoctors() {
		List<Doctor> doctorList = (List<Doctor>) doctorRepository.findAll();
		return doctorList;
	}

	@Override
	public boolean isDoctorExists(int doctorId) {
		Optional<Doctor> doctorData = doctorRepository.findById(doctorId);
		return doctorData.isPresent();
	}

	@Override
	public List<Doctor> getDoctorByDoctorDomain(String doctorDomain) {
		
		return doctorRepository.findByDoctorDomain(doctorDomain);
		
	}


	@Override
	public boolean doctorLogin(int doctorId, String doctorPassword) {
		
		Optional<Doctor> doctorData= doctorRepository.findByDoctorIdAndDoctorPassword(doctorId, doctorPassword);
		return doctorData.isPresent();
	}



	@Override
	public Doctor viewDoctorDetails(int doctorId) {
		Optional<Doctor> doctorData = doctorRepository.findById(doctorId);
		Doctor doctor = doctorData.get();	
		return doctor;
	}

	@Override
	public void updateDoctorStatus(Doctor doctor) {
		doctorRepository.save(doctor);
		
	}
	
}
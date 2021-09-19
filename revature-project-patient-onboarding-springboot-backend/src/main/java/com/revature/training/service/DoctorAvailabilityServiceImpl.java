package com.revature.training.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.training.model.DoctorAvailability;
import com.revature.training.repository.DoctorAvailabilityRepository;

@Service
public class DoctorAvailabilityServiceImpl implements DoctorAvailabilityService {

	@Autowired
	DoctorAvailabilityRepository doctorAvailabilityRepository;
	
	@Override
	public List<DoctorAvailability> getAllAvailability() {

		List<DoctorAvailability> availabilities=(List<DoctorAvailability>) doctorAvailabilityRepository.findAll();
		return availabilities;
	}

	@Override
	public List<DoctorAvailability> getDoctorAvailabilityByDoctorDomain(int doctorId) {
		
		List<DoctorAvailability> availabilities=(List<DoctorAvailability>) doctorAvailabilityRepository.getDoctorAvailabilityByDoctorDomain(doctorId);
		return availabilities;
	}

	@Override
	public List<DoctorAvailability> getDoctorBySerialNo(int serialNo) {
		List<DoctorAvailability> availabilities=(List<DoctorAvailability>) doctorAvailabilityRepository.getDoctorBySerialNo(serialNo);
		return availabilities;
	}

	@Override
	public void addStatusAvailability(DoctorAvailability doctorAvailability) {
		doctorAvailabilityRepository.save(doctorAvailability);
		
	}

	@Override
	public List<DoctorAvailability> getDoctorAvailabilityByDoctorId(int doctorId) {
		List<DoctorAvailability> availabilities=(List<DoctorAvailability>) doctorAvailabilityRepository.findByDoctorId(doctorId);
		return availabilities;
	}
	
	
}

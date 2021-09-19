package com.revature.training.service;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.revature.training.model.DoctorAvailability;

public interface DoctorAvailabilityService {

	public List<DoctorAvailability> getAllAvailability();
	public List<DoctorAvailability> getDoctorAvailabilityByDoctorDomain(int doctorId);
	public List<DoctorAvailability> getDoctorBySerialNo(int serialNo);
	public void addStatusAvailability(DoctorAvailability doctorAvailability);
	public List<DoctorAvailability>getDoctorAvailabilityByDoctorId(int doctorId);
	
}

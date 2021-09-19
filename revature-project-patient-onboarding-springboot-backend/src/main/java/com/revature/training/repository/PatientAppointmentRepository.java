package com.revature.training.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.revature.training.model.PatientAppointment;

@EnableJpaRepositories
public interface PatientAppointmentRepository extends CrudRepository<PatientAppointment, Integer>{

	@Query("SELECT p from PatientAppointment p where patientId=:patientId")
	public List<PatientAppointment> getAppiontmentByPatientId(@Param("patientId") int patientId);
	
	
	@Query("SELECT a from PatientAppointment a where doctorId=:doctorId")
	public List<PatientAppointment> getDoctorByDoctorId(@Param("doctorId") int doctorId);
	
  
}
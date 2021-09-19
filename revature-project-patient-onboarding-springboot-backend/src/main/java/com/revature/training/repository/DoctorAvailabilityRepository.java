package com.revature.training.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.training.model.DoctorAvailability;

@Controller
@Repository
public interface DoctorAvailabilityRepository extends JpaRepository<DoctorAvailability, Integer>{

	@Query("SELECT a from DoctorAvailability a where doctor_Id=:doctor_Id")
	public List<DoctorAvailability> getDoctorAvailabilityByDoctorDomain(@Param("doctor_Id") int doctorId);

	@Query("SELECT a from DoctorAvailability a where serialNo=:serialNo")
	public List<DoctorAvailability> getDoctorBySerialNo(@Param("serialNo") int serialNo);
	
	@Query("SELECT a from DoctorAvailability a where doctorId=:doctorId")
	public List<DoctorAvailability> findByDoctorId(@Param("doctorId") int doctorId);
	
	
	

	
	

	

	/*
	 * @Modifying
	 * 
	 * @Query(value =
	 * "insert into  DoctorAvailability(availableDate,availableTime,doctorId) VALUES (:availableDate,:availableTime,:doctorId)"
	 * , nativeQuery = true)
	 * 
	 * @Transactional public void addStatusAvailability(@Param("availableDate")
	 * String availableDate,@Param("availableTime") String
	 * availableTime, @Param("doctorId") int doctorId);
	 * 
	 * 
	 */
	
}
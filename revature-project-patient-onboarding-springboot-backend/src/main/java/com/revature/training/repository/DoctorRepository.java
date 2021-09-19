 package com.revature.training.repository;
  
  import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.revature.training.model.Doctor;
import com.revature.training.model.DoctorAvailability;

  @EnableJpaRepositories
  public interface DoctorRepository extends CrudRepository<Doctor, Integer> {
	  
	//select * from doctors where domain = ?
	public List<Doctor> findByDoctorDomain(String doctorDomain);
		  
	
	/*
	 * @Query("from Event e where e.fest.id=:festId and id=:eventId")
	 * Optional<Event> findEventById(@Param("festId") Long festId,@Param("eventId")
	 * Long eventId);
	 */
	
	 @Query("SELECT a from DoctorAvailability a where doctorId=:doctorId")
	 public List<DoctorAvailability> getDoctorAvailability(@Param("doctorId") int doctorId);


	public Optional<Doctor> findByDoctorIdAndDoctorPassword(int doctorId, String doctorPassword);
	
	/*
	 * @Query("update Doctor d set d.status=No where d.doctorId=:doctorId") public
	 * void updateDoctorStatus(@Param("status") String status,@Param("doctorId") int
	 * doctorId);
	 */

  }
 
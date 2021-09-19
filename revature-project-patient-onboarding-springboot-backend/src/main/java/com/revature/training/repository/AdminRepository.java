
  package com.revature.training.repository;
  
  import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
  
  import com.revature.training.model.Admin;
  
  public interface AdminRepository extends CrudRepository<Admin, Integer> {

	Optional<Admin> findByAdminIdAndAdminPassword(int adminId, String adminPassword);
  
  }
 

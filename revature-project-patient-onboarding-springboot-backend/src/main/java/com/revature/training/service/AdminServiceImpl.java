package com.revature.training.service;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.training.model.Admin;
import com.revature.training.repository.AdminRepository;




@Service
public class AdminServiceImpl implements AdminService{
	
	@Autowired
	AdminRepository adminRepository; 
	

	@Override
	public boolean adminLogin(int adminId, String adminPassword) {
		Optional<Admin> adminData= adminRepository.findByAdminIdAndAdminPassword(adminId, adminPassword);
		return adminData.isPresent();
	}


	
	@Override
	public Admin getAdminById(int adminId) {
		Optional<Admin> adminData=adminRepository.findById(adminId);
		Admin admin= adminData.get();
		return admin;
	}


}



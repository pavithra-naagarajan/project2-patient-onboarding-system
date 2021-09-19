package com.revature.training.service;

import com.revature.training.model.Admin;

public interface AdminService {

	boolean adminLogin(int adminId, String adminPassword);

	Admin getAdminById(int adminId);

}

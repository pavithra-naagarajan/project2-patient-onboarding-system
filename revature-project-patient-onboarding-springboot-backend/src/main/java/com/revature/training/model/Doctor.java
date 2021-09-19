package com.revature.training.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component

@Entity
@Table(name="doctors")
public class Doctor {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int doctorId;
	@Column(nullable=false)
	private String doctorName;
	@Column(unique=true, nullable=false)
	private String doctorPassword;
	@Column(unique=true, nullable=false)
	private String doctorMobileNo;
	@Column(unique=true, nullable=false)
	private String doctorEmail;
	@Column(nullable=false)
	private String doctorDomain;
	@Column(nullable=false)
	private String doctorExperience;
	@Column(nullable=false)
	private int doctorSalary;
	@Column
	private String status;
	
	public Doctor() {
		
	}

	public int getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
	}

	public String getDoctorName() {
		return doctorName;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public String getDoctorPassword() {
		return doctorPassword;
	}

	public void setDoctorPassword(String doctorPassword) {
		this.doctorPassword = doctorPassword;
	}

	public String getDoctorMobileNo() {
		return doctorMobileNo;
	}

	public void setDoctorMobileNo(String doctorMobileNo) {
		this.doctorMobileNo = doctorMobileNo;
	}

	public String getDoctorEmail() {
		return doctorEmail;
	}

	public void setDoctorEmail(String doctorEmail) {
		this.doctorEmail = doctorEmail;
	}

	public String getDoctorDomain() {
		return doctorDomain;
	}

	public void setDoctorDomain(String doctorDomain) {
		this.doctorDomain = doctorDomain;
	}

	public String getDoctorExperience() {
		return doctorExperience;
	}

	public void setDoctorExperience(String doctorExperience) {
		this.doctorExperience = doctorExperience;
	}

	public int getDoctorSalary() {
		return doctorSalary;
	}

	public void setDoctorSalary(int doctorSalary) {
		this.doctorSalary = doctorSalary;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Doctor(int doctorId, String doctorName, String doctorPassword, String doctorMobileNo, String doctorEmail,
			String doctorDomain, String doctorExperience, int doctorSalary, String status) {
		super();
		this.doctorId = doctorId;
		this.doctorName = doctorName;
		this.doctorPassword = doctorPassword;
		this.doctorMobileNo = doctorMobileNo;
		this.doctorEmail = doctorEmail;
		this.doctorDomain = doctorDomain;
		this.doctorExperience = doctorExperience;
		this.doctorSalary = doctorSalary;
		this.status = status;
	}

	@Override
	public String toString() {
		return "Doctor [doctorId=" + doctorId + ", doctorName=" + doctorName + ", doctorPassword=" + doctorPassword
				+ ", doctorMobileNo=" + doctorMobileNo + ", doctorEmail=" + doctorEmail + ", doctorDomain="
				+ doctorDomain + ", doctorExperience=" + doctorExperience + ", doctorSalary=" + doctorSalary
				+ ", status=" + status + "]";
	}
	
  }
 

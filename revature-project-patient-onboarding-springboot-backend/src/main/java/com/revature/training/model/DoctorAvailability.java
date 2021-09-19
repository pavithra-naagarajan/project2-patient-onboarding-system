
package com.revature.training.model;

import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.JoinColumns;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component

@Entity
@Table(name = "doctor_availability")
public class DoctorAvailability {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int serialNo;

	private String availableDate;

	private String availableTime;

	@ManyToOne
	@JoinColumns({
		@JoinColumn(name="doctor_Id", referencedColumnName="doctorId"),
	})
	private Doctor doctor;

	
	/*
	 * private Doctor doctor;
	 * 
	 * @Id private int id; private int doctorId; private Date appointmentDate;
	 * private String appointmentDay; private Time appointmentTime;
	 */

	public DoctorAvailability() {

	}






	public DoctorAvailability(int serialNo, String availableDate, String availableTime, Doctor doctor) {
		super();
		this.serialNo = serialNo;
		this.availableDate = availableDate;
		this.availableTime = availableTime;
		this.doctor = doctor;
	}






	public int getSerialNo() {
		return serialNo;
	}


	public void setSerialNo(int serialNo) {
		this.serialNo = serialNo;
	}


	public String getAvailableDate() {
		return availableDate;
	}


	public void setAvailableDate(String availableDate) {
		this.availableDate = availableDate;
	}


	public String getAvailableTime() {
		return availableTime;
	}


	public void setAvailableTime(String availableTime) {
		this.availableTime = availableTime;
	}




	

	public Doctor getDoctor() {
		return doctor;
	}






	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}






	@Override
	public String toString() {
		return "DoctorAvailability [serialNo=" + serialNo + ", availableDate=" + availableDate + ", availableTime="
				+ availableTime + ", doctor=" + doctor + "]";
	}






	
	

	
}

package com.revature.training.model;



import java.sql.Time;
import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="patientappointment")
public class PatientAppointment {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int serialNumber;
	private int patientId;
	private String patientName;
	private int patientAge;
	private int doctorId;
	private String doctorName;
	private String doctorDomain;
	private String doctorExperience;
	private String doctorMobileNo;
	
	@Basic
	@Temporal(TemporalType.TIME)
	@DateTimeFormat(style = "hh:mm")
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="hh:mm")
	private Date availableTime;
	
	@Basic
	@Temporal(TemporalType.DATE)
	private Date availableDate;
	
	public PatientAppointment() {
		
	}

	public int getSerialNumber() {
		return serialNumber;
	}

	public void setSerialNumber(int serialNumber) {
		this.serialNumber = serialNumber;
	}

	public int getPatientId() {
		return patientId;
	}

	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public int getPatientAge() {
		return patientAge;
	}

	public void setPatientAge(int patientAge) {
		this.patientAge = patientAge;
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

	public String getDoctorMobileNo() {
		return doctorMobileNo;
	}

	public void setDoctorMobileNo(String doctorMobileNo) {
		this.doctorMobileNo = doctorMobileNo;
	}

	public Date getAvailableTime() {
		return availableTime;
	}

	public void setAvailableTime(Date availableTime) {
		this.availableTime = availableTime;
	}

	public Date getAvailableDate() {
		return availableDate;
	}

	public void setAvailableDate(Date availableDate) {
		this.availableDate = availableDate;
	}

	public PatientAppointment(int serialNumber, int patientId, String patientName, int patientAge, int doctorId,
			String doctorName, String doctorDomain, String doctorExperience, String doctorMobileNo, Date availableTime,
			Date availableDate) {
		super();
		this.serialNumber = serialNumber;
		this.patientId = patientId;
		this.patientName = patientName;
		this.patientAge = patientAge;
		this.doctorId = doctorId;
		this.doctorName = doctorName;
		this.doctorDomain = doctorDomain;
		this.doctorExperience = doctorExperience;
		this.doctorMobileNo = doctorMobileNo;
		this.availableTime = availableTime;
		this.availableDate = availableDate;
	}

	@Override
	public String toString() {
		return "PatientAppointment [serialNumber=" + serialNumber + ", patientId=" + patientId + ", patientName="
				+ patientName + ", patientAge=" + patientAge + ", doctorId=" + doctorId + ", doctorName=" + doctorName
				+ ", doctorDomain=" + doctorDomain + ", doctorExperience=" + doctorExperience + ", doctorMobileNo="
				+ doctorMobileNo + ", availableTime=" + availableTime + ", availableDate=" + availableDate + "]";
	}
}


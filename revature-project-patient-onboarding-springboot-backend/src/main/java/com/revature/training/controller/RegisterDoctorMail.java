package com.revature.training.controller;



import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class RegisterDoctorMail {

	private static JavaMailSender javaMailSender;

	@Autowired
	public RegisterDoctorMail(JavaMailSender s) {
		this.javaMailSender = s;
	}

	public static void sendMail(String toReceiver, String subject, String message) {

		SimpleMailMessage msg = new SimpleMailMessage();
		
			msg.setTo(toReceiver);
			msg.setSubject(subject);
			msg.setText(message);

			javaMailSender.send(msg);
		

	}

}

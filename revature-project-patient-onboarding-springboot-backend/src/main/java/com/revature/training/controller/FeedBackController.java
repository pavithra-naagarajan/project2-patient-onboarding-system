/*
 * package com.revature.training.controller;
 * 
 * import org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.http.ResponseEntity; import
 * org.springframework.web.bind.annotation.CrossOrigin; import
 * org.springframework.web.bind.annotation.PostMapping; import
 * org.springframework.web.bind.annotation.RequestBody; import
 * org.springframework.web.bind.annotation.RequestMapping; import
 * org.springframework.web.bind.annotation.RestController;
 * 
 * import com.revature.training.model.FeedBack; import
 * com.revature.training.service.DoctorService; import
 * com.revature.training.service.PatientService;
 * 
 * 
 * @CrossOrigin(origins = "http://localhost:4200")
 * 
 * @RestController
 * 
 * @RequestMapping("feedback") public class FeedBackController {
 * 
 * @Autowired PatientService patientService;
 * 
 * //feedback msg
 * 
 * @PostMapping public ResponseEntity<String> addFeedback(@RequestBody FeedBack
 * feedBack) { ResponseEntity<String> responseEntity=null;
 * patientService.addFeedBack(feedBack); return responseEntity; }
 * 
 * }
 */

/*
 * package com.revature.training.model;
 * 
 * import javax.persistence.Id; import javax.persistence.Table;
 * 
 * import org.springframework.stereotype.Component;
 * 
 * @Component
 * 
 * @Table(name="feedbackmsg") public class FeedBack {
 * 
 * @Id private int feedbackId; private int patientId; private String
 * patientName; private String feedbackMsg;
 * 
 * public FeedBack() {
 * 
 * }
 * 
 * public FeedBack(int feedbackId, int patientId, String patientName, String
 * feedbackMsg) { super(); this.feedbackId = feedbackId; this.patientId =
 * patientId; this.patientName = patientName; this.feedbackMsg = feedbackMsg; }
 * 
 * public int getFeedbackId() { return feedbackId; }
 * 
 * public void setFeedbackId(int feedbackId) { this.feedbackId = feedbackId; }
 * 
 * public int getPatientId() { return patientId; }
 * 
 * public void setPatientId(int patientId) { this.patientId = patientId; }
 * 
 * public String getPatientName() { return patientName; }
 * 
 * public void setPatientName(String patientName) { this.patientName =
 * patientName; }
 * 
 * public String getFeedbackMsg() { return feedbackMsg; }
 * 
 * public void setFeedbackMsg(String feedbackMsg) { this.feedbackMsg =
 * feedbackMsg; }
 * 
 * @Override public String toString() { return "FeedBack [feedbackId=" +
 * feedbackId + ", patientId=" + patientId + ", patientName=" + patientName +
 * ", feedbackMsg=" + feedbackMsg + "]"; }
 * 
 * }
 */
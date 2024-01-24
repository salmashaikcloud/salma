package com.host.domain.hrms.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.io.Serializable;

@Entity
@Table(name = "EMPLOYEES")
public class Employees implements Serializable{
	
	private static final long serialVersionUID = 2216667802726323760L;

	@Id
	@Column(name = "EMPLOYEE_ID")
	private long employeeId;
	
	@Column(name = "FIRST_NAME")
	private String firstName;
	
	@Column(name = "LAST_NAME")
	private String  lastName;
	
	@Column(name = "EMAIL")
	private String email;

	@Column (name = "PHONE_NUMBER")
	private String phoneNumber;
	
	@Column (name = "HIRE_DATE")
	private Date hire_Date;
	
	@Column (name = "SALARY")
	private Double salary;
	
	@Column (name = "JOB_ID")
	private String job_Id;
	
	@Column(name = "COMMISSION_PCT")
	private Double commission_Pct;
	
	@Column (name = "DEPARTMENT_ID")
	private Integer departmentId;

	public long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(long employeeId) {
		this.employeeId = employeeId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public Date getHire_Date() {
		return hire_Date;
	}

	public void setHire_Date(Date hire_Date) {
		this.hire_Date = hire_Date;
	}

	public Double getSalary() {
		return salary;
	}

	public void setSalary(Double salary) {
		this.salary = salary;
	}

	public String getJob_Id() {
		return job_Id;
	}

	public void setJob_Id(String job_Id) {
		this.job_Id = job_Id;
	}

	public Double getCommission_Pct() {
		return commission_Pct;
	}

	public void setCommission_Pct(Double commission_Pct) {
		this.commission_Pct = commission_Pct;
	}

	public Integer getDepartmentId() {
		return departmentId;
	}

	public void setDepartmentId(Integer departmentId) {
		this.departmentId = departmentId;
	}
	
	}
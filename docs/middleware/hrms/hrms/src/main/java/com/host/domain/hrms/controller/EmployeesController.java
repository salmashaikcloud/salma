package com.host.domain.hrms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.host.domain.hrms.entity.Employees;
import com.host.domain.hrms.service.EmployeesService;

@RestController
@RequestMapping("/employees")
public class EmployeesController {
	@Autowired
	EmployeesService employeesService;

	@GetMapping("/")
	public List<Employees> getEmployees() {
		List<Employees> list = employeesService.getEmployees();
		return list;

	}
}
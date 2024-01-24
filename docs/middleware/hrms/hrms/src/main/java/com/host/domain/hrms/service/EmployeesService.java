
package com.host.domain.hrms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.host.domain.hrms.entity.Employees;
import com.host.domain.hrms.repository.EmployeesRepository;

@Service
public class EmployeesService {
	@Autowired
	EmployeesRepository employeesRepository;
	public List<Employees> getEmployees(){
		List<Employees> list =  employeesRepository.findAll();
		return list;
	}
}
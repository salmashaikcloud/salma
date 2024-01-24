package com.host.domain.hrms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.host.domain.hrms.entity.Employees;


public interface EmployeesRepository extends JpaRepository <Employees,Long> {

}

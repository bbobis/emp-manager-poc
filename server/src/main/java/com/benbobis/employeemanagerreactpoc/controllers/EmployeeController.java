package com.benbobis.employeemanagerreactpoc.controllers;

import com.benbobis.employeemanagerreactpoc.models.Employee;
import com.benbobis.employeemanagerreactpoc.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping("/api/employees")
@PreAuthorize("hasAuthority('Staff')")
public class EmployeeController {
    private EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @GetMapping
    public List<Employee> getEmployees(){
        return StreamSupport.stream(employeeRepository.findAll().spliterator(), false).collect(Collectors.toList());
    }
}

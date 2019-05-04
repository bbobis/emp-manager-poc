package com.benbobis.employeemanagerreactpoc.models;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

import java.time.LocalDate;
import java.util.List;

@Projection(name = "simple", types={ Employee.class })
public interface EmployeeProjection {
    String getFirstName();

    String getLastName();

    @Value("#{target.getFullName()}")
    String getFullName();

    LocalDate getBirthDate();

    LocalDate getHireDate();

    @Value("#{target.title.name}")
    String getTitle();

    List<Salary> getSalaries();

    List<Department> getDepartments();
}

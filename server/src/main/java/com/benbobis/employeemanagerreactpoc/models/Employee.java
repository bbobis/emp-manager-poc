package com.benbobis.employeemanagerreactpoc.models;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@RequiredArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Size(min = 1, max = 100, message = "First name must be between 1 to 100 characters")
    private final String firstName;

    @Size(min = 1, max = 100, message = "Last name must be between 1 to 100 characters")
    private final String lastName;

    private final LocalDate birthDate;

    private final LocalDate hireDate;

    @ManyToOne
    private final Title title;

    @OneToMany
    @JoinColumn(name = "employee_id")
    private List<Salary> salaries = new ArrayList<>();

    @ManyToMany
    @JoinTable(name = "employee_department",
            joinColumns = @JoinColumn(name = "employee_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "department_id", referencedColumnName = "id"))
    private List<Department> departments = new ArrayList<>();
}

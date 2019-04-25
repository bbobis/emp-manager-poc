package com.benbobis.employeemanagerreactpoc.repositories;

import com.benbobis.employeemanagerreactpoc.models.Salary;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Repository;

@Repository
@PreAuthorize("hasAuthority('Staff')")
public interface SalaryRepository extends PagingAndSortingRepository<Salary, Integer> {
}

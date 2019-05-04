package com.benbobis.employeemanagerreactpoc.repositories;

import com.benbobis.employeemanagerreactpoc.models.Employee;
import com.benbobis.employeemanagerreactpoc.models.EmployeeProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.security.access.prepost.PreAuthorize;

@RepositoryRestResource(excerptProjection = EmployeeProjection.class)
@PreAuthorize("hasAuthority('Staff')")
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Integer> {
    @RestResource(path = "byName", rel = "byName")
    Page<Employee> findByFirstNameContainsOrLastNameContains(@Param("search") String firstName, @Param("search") String lastName, Pageable p);
}

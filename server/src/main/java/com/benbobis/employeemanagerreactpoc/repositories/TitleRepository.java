package com.benbobis.employeemanagerreactpoc.repositories;

import com.benbobis.employeemanagerreactpoc.models.Title;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Repository;

@Repository
@PreAuthorize("hasAuthority('Staff')")
public interface TitleRepository extends PagingAndSortingRepository<Title, Integer> {
}

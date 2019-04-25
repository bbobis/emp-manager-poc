package com.benbobis.employeemanagerreactpoc.models;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Entity
@RequiredArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
public class Salary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private final BigDecimal amount;

    @Column(name = "from_date")
    private final LocalDate fromDate;

    @Column(name = "to_date")
    private final LocalDate toDate;
}

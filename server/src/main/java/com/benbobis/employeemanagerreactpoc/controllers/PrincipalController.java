package com.benbobis.employeemanagerreactpoc.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@PreAuthorize("hasRole('Admin')")
public class PrincipalController {
    @GetMapping("/api/whoami")
    public ResponseEntity<?> whoami(Principal user) {
        if (user == null) {
            return new ResponseEntity<>("", HttpStatus.UNAUTHORIZED);
        } else {
            return ResponseEntity.ok().body(user);
        }
    }
}

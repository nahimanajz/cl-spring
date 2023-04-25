package com.example.springinit;



import com.example.springinit.common.model.ErrorResponse;
import com.example.springinit.patient.model.Patient;
import com.example.springinit.patient.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
public class PatientController {
    @Autowired
    PatientService patientService;

    @PostMapping("/patient/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> signup(@RequestBody Patient patient){

         try{
             Patient createdPatient = patientService.signup(patient);
             URI uri = ServletUriComponentsBuilder
                     .fromCurrentRequest()
                     .path("/username").buildAndExpand(createdPatient.getUsername())
                     .toUri();

             return ResponseEntity.created(uri).body(createdPatient.toString());

         }catch (Exception ex){
             return ResponseEntity.ofNullable(ex.getMessage());
         }

    }

}
/**
 * TODO: FILTER PHARMACIST
 * Create user
 * Add sign in method
 *
 *
 * - FILTER PATIENT
 * - Filter physician
 * - HANDLE ADDING PRIVELEGES pharmacist and pyhsician
 */
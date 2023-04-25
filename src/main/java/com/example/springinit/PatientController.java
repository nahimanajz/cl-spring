package com.example.springinit;



import com.example.springinit.common.model.ErrorResponse;
import com.example.springinit.patient.model.Patient;
import com.example.springinit.patient.service.PatientService;
import com.example.springinit.pharmacist.model.Pharmacist;
import com.example.springinit.physician.model.Physician;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class PatientController {
    @Autowired
    PatientService patientService;

    @PostMapping("/patient/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> register(@RequestBody Patient patient){

         try{
             Patient createdPatient = patientService.register(patient);
             URI uri = ServletUriComponentsBuilder
                     .fromCurrentRequest()
                     .path("/username").buildAndExpand(createdPatient)
                     .toUri();

             return ResponseEntity.created(uri).body(createdPatient.toString());

         }catch (Exception ex){
             return ResponseEntity.ofNullable(ex.getMessage());
         }

    }
    @PostMapping("/patient/login")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> login(@RequestBody Patient patient){

       String loggedPatient =  patientService.login(patient);
        return ResponseEntity.created(null).body(loggedPatient);
    }
    @GetMapping("/physicians")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<Physician>> getPhysicians(){
        List<Physician> physicians = patientService.getPhysicians();

        return ResponseEntity.created(null).body(physicians);
    }
    @PostMapping("/authorize/physician")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Physician> authorizePhysician(@RequestBody Physician physician){
        Physician authedPhysician = patientService.authorizePhysician(physician);
        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/authedPhysician").buildAndExpand(authedPhysician)
                .toUri();
        return ResponseEntity.created(uri).body(authedPhysician);
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
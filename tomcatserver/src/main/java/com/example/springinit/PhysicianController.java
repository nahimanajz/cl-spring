package com.example.springinit;

import com.example.springinit.physician.model.Physician;
import com.example.springinit.physician.service.PhysicianService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
public class PhysicianController {
    @Autowired
    PhysicianService physicianService;
    @PostMapping("/physician/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> register(@RequestBody Physician physician){

        try{
            Physician createdPhysician = physicianService.register(physician);
            URI uri = ServletUriComponentsBuilder
                    .fromCurrentRequest()
                    .path("/email").buildAndExpand(createdPhysician)
                    .toUri();

            return ResponseEntity.created(uri).body(createdPhysician.toString());

        }catch (Exception ex){
            return ResponseEntity.ofNullable(ex.getMessage());
        }

    }
    @PostMapping("/physician/login")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> login(@RequestBody Physician physician){

        String loggedPhysician =  physicianService.login(physician);
        return ResponseEntity.created(null).body(loggedPhysician);
    }
    @PostMapping("/physician/consult")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> provideConsultation(@RequestBody Physician physician, @RequestParam String consultation){

        String consultingPhysician =  physicianService.provideConsultation(physician, consultation);
        return ResponseEntity.created(null).body(consultingPhysician);
    }
}

package com.example.springinit;

import com.example.springinit.patient.model.Patient;
import com.example.springinit.pharmacist.model.Pharmacist;
import com.example.springinit.pharmacist.service.PharmacistService;
import com.example.springinit.physician.model.Physician;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
public class PharmacistController {
    @Autowired
    PharmacistService pharmacistService;
    @PostMapping("/pharmacist/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> register(@RequestBody Pharmacist pharmacist){

        try{
            Pharmacist createdPharmacist = pharmacistService.register(pharmacist);
            URI uri = ServletUriComponentsBuilder
                    .fromCurrentRequest()
                    .path("/phoneNumber").buildAndExpand(createdPharmacist)
                    .toUri();

            return ResponseEntity.created(uri).body(createdPharmacist.toString());

        }catch (Exception ex){
            return ResponseEntity.ofNullable(ex.getMessage());
        }

    }
    @PostMapping("/pharmacist/login")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> login(@RequestBody Pharmacist pharmacist){

        String loggedPharmacist =  pharmacistService.login(pharmacist);
        return ResponseEntity.created(null).body(loggedPharmacist);
    }
/** TODO: add remaining endpoint */
@PostMapping("/pharmacist/medicines")
@ResponseStatus(HttpStatus.OK)
public ResponseEntity<String> provideMedicine(@RequestBody Pharmacist pharmacist, @RequestParam String medicineName){

    String medicines =  pharmacistService.provideMedicine(pharmacist, medicineName);
    return ResponseEntity.created(null).body(medicines);
}

}

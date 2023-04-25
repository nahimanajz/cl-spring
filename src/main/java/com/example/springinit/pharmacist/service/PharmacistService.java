package com.example.springinit.pharmacist.service;

import com.example.springinit.common.util.ValidatePassword;
import com.example.springinit.patient.model.Patient;
import com.example.springinit.pharmacist.model.Pharmacist;
import com.example.springinit.pharmacist.repository.PharmacistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PharmacistService {
    @Autowired
    PharmacistRepository pharmaRepo;

    public Pharmacist register(Pharmacist pharmacist) throws Exception{
        ValidatePassword.validate("pharmacist", pharmacist.getPassword());
        if(pharmaRepo.hasRecord(pharmacist.getPhoneNumber())){
            throw new Exception("Pharmacist phoneNumber already exist");
        }
      return pharmaRepo.register(pharmacist);
    }
    public String login(Pharmacist pharmacist){
        return pharmaRepo.login(pharmacist);
    }
    /** TODO: DO consultation of chosen patient  and return message **/
}

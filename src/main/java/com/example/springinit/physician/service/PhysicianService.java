package com.example.springinit.physician.service;

import com.example.springinit.common.util.ValidatePassword;

import com.example.springinit.pharmacist.repository.PhysicianRepository;
import com.example.springinit.physician.model.Physician;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhysicianService {
    @Autowired
    PhysicianRepository pharmacistRepo;

    public Physician register(Physician physician) throws Exception{
        ValidatePassword.validate("physician", physician.getPassword());
        if(pharmacistRepo.hasRecord(physician.getPhoneNumber())){
            throw new Exception("Physician phone number  already exist");
        }
        return pharmacistRepo.register(physician);
    }
    public String login(Physician physician){
        return pharmacistRepo.login(physician);
    }
}

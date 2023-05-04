package com.example.springinit.physician.service;

import com.example.springinit.common.util.ValidatePassword;

import com.example.springinit.pharmacist.repository.PhysicianRepository;
import com.example.springinit.physician.model.Physician;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhysicianService {
    @Autowired
    PhysicianRepository physicanRepo;

    public Physician register(Physician physician) throws Exception{
        ValidatePassword.validate("physician", physician.getPassword());
        if(physicanRepo.hasRecord(physician.getEmail())){
            throw new Exception("Physician email already exist");
        }
        return physicanRepo.register(physician);
    }
    public String login(Physician physician){
        return physicanRepo.login(physician);
    }
    public String provideConsultation(Physician physician, String consultation){
        return physicanRepo.provideConsultation(physician, consultation);
    }
}

package com.example.springinit.patient.service;

import com.example.springinit.common.util.ValidatePassword;
import com.example.springinit.patient.model.Patient;
import com.example.springinit.patient.repository.PatientReposistory;
import com.example.springinit.pharmacist.model.Pharmacist;
import com.example.springinit.physician.model.Physician;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pharmacy.model.User;
import pharmacy.repository.UserRepository;

import java.util.List;

@Service
public class PatientService {
    @Autowired
    PatientReposistory patientRepo;

    public Patient register(Patient patient) throws Exception{
        ValidatePassword.validate("patient", patient.getPassword());
        if(patientRepo.hasRecord(patient.getUsername())){
            throw new Exception("Username already exist");
        }
        return patientRepo.register(patient);
    }
    public String login(Patient patient){

        return patientRepo.login(patient);
    }
    public List<User> getPharamacists(){
        //TODO: Implement logic return pharmacist with userRole equal pharmacist
        return  null;
    }
    public List<Physician> getPhysicians(){

        return patientRepo.getPhysicians();
    }

    public Physician authorizePhysician(Physician physician) {

        return patientRepo.authorizePhysician(physician);
    }
    public List<Pharmacist> getPharmacists(){
        return patientRepo.getPharmacists();
    }

    public Pharmacist authorizePharmacist(Pharmacist pharmacist) {

        return patientRepo.authorizePharmacist(pharmacist);
    }
}

package com.example.springinit.patient.repository;

import com.example.springinit.common.db.CoreDB;
import com.example.springinit.common.interfaces.IUser;
import com.example.springinit.patient.model.Patient;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
@Repository
public class PatientReposistory implements IUser<Patient> {
    HashMap<String, Patient> patients = CoreDB.getInstance().getData();
    @Override
    public String login(Patient patient) {
        boolean isUserExist = patients.values().stream().allMatch(e ->
                e.getUsername().equalsIgnoreCase(patient.getUsername()) &&
                        e.getPassword().equalsIgnoreCase(patient.getPassword()));
        if(isUserExist){
            patient.setHasAccess(true);
            return "User authorized";
        }
        return "Invalid credentials";
    }

    @Override
    public Patient register(Patient patient) {
         patients.put(trimAndLower(patient.getUsername()), patient);
         return patient;
    }

    @Override
    public boolean hasRecord(String username) {
        return patients.containsKey(trimAndLower(username));
    }
    private String trimAndLower(String text){
        return text.trim().toLowerCase();

    }
}

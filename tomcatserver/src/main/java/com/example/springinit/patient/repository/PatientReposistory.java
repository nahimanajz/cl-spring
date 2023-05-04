package com.example.springinit.patient.repository;

import com.example.springinit.common.db.CoreDB;
import com.example.springinit.common.interfaces.IUser;
import com.example.springinit.common.util.Helper;
import com.example.springinit.patient.model.Patient;
import org.springframework.stereotype.Repository;
import com.example.springinit.pharmacist.model.Pharmacist;
import com.example.springinit.physician.model.Physician;

import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class PatientReposistory implements IUser<Patient> {
    HashMap<String, Patient> patients = CoreDB.getInstance().getData();
    HashMap<String, Pharmacist>  pharmacists = CoreDB.getInstance().getPharmacists();
    HashMap<String, Physician>  physicians = CoreDB.getInstance().getPhycians();

    @Override
    public Patient register(Patient patient) {
        patients.put(Helper.trimAndLower(patient.getUsername()), patient);
        return patient;
    }
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
    public boolean hasRecord(String username) {
        return patients.containsKey(Helper.trimAndLower(username));
    }


    public List<Pharmacist> getPharmacist() {
        return pharmacists.values().stream().toList();
    }
    public Pharmacist AuthorizePharmacist(Pharmacist pharmacist) {
        // TODO: set Has access to true where email;

        boolean hasPharmacist = pharmacists.values().stream().allMatch(e-> e.getPhoneNumber().equalsIgnoreCase(pharmacist.getPhoneNumber()));
        if(hasPharmacist) {
            pharmacist.setHasAccess(true);
        }
        return pharmacist;
    }
    public List<Physician> getPhysicians() {
        return physicians
                .values()
                .stream()
                .sorted((Comparator.comparing(Physician::getName)))
                .collect(Collectors.toList());
    }

    public Physician authorizePhysician(Physician physician) {

        Physician authedPhysician = physicians
                .values()
                .stream()
                .filter(p->p.getEmail()
               .equalsIgnoreCase(physician.getEmail()))
              .findFirst().orElse(null);

        if(authedPhysician !=null){
            authedPhysician.setHasAccess(true);
        }
        return authedPhysician;

    }
    public List<Pharmacist> getPharmacists() {
        return pharmacists
                .values()
                .stream()
                .sorted((Comparator.comparing(Pharmacist::getAge)))
                .collect(Collectors.toList());
    }

    public Pharmacist authorizePharmacist(Pharmacist pharmacist) {

        Pharmacist authedPharmacist = pharmacists
                .values()
                .stream()
                .filter(p->p.getPhoneNumber()
                        .equalsIgnoreCase(pharmacist.getPhoneNumber()))
                .findFirst().orElse(null);

        if(authedPharmacist !=null){
            authedPharmacist.setHasAccess(true);
        }
        return authedPharmacist;

    }
}

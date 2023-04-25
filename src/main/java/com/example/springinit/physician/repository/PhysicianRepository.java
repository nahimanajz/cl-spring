package com.example.springinit.pharmacist.repository;

import com.example.springinit.common.db.CoreDB;
import com.example.springinit.common.interfaces.IUser;
import com.example.springinit.common.util.Helper;
import com.example.springinit.pharmacist.model.Pharmacist;
import com.example.springinit.physician.model.Physician;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
@Repository
public class PhysicianRepository implements IUser<Physician> {
    HashMap<String, Physician>  physicians = CoreDB.getInstance().getPhycians();
    @Override
    public String login(Physician physician) {
        boolean isUserExist = physicians.values().stream().allMatch(e ->
                e.getEmail().equalsIgnoreCase(physician.getEmail()) &&
                        e.getPassword().equalsIgnoreCase(physician.getPassword()));
        if(isUserExist){
            physician.setHasAccess(true);
            return "Pharmacist authorized";
        }
        return "Invalid credentials";
    }

    @Override
    public Physician register(Physician physician) {
        physicians.put(Helper.trimAndLower(physician.getEmail()), physician);
        return physician;
    }

    @Override
    public boolean hasRecord(String email) {
        return physicians.containsKey(Helper.trimAndLower(email));
    }

    /**
     *   Physician with the access should be able to provide written  consultation,
     *      otherwise they should be given a 401 warning: “An Authorized”
     */

    public String provideConsultation(Physician physician){
        Physician physicianObj = physicians.values().stream()
                .filter(p -> p.getEmail().equalsIgnoreCase(physician.getEmail()))
                .findFirst()
                .orElse(null);
        if(physicianObj != null && physicianObj.getHasAccess()){
            return "Your health result shows lack of enough water please work on that ";
        }
        return "Un Authorized";

    }
}

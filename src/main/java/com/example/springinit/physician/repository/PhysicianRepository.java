package com.example.springinit.pharmacist.repository;

import com.example.springinit.common.db.CoreDB;
import com.example.springinit.common.interfaces.IUser;
import com.example.springinit.common.util.Helper;
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
}

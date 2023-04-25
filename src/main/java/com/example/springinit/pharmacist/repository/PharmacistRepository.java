package com.example.springinit.pharmacist.repository;

import com.example.springinit.common.db.CoreDB;
import com.example.springinit.common.interfaces.IUser;
import com.example.springinit.common.util.Helper;
import com.example.springinit.pharmacist.model.Pharmacist;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
@Repository
public class PharmacistRepository implements IUser<Pharmacist> {
    HashMap<String, Pharmacist> pharmacists = CoreDB.getInstance().getPharmacists();
    @Override
    public String login(Pharmacist pharmacist) {
        boolean isUserExist = pharmacists.values().stream().allMatch(e ->
                e.getPhoneNumber().equalsIgnoreCase(pharmacist.getPhoneNumber()) &&
                        e.getPassword().equalsIgnoreCase(pharmacist.getPassword()));
        if(isUserExist){
            pharmacist.setHasAccess(true);
            return "Pharmacist authorized";
        }
        return "Invalid credentials";
    }

    @Override
    public Pharmacist register(Pharmacist pharmacist) {
        pharmacists.put(Helper.trimAndLower(pharmacist.getPhoneNumber()), pharmacist);
        return pharmacist;
    }

    @Override
    public boolean hasRecord(String phoneNumber) {
        return pharmacists.containsKey(Helper.trimAndLower(phoneNumber));
    }
}

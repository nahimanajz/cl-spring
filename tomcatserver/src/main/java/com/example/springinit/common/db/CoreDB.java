package com.example.springinit.common.db;

import com.example.springinit.patient.model.Patient;
import com.example.springinit.pharmacist.model.Pharmacist;
import com.example.springinit.physician.model.Physician;

import java.util.LinkedHashMap;

public class CoreDB {
    private LinkedHashMap<String, Patient> patients = new LinkedHashMap<String, Patient>();
    private LinkedHashMap<String, Pharmacist> pharmacists = new LinkedHashMap<String, Pharmacist>();
    private LinkedHashMap<String, Physician> physicians = new LinkedHashMap<String, Physician>();
    private static final CoreDB instance = new CoreDB();
    private CoreDB() {

    }
    public static CoreDB getInstance() {
        return instance;
    }
    public LinkedHashMap<String, Patient> getData() {
        return patients;
    }
    public LinkedHashMap<String, Pharmacist> getPharmacists() {
        return pharmacists;
    }
    public LinkedHashMap<String, Physician> getPhycians() {
        return physicians;
    }


}

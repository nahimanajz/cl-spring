package com.example.springinit.common.db;

import com.example.springinit.patient.model.Patient;
import pharmacy.model.User;

import java.util.ArrayList;
import java.util.LinkedHashMap;

public class CoreDB {
    private LinkedHashMap<String, Patient> patients = new LinkedHashMap<String, Patient>();
    private static final CoreDB instance = new CoreDB();
    private CoreDB() {

    }
    public static CoreDB getInstance() {
        return instance;
    }
    public LinkedHashMap<String, Patient> getData() {
        return patients;
    }


}

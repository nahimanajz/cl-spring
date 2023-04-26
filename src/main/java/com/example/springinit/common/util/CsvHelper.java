package com.example.springinit.common.util;

import com.example.springinit.common.model.Medicine;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;


public class CsvHelper {
    public static List<Medicine> getMedecines() {
        String csvFile = "/Users/janvier/IdeaProjects/springInit/src/main/resources/assets/medicines.csv";
        String line = "";
        String csvSplitBy = ",";
        List<Medicine> medicines = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {

            while ((line = br.readLine()) != null) {
                String[] fields = line.split(csvSplitBy);
                String medName = fields[0];
                double medPrice = Double.parseDouble(fields[1]);
                String medExpiration = fields[2];
                Medicine medicine = new Medicine(medName, medPrice, medExpiration);
                medicines.add(medicine);
            }
            return medicines;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}

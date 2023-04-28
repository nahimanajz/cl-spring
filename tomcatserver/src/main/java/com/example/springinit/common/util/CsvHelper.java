package com.example.springinit.common.util;

import com.example.springinit.common.model.Medicine;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
public class CsvHelper {
    private static final String CSV_FILE_PATH = "/Users/janvier/IdeaProjects/springInit/tomcatserver/src/main/resources/assets/";

    public static List<Medicine> getMedecines() {
        String csvFile = "/Users/janvier/IdeaProjects/springInit/tomcatserver/src/main/resources/assets/medicines.csv";
        String line = "";
        String csvSplitBy = ",";
        List<Medicine> medicines = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {

            while ((line = br.readLine()) != null) {
                String[] fields = line.split(csvSplitBy);
                if (fields.length >= 3) {
                    String medName = fields[0];
                    String medPrice = fields[1];
                    String medExpiration = fields[2];
                    Medicine medicine = new Medicine(medName, medPrice, medExpiration);
                    medicines.add(medicine);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return medicines;

    }
    public static void createTranscription(Medicine medicine){
        try (FileWriter writer = new FileWriter(CSV_FILE_PATH+"prescription.csv", true)) { // Append mode
            writer.write(String.join(",", medicine.getMedName(), medicine.getMedPrice(), medicine.getMedExpiration()) + "\n");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}

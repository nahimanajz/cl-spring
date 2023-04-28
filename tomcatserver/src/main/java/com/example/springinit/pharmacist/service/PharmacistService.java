package com.example.springinit.pharmacist.service;

import com.example.springinit.common.model.Medicine;
import com.example.springinit.common.util.CsvHelper;
import com.example.springinit.common.util.ValidatePassword;
import com.example.springinit.pharmacist.model.Pharmacist;
import com.example.springinit.pharmacist.repository.PharmacistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PharmacistService {
    @Autowired
    PharmacistRepository pharmaRepo;

    public Pharmacist register(Pharmacist pharmacist) throws Exception{
        ValidatePassword.validate("pharmacist", pharmacist.getPassword());
        if(pharmaRepo.hasRecord(pharmacist.getPhoneNumber())){
            throw new Exception("Pharmacist phoneNumber already exist");
        }
      return pharmaRepo.register(pharmacist);
    }
    public String login(Pharmacist pharmacist){
        return pharmaRepo.login(pharmacist);
    }
    /** TODO: DO consultation of chosen patient  and return message **/
    public String provideMedicine(Pharmacist pharmacist, String medicineName){
        if(pharmaRepo.provideMedicine(pharmacist)){
            //TODO: Read medicine from csv and provide result
            List<Medicine> medicines = CsvHelper.getMedecines();

            for (Medicine medicine : medicines) {
                //System.out.println(medicine.getMedName());
                if(medicine.getMedName().equalsIgnoreCase(medicineName)){
                    CsvHelper.createTranscription(medicine);
                    return "Patient is consulted to have these medicine ==>" + medicineName + " <==Price==>  " + medicine.getMedPrice()+"<== Expiration Date ==> "+medicine.getMedExpiration();
                }
            }
        }
        return "Un authorized";
    }
}

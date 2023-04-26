package pharmacy.repository;

import com.example.springinit.patient.model.Patient;
import org.springframework.stereotype.Repository;
import pharmacy.model.User;

import java.util.ArrayList;
import java.util.List;

@Repository
public class UserRepository {

    public List<Patient> patients = new ArrayList<Patient>();
    public List<Patient> getAll(){
        return  patients;
    }
    public String Signup(){
        // TODO: add user to the list
        return  "Adding user works";
    }
}

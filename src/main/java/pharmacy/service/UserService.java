package pharmacy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pharmacy.model.User;
import pharmacy.repository.UserRepository;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepo;
    public List<User> getAll(){
        //return  userRepo.getAll();
        return  null;
    }
    public List<User> getPharamacists(){
        //TODO: Implement logic return pharmacist with userRole equal pharmacist
        return  null;
    }
    public List<User> getPhysician(){
        //TODO: Implement logic to return pharmacist with userRole equal
        return null;
    }

}

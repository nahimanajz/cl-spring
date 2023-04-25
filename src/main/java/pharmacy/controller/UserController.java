package pharmacy.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pharmacy.model.User;

@RestController
public class UserController {
    @GetMapping("/user")
   public String index(){
       return "User controller works";
    }
@PostMapping("/user/signup")
public String add(@RequestBody User user) {

    return null;
}
    @PostMapping("/signin")
    public String signin(@RequestBody User user){
        /*
        * check signin user info then log in appropriate 
        * */
        return null;
    }
}
/**
 * TODO: FILTER PHARMACIST
 * Create user
 * Add sign in method
 *
 *
 * - FILTER PATIENT
 * - Filter physician
 * - HANDLE ADDING PRIVELEGES pharmacist and pyhsician
 */
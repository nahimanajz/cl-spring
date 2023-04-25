package com.example.springinit.common.respoitory;

import org.springframework.stereotype.Repository;
import pharmacy.model.User;

import java.util.ArrayList;
import java.util.List;

@Repository
public class UserRepository {

    public List<User> users = new ArrayList<User>();
    public List<User> getAll(){
        return  users;
    }
    public String Signup(){
        // TODO: add user to the list
        return  "Adding user works";
    }
}

package com.example.springinit;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {
    @GetMapping("/welcome")
    public String welcome(){
        return "Welcome to the first ever string boot JZ app";
    }
    @PostMapping("/submit")
    public String checkPost(@RequestBody String input){
        return "Post method..."+input;
    }
}

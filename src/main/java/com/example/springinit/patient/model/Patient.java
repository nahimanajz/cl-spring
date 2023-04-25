package com.example.springinit.patient.model;

import com.example.springinit.common.model.UserModel;
import lombok.Data;

@Data
public class Patient extends UserModel {
    private String username;

}


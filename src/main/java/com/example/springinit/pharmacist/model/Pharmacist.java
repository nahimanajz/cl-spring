package com.example.springinit.pharmacist.model;

import com.example.springinit.common.model.UserModel;
import lombok.Data;

@Data
public class Pharmacist extends UserModel {
    private String email;
}

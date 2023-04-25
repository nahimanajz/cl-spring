package com.example.springinit.physician.model;

import com.example.springinit.common.model.UserModel;
import lombok.Data;

@Data
public class Physician extends UserModel {
    private String phoneNumber;
}

package com.example.springinit.common.model;

import lombok.Data;

@Data
public class UserModel {
    private String name;
    private int age;
    private String gender;
    private String password;
    private boolean hasAccess = false;

    public boolean getHasAccess() {
        return this.hasAccess;
    }
}

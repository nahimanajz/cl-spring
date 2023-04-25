package com.example.springinit.common.util;

public class ValidatePassword {
    public static void validate(String role, String password) throws Exception {
        role.toLowerCase();
        switch (role) {
            case "patient":
                if (password.length() < 4 || password.length() > 6) {
                    throw new Exception("Password length should be between 4-6 for Patient");
                }
                break;
            case "physician":
                if (password.length() < 7 || password.length() > 8) {
                    throw new Exception("Password length should be between 7-8 for Physician");
                }
                break;
            case "pharmacist":
                if (password.length() < 9 || password.length() > 10) {
                    throw new Exception("Password length should be between 9-10 for Pharmacist");
                }
                break;
            default:
                throw new Exception(role+"Invalid role specified");
        }

    }
}

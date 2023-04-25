package com.example.springinit.common.util;

import pharmacy.model.User;

public class Helper {
    public String loggedInUser = "";

    public boolean isEqual(String text, String comparator) {
        return this.toLower(text).equals(this.toLower(comparator));

    }

    public String toLower(String text) {
        return text.toLowerCase();
    }

    /**
     * @param loopedUser current user from looped userlist
     * @param clientUser user, request data from client currently postman, reactjs
     *                   app
     * @return { bool }
     */
    public boolean checkCredentials(User loopedUser, User clientUser) {
        String role = loopedUser.getUserRole();
        System.out.println("Checking credentials attent" + loopedUser.getEmail());
        return false;
    }
}

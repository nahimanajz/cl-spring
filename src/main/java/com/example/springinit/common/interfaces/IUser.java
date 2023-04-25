package com.example.springinit.common.interfaces;

import java.util.LinkedHashMap;

public interface IUser<T> {
    String login(T userModel);
    T signup(T userModel);
    boolean hasRecord(String keyword);
}

package com.example.springinit.common.interfaces;

import java.util.LinkedHashMap;

public interface IUser<T> {
    String login(T userModel);
    T register(T userModel);
    boolean hasRecord(String keyword);
}

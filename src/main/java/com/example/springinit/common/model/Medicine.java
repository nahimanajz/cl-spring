package com.example.springinit.common.model;

import lombok.Data;

@Data
public class Medicine {
    private String medName;
    private double medPrice;
    private String medExpiration;

    public Medicine(String medName, double medPrice, String medExpiration) {
        this.medName = medName;
        this.medPrice = medPrice;
        this.medExpiration = medExpiration;
    }

    @Override
    public String toString() {
        return "Medicine{" +
                "medName='" + medName + '\'' +
                ", medPrice=" + medPrice +
                ", medExpiration='" + medExpiration + '\'' +
                '}';
    }
}

package com.example.springinit.common.model;

import lombok.Data;

@Data
public class Medicine {
    private String medName;
    private String medPrice;
    private String medExpiration;

    public Medicine(String medName, String medPrice, String medExpiration) {
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

package com.frankegan.example;

/**
 * Created by @author frankegan on 9/28/18.
 */
public class CalculatorResponse {
    String result;

    public String getResult() {
        return result;
    }

    public void setResult(String r) {
        this.result = r;
    }

    public CalculatorResponse(String r) {
        this.result = r;
    }

    public CalculatorResponse() {
        result="NO-RESPONSE";
    }
}

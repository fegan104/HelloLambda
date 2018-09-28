package com.frankegan.example;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestHandler;

import java.util.Map;

public class Hello implements RequestHandler<Map<String, Integer>, String> {

    @Override
    public String handleRequest(Map<String, Integer> input, Context context) {
        LambdaLogger logger = context.getLogger();
        int num1 = input.get("num1");
        int num2 = input.get("num2");
        logger.log("Sum = " + num1 + num2);
        return String.valueOf(num1 + num2);
    }
}
package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    @GetMapping("/")
    public String hello() {
        
        String page = "<!DOCTYPE html><html><body>"
        + "<h1>Hello Java!</h1>"
        + "</body></html>";
    
        return String.format(page);
    }
}
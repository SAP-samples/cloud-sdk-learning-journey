package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    @GetMapping("/")
    public String hello() {

        String title = System.getenv("TITLE");
        String a1url = System.getenv("A1URL");
        String page = "<!DOCTYPE html><html><body>" 
        + "<h1>" + title + "</h1>" 
        + "<p>Navigate to <a href=\"" + a1url + "\">Application 1</a></p>" 
        + "</body></html>";

        return String.format(page);
    }
}
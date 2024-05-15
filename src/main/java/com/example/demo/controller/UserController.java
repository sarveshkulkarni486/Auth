package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:3000")
public class UserController {
	@Autowired
	private UserService userservice;
	
	@PostMapping("/register")
	public User addUser(@RequestBody User user) {
		return userservice.addUser(user);
		
	}
	
	@PostMapping("/login")
	public String login(@RequestBody User user) {
		boolean isValidUser = userservice.validateUser(user.getEmail(), user.getPassword());
		return isValidUser ? "Inavlid user" : "Login successful";
	}

}

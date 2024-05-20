package com.example.demo.controller;

import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSourceResolvable;
import org.springframework.hateoas.mediatype.MessageResolver;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.LoginRequest;
import com.example.demo.model.User;
import com.example.demo.service.AuthenticationService;
import com.example.demo.service.UserService;

import ch.qos.logback.classic.Logger;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:3000")
public class UserController {
	@Autowired
	private UserService userservice;
	
	@Autowired 
	private AuthenticationService authservice;
	
	private static final org.slf4j.Logger logger = LoggerFactory.getLogger(UserController.class);
	
	
	@PostMapping("/register")
	public ResponseEntity<?> saveUser(@RequestBody User user) {
		try {
			User savedUser = userservice.saveUser(user);
			return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
		}catch(Exception e) {
			logger.error("Error occured while saving user: ", e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
	}
	
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:3000")
		public String login(@RequestBody LoginRequest loginRequest) {
			boolean isAuthenticated = authservice.authenticateUser(loginRequest);
			if(isAuthenticated) {
				return "Login successfull";
			}
			else {
				return "Invalid credentials";
			}
		}
}

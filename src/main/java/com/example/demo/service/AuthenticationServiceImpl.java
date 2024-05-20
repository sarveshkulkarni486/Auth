package com.example.demo.service;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.controller.UserController;
import com.example.demo.model.LoginRequest;
import com.example.demo.model.LoginResponse;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import ch.qos.logback.classic.Logger;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

	@Autowired
	private UserRepository userRepository;
	private static final org.slf4j.Logger logger = LoggerFactory.getLogger(AuthenticationService.class);
	
	@Override
	public boolean authenticateUser(LoginRequest loginRequest) {
		String email = loginRequest.getEmail();
		String password = loginRequest.getPassword();
        User user = userRepository.findByEmail(email);
        logger.info("User found: {}", user != null);
		if(user != null && user.getPassword().equals(loginRequest.getPassword())) {
			logger.info("User authenticated successfully: {}", email +""+ password);
			return true;
		}
		else {
			logger.warn("Authentication failed for user: {}", email +""+password);
			return false;
		}
	}
	
}

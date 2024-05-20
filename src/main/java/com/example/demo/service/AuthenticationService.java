package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.model.LoginRequest;
import com.example.demo.model.LoginResponse;

@Service
public interface AuthenticationService {
	boolean authenticateUser(LoginRequest loginrequest);

}

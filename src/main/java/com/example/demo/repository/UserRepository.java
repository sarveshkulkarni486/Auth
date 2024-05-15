package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.User;
import java.util.List;



public interface UserRepository extends MongoRepository<User, String> {
	User findByEmail(String email);

}

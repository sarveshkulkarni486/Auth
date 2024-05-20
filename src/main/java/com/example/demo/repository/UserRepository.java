package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.model.User;
import java.util.List;



public interface UserRepository extends MongoRepository<User, String> {
	@Query("{ 'email' : { $regex: ?0, $options: 'i' } }")
	User findByEmail(String email);
	public List<User> findByFirstname(String firstname);

}

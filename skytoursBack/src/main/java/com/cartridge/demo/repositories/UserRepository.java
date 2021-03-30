package com.cartridge.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cartridge.demo.entities.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	public User findByUsername(String username);
	@Query("select u from User u WHERE u.role='AGENT'")
	public List <User> getus();

}

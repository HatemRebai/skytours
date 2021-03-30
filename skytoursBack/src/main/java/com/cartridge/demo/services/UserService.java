package com.cartridge.demo.services;

import java.util.List;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.cartridge.demo.entities.User;

public interface UserService {
	public void addUser (User user );
	public User getUserById(int id);
	public List<User> getall();
	public User deleteUser(User user);
	User loadUserByUsername(String username) throws UsernameNotFoundException;
}

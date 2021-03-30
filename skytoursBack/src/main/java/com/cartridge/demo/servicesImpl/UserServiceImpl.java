package com.cartridge.demo.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cartridge.demo.entities.User;
import com.cartridge.demo.repositories.UserRepository;
import com.cartridge.demo.services.UserService;

@Service("UserService")
public class UserServiceImpl  implements  UserService,UserDetailsService {

	@Autowired
	UserRepository  userRepository;
	
	
	@Override
	public void addUser(User user) {
		userRepository.save(user);
		
	}

	@Override
	public User getUserById(int id) {
		
		return userRepository.getOne(id);
	}

	@Override
	public List<User> getall() {
	
		return userRepository.findAll() ;
	}

	@Override
	public User deleteUser(User user) {
		userRepository.delete(user);
		return user;
		
	}
	
	@Bean
	private PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	public User loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		return userRepository.findByUsername(username);


	}
}

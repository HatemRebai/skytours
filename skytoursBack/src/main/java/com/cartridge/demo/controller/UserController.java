package com.cartridge.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cartridge.demo.config.GestionToken;
import com.cartridge.demo.config.JwtRequest;
import com.cartridge.demo.config.JwtResponse;
import com.cartridge.demo.entities.Role;
import com.cartridge.demo.entities.User;
import com.cartridge.demo.repositories.UserRepository;
import com.cartridge.demo.services.UserService;



@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class UserController {

	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
    private GestionToken token_gen;

	@Autowired
	UserService userService;
	
	@PersistenceContext
	EntityManager em;
	
    @Autowired
    private PasswordEncoder passwordEncoder;
    
	@Autowired
    private AuthenticationManager authenticationManager;
	
	
    @PostMapping(value = "/login")
    public JwtResponse signIn(@RequestBody JwtRequest request) {

        Authentication authentication = authenticationManager.
        		authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())  );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        User user = userService.loadUserByUsername(request.getUsername());
        String token = token_gen.generateToken(user);
        JwtResponse response= new JwtResponse(token);
        
        return response;
    }
  
    @GetMapping("/getUser")
	   // @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	    public Optional<User> getuser(@RequestHeader("Authorization") String authJWT){
	    	System.out.println(authJWT);
	    	int id = token_gen.getUserIdFromToken(authJWT);
	    	return userRepository.findById(id);
	    }
    
    @PostMapping("/addUser")
	public User saveUser(@RequestBody User user) {
	
		user.setPassword(passwordEncoder.encode(user.getPassword()));
    	user.setRole(Role.AGENT);
		userService.addUser(user);
		return user;
	}
	
	@GetMapping("/users")
	public List<User> getAll(){
		
		return userService.getall();
	}
	
/*	@GetMapping("/userById/{id}")
	public User getUser(@PathVariable ("id") Integer id) {
		User u = userService.getUserById(id);
		return u;
		
	} */
	
	@GetMapping("/userByUsername/{username}")
	public User getUser(@PathVariable ("username") String username) {
		TypedQuery<User> query = (TypedQuery<User>) em.createQuery("SELECT u FROM User u WHERE u.username = :username " ,User.class);
		User u = query.setParameter("username", username).getSingleResult();
		
		return u;
		
	}
	
    @GetMapping("/getuser/{id}")
    public Optional<User> getuser(@PathVariable("id")int id){
    	return userRepository.findById(id);
    }
    
    @PutMapping("/updateUser/{id}") 
	public ResponseEntity<User> updateUser(@PathVariable("id") int id, @RequestBody User User) {
    	
	   System.out.println("Update type ID = " + id + "...");
	   Optional<User> UsData = userRepository.findById(id);
	
	   if (UsData.isPresent()) {
	    	User user = UsData.get();
	    	user.setNom(User.getNom());
	    	
	    	user.setUsername(User.getUsername());
	    	user.setPassword(passwordEncoder.encode(User.getPassword()));
	    	
	    	return new ResponseEntity<>(userRepository.save(user), HttpStatus.OK);
	   } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	   } 
	 }
	
	@DeleteMapping("/deleteUser/{id}")
	public User deleteOne(@PathVariable ("id") Integer id) {
		
		User u = userService.getUserById(id);
		return userService.deleteUser(u);
	}
	

    public void setToken_gen(GestionToken token_gen) {
		this.token_gen = token_gen;
	}
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	public void setUs(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	public void setPasswordEncoder(PasswordEncoder passwordEncoder) {
		this.passwordEncoder = passwordEncoder;
	}

	public void setAuthenticationManager(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}
	/*
	@PutMapping("/updateUser/{id")
	public @ResponseBody User updateOne(@RequestBody User user, @PathVariable ("id") Integer id) {
		
		User u = userService.getUserById(id);
		u.setNom(user.getNom());
		u.setPrenom(user.getPrenom());
		u.setUsername(user.getUsername());
		u.setEmail(user.getEmail());
		u.setPassword(user.getPassword());
		u.setRole(user.getRole());
		userService.addUser(u);
		return u ;
	}*/
	
	}

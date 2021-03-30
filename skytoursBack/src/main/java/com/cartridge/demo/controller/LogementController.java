package com.cartridge.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.cartridge.demo.entities.Logement;
import com.cartridge.demo.repositories.LogementRepository;
import com.cartridge.demo.services.LogementService;

@CrossOrigin("*")
@RestController
@RequestMapping("/logement")
public class LogementController {
	
	@Autowired
	LogementService logementService;
	@Autowired
	LogementRepository logementRepository;
	
	
	@PostMapping("/addLogement")
	public void saveLogement(@RequestBody Logement logement) {
		
		logementService.addLogement(logement);
	}
	
	@GetMapping("/logements")
	public List<Logement> getall(){
		
		return logementService.getAll();	
	}
	
	@GetMapping("/logement/{id}")
	public Logement getOne(@PathVariable ("id") Integer id) {
	
		return logementService.getLogementById(id);
	}
	@GetMapping("/logementbyDesignation/{designation}")
	public List<Logement> getListBydesignation(@PathVariable ("designation") String designation ){
		
		List<Logement> l = logementService.listLogByDesignation(designation);
		return l;		
	}
	
	@DeleteMapping("/deleteL/{id}")
	public Logement removeOne(@PathVariable("id" )Integer id) {
		
		Logement l = logementService.getLogementById(id);
		logementService.deleteLogement(l);	
		return  l ;
	}
	
	@PutMapping("/updateL/{id}")
	public @ResponseBody Logement updateOne(@RequestBody Logement logement , @PathVariable("id") Integer id) {
		
		Logement l = logementService.getLogementById(id);
		l.setDesignation(logement.getDesignation());	
		return logementService.addLogement(l);
	}

}

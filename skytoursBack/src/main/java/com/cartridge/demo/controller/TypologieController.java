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


import com.cartridge.demo.entities.Typologie;
import com.cartridge.demo.repositories.TypologieRepository;
import com.cartridge.demo.services.TypologieService;

@CrossOrigin("*")
@RestController
@RequestMapping("/typologie")
public class TypologieController {

	@Autowired
	TypologieService typologieService;

	@Autowired 
	TypologieRepository typologieRepository;
	
	@PostMapping("/addTypologie")
	public void saveClient(@RequestBody Typologie typologie) {
	
		typologieService.addTypologie(typologie);
	}
	
	@GetMapping("/listTypologie")
	public List<Typologie> getAll() {
		
		return typologieService.getAll();
	}
	
	@GetMapping("/tyologie/{id}")
	public Typologie getOne(@PathVariable ("id") Integer id) {
	
		Typologie t = typologieService.getTypById(id);
		return t ;
	}
	
	@DeleteMapping("/deleteT/{id}")
	public Typologie deleteOne(@PathVariable ("id") Integer id){
		
		Typologie t = typologieService.getTypById(id);
		System.out.printf("Le typologie",+ id +"est sypprime avec succes");
		
		return typologieService.deleteTypologie(t);	
	}
	
	@PutMapping("/updateT/{id}")
	public @ResponseBody Typologie updateOne(@RequestBody Typologie typologie , @PathVariable("id") Integer id) {
		Typologie t = typologieService.getTypById(id);
		t.setDesignation(typologie.getDesignation());
		t.setNbrelit(typologie.getNbrelit());
		t.setTypelit(typologie.getTypelit());
		return typologieService.addTypologie(t);
	}
}

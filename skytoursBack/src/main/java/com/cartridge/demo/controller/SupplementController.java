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


import com.cartridge.demo.entities.Supplement;
import com.cartridge.demo.repositories.SupplementRepository;
import com.cartridge.demo.services.SupplementService;

@CrossOrigin("*")
@RestController
@RequestMapping("/supplement")
public class SupplementController {
	
	@Autowired
	SupplementService supplementService;
	@Autowired
	SupplementRepository supplementRepository;
	
	
	@PostMapping("/addSupplement")
	public Supplement saveClient(@RequestBody Supplement supplement) {
		supplementService.addSupplement(supplement);;
		return supplement;
	}
	@GetMapping("/listSupplement")
	public List<Supplement> getAll(){
		
		return supplementService.getAll() ;
	}
	@GetMapping("/supplemet/{id}")
	public Supplement getOne(@PathVariable ("id") Integer id) {
		Supplement s = supplementService.getSupById(id);
		return s;
	}
	@DeleteMapping("/deleteS/{id}")
	public String removeOne(@PathVariable ("id") Integer id ) {
		Supplement s = supplementService.getSupById(id);
		supplementService.deleteSupplement(s);
		return "supplement supprimer avec succes";
	} 
	@PutMapping("/updateS/{id}")
	public @ResponseBody Supplement updateOne(@RequestBody Supplement supplement , @PathVariable ("id") Integer id) {
		
		Supplement s = supplementService.getSupById(id);
		s.setDesignation(supplement.getDesignation());
		return s;
	}
}

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

import com.cartridge.demo.entities.Agence;
import com.cartridge.demo.repositories.AgenceRepository;
import com.cartridge.demo.services.AgenceService;




@CrossOrigin("*")
@RestController
@RequestMapping("/agence")
public class AgenceController {

	@Autowired
	AgenceService agenceService;
	
	@Autowired
	AgenceRepository agenceRepository;
	
	
	@PostMapping("/addAgence")
	public Agence saveAgence(@RequestBody Agence agence) {
		
		return agenceService.addAgence(agence);	
	}
	
	@GetMapping("/getAgence/{id}")
	public Agence getOne(@PathVariable("id") Integer id){
		
		Agence a=agenceService.getAgence(id);
		return a;
	}
	
	@GetMapping("/getAll")
	public List<Agence> getAll() {
	return	agenceService.getall();
	}
	
	@DeleteMapping("/deleteAgence/{id}")
	public String deleteAgence(@PathVariable("id")Integer id , String res) {
		
		Agence a = agenceService.getAgence(id);
		res = a.getRaison_sociale();
		agenceService.deleteAgence(a);	
		return (res +" et supprime avec succes");
	} 
	
	@PutMapping("/updateAgence/{id}")
	public @ResponseBody Agence updateOne(@RequestBody Agence agence, @PathVariable("id") Integer id) {
		
		Agence a = agenceService.getAgence(id);
		a.setAdresse(agence.getAdresse());
		a.setEmail(agence.getEmail());
		a.setMatricule_fiscale(agence.getMatricule_fiscale());
		a.setRaison_sociale(agence.getRaison_sociale());
		a.setResponsable(agence.getResponsable());
		a.setTel_responsable(agence.getTel_responsable());
		a.setTel(agence.getTel());
		return agenceService.addAgence(a);
	}
}

package com.cartridge.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cartridge.demo.entities.FactureClient;
import com.cartridge.demo.repositories.FactureClientRepository;
import com.cartridge.demo.services.FactureClientService;

@CrossOrigin("*")
@RestController
@RequestMapping("/factureclient")
public class FactureClientController {
	
	@Autowired
	FactureClientService factureClientService;
	@Autowired
	FactureClientRepository factureClientRepository;

	
	// Ajouter une nouvelle Facture Client
	@PostMapping("/addFactureClient")
	public FactureClient saveHotel(@RequestBody FactureClient newfacture) {
		
		return factureClientService.addFacture(newfacture);
		// "hotel "+ newHotel.getRaison_sociale() +" est ajoute avec succes";
	}
	
	// Afficher toutes les Factures Clients
	@GetMapping("/allFactures")
	public List<FactureClient> getAll(){
		
		return factureClientService.getall();
	}
	
	//Afficher uneFacture Client a travers"id"
	@GetMapping("/oneFactureClient/{id}")
	  public FactureClient one(@PathVariable Integer id) {
		
		FactureClient f = factureClientService.getFacureClientById(id);
	    return f;
	  }
}

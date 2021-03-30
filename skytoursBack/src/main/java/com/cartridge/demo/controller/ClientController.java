package com.cartridge.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.cartridge.demo.entities.Client;
import com.cartridge.demo.repositories.ClientRepository;
import com.cartridge.demo.services.ClientService;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/client")
public class ClientController {
	
	@Autowired
	ClientService clientservice;
	@Autowired
	ClientRepository clientrepository;
	
	//Ajouter un nouveau client
	@PostMapping("/addClient")
	public Client saveClient(@RequestBody Client client) {
		return clientservice.addClient(client);
	}
	
	//Afficher toutes les clients
	@GetMapping("/getAllClt")
	public List<Client> getAll() {
	return	clientservice.getall();
	}
	
	//Afficher par nom du Client
	@GetMapping("/getByName/{name}")
	public Client getOnebyname(@PathVariable("name") String name ) {
		
		Client c = clientservice.getByName(name);
		return c;
	}
	//Afficher par id du Client
	@GetMapping("/getById/{id}")
	public Client getOnebyname(@PathVariable("id") Integer id ) {
		
		Client c = clientservice.getclientById(id);
		return c;
	}
	
	//Afficher par cin/passeprt du Client
	@GetMapping("/getbyidentif/{identif}")
	public Client getOnebyIdentif(@PathVariable("identif") Integer identif ) {
		
		Client c = clientservice.getByIdentif(identif);
		return c;
	}
	
	//Affivher liste de clients par nationalie
	@GetMapping("/getbynationalite/{nationalite}")
	public List<Client> getOnebyIdentif(@PathVariable("nationalite") String nationalite ) {
		
		List<Client> c = clientservice.getBynationnalite(nationalite);
		return c;
	}
	
	//Supprimer un client a travers son "id" 
	@DeleteMapping("/deleteClt/{id}")
	public void deleteClient(@PathVariable("id")Integer id) {
		Client c= clientservice.getclientById(id);
		clientservice.deleteClient(c);
	}
	
	//Modifier un Client
	@PutMapping("/updateClient/{id}")
	public @ResponseBody Client updateOne(@RequestBody Client client, @PathVariable ("id") Integer id) {
		
		Client c = clientservice.getclientById(id);
		c.setCin_passeport(client.getCin_passeport());
		c.setEmail(client.getEmail());
		c.setNationalite(client.getNationalite());
		c.setNom_prenom(client.getNom_prenom());
		c.setTel(client.getTel());
		return clientservice.addClient(c);
	}
	@RequestMapping(value="/update/{id}",method=RequestMethod.POST)
	public void updateUser(@PathVariable("id") int id ,@RequestBody Client client) {
		Client c = clientservice.getclientById(id);
		
		c.setCin_passeport(client.getCin_passeport());
		c.setEmail(client.getEmail());
		c.setNationalite(client.getNationalite());
		c.setNom_prenom(client.getNom_prenom());
		c.setTel(client.getTel());
	     clientservice.addClient(c);
	}
	
	

}

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


import com.cartridge.demo.entities.Hotel;
import com.cartridge.demo.repositories.HotelRepository;
import com.cartridge.demo.services.HotelService;

@CrossOrigin("*")
@RestController
@RequestMapping("/hotel")
public class HotelController {
	
	@Autowired
	HotelService hotelservice;
	
	@Autowired
	HotelRepository hotelRepository;
	
	//Ajouter un nouveau Hotel
	@PostMapping("/addHotel")
	public Hotel saveHotel(@RequestBody Hotel newHotel) {
		
		return hotelservice.addHotel(newHotel);
		// "hotel "+ newHotel.getRaison_sociale() +" est ajoute avec succes";
	}
	
	// Afficher toutes les hotels
	@GetMapping("/hotels")
	public List<Hotel> getAll(){
		
		return hotelservice.getall();
	}
	
	//Afficher un hotel a travers son "id"
	@GetMapping("/hotel/{id}")
	  public Hotel one(@PathVariable Integer id) {
		
		Hotel h = hotelservice.getHotelById(id);
	    return h;
	  }
	
	//Afficher un hotel par on Raison_Sociale
	@GetMapping("/hotelbyByName/{name}")
	public Hotel getOneByName(@PathVariable ("name") String name) {
		
		Hotel h = hotelservice.getHotelByName(name);
		return h;
	}
	
	@GetMapping("/hotelByspecificite/{specificite}")
	public List<Hotel> getByspecificite(@PathVariable("specificite") int specificite){
		
		List<Hotel> h = hotelservice.getBySpecificite(specificite);
		return h;
	}
	
	//supprimer un hotel a travers son id 
	@DeleteMapping("/deletHotel/{id}")
	public void deleteHotel(@PathVariable("id") Integer id) {
		
		Hotel l = hotelservice.getHotelById(id);
		hotelservice.deleteHotel(l);
	}
	//modifer un hotel 
	@PutMapping("/updateHotel/{id}")
	public @ResponseBody Hotel updateHotel(@RequestBody Hotel hotel, @PathVariable("id") Integer id) {
		
		Hotel h = hotelservice.getHotelById(id);
		h.setRaison_sociale(hotel.getRaison_sociale());
		h.setAdresse(hotel.getAdresse());
		h.setEmailc(hotel.getEmailc());
		h.setEmaildb(hotel.getEmaildb());
		h.setEmailrs(hotel.getEmailrs());
		h.setMatricule_fiscale(hotel.getMatricule_fiscale());
		h.setSpecificite(hotel.getSpecificite());
		h.setTel(hotel.getTel());
		
		return  hotelservice.addHotel(h);
	
	}



}

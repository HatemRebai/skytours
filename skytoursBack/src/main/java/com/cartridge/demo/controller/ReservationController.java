package com.cartridge.demo.controller;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cartridge.demo.entities.DetailHotel;
import com.cartridge.demo.entities.Logement;
import com.cartridge.demo.entities.Reservation;
import com.cartridge.demo.repositories.ReservationRepository;
import com.cartridge.demo.services.ReservationService;

@CrossOrigin("*")
@RestController
@RequestMapping("/reservation")
public class ReservationController {
	
	@PersistenceContext
	EntityManager em;
	
	@Autowired
	ReservationRepository reservationRepository;
	
	@Autowired
	ReservationService reservationService;
	
	@PostMapping("/addReservation")
	public Reservation saveReservation(@RequestBody Reservation reservation) {
		
		return reservationService.addReservation(reservation);
	}
	
	@GetMapping("/listReservation")
	public List<Reservation> getAll(){
		
		return reservationService.getAll();
	}
	
	@GetMapping("/reservation/{id}")
	public Reservation getOne(@PathVariable("id") Integer id) {
		
		return reservationService.getReservById(id);  
	}
	
/*	@GetMapping("listNotValidate")
	public List<Reservation> getNotvalidate(){
		
		return reservationService.getNotValidate(false);
	}
	
	@GetMapping("listValidate")
	public List<Reservation> getvalidate(){
		
		return reservationService.getValidate(true);
	} */
	
	@Transactional
	@GetMapping("/getlastRes")
	public Reservation getLastRese() {

		return reservationRepository.findTopByOrderByIdDesc();
	}

	
	
	@DeleteMapping("/deleteR/{id}")
	public String removeOne(@PathVariable("id") Integer id) {
	
		Reservation r = reservationService.getReservById(id);
		reservationService.deleteReservation(r);
		return "reservation supprime";
	}
	
	@PutMapping("/updateR/{id}")
	public @ResponseBody Reservation updateOne(@RequestBody Reservation reservation , @PathVariable ("id") Integer id) {
		
		Reservation r = reservationService.getReservById(id);
		r.setDate_reservation(reservation.getDate_reservation());
		r.setClient(reservation.getClient());
		r.setHotel(reservation.getHotel());
		r.setTypologie(reservation.getTypologie());
		r.setLogement(reservation.getLogement());
		r.setPrixlogement(reservation.getPrixlogement());
		r.setSupplement(reservation.getSupplement());
		r.setPrixsupplement(reservation.getPrixsupplement());
		r.setDate_arrivee(reservation.getDate_arrivee());
		r.setDate_depart(reservation.getDate_depart());
		r.setHotel(reservation.getHotel());
		return reservationService.addReservation(r);
	}
	
/*	@PutMapping("/validateResrvation/{id}")
	public Reservation validateRes(@PathVariable ("id") Integer id) {
		
		Reservation r = reservationService.getReservById(id);
		r.setValid(!r.isValid());
		return r;
	} */
	
}

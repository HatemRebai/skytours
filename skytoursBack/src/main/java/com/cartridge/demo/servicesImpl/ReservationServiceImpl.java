package com.cartridge.demo.servicesImpl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cartridge.demo.entities.Reservation;
import com.cartridge.demo.repositories.ReservationRepository;
import com.cartridge.demo.services.ReservationService;

@Service("ReservationService")
public class ReservationServiceImpl implements ReservationService {
	
	
	
	@Autowired
	ReservationRepository reservationRepository;
	
	@PersistenceContext
	EntityManager em;

	
	@Override
	public Reservation addReservation(Reservation reservation) {
		return reservationRepository.save(reservation);
		
	}

	@Override
	public Reservation getReservById(int id) {
		
		return reservationRepository.getOne(id);
	}

	@Override
	public List<Reservation> getAll() {
		
		return reservationRepository.findAll();
	}

	@Override
	public void deleteReservation(Reservation reservation) {
		reservationRepository.delete(reservation);
		
	}
/*
	@Override
	public List<Reservation> getNotValidate(Boolean notValid) {
		
		TypedQuery<Reservation> query  = em.createQuery("SELECT r FROM Reservation r WHERE r.isValid = :notValid", Reservation.class);
		query.setParameter("notValid", notValid);
		return query.getResultList();
	}

	@Override
	public List<Reservation> getValidate(Boolean valid) {
		
		TypedQuery<Reservation> query  = em.createQuery("SELECT r FROM Reservation r WHERE r.isValid = :valid", Reservation.class);
		query.setParameter("valid", valid);
		return query.getResultList();
	}
*/


	

}

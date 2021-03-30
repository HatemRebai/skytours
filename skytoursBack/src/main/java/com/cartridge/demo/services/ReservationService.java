package com.cartridge.demo.services;

import java.util.List;


import com.cartridge.demo.entities.Reservation;

public interface ReservationService {
	
	public Reservation addReservation( Reservation reservation);
	public Reservation getReservById (int id);
	public List<Reservation> getAll();
/*	public List<Reservation> getNotValidate(Boolean notvalid);
	public List<Reservation> getValidate(Boolean valid); */
	public void deleteReservation (Reservation reservation);
	

}

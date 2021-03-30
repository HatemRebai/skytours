package com.cartridge.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cartridge.demo.entities.Reservation;

@Repository("reservationrepository")
public interface ReservationRepository  extends JpaRepository<Reservation, Integer>{
	
	public Reservation findTopByOrderByIdDesc();
}

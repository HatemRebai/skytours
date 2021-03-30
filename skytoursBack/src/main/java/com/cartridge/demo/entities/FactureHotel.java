package com.cartridge.demo.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FactureHotel implements Serializable{
	

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private Hotel id_hotel;
	private Reservation id_reservation;

	public FactureHotel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Hotel getId_hotel() {
		return id_hotel;
	}
	public void setId_hotel(Hotel id_hotel) {
		this.id_hotel = id_hotel;
	}
	public Reservation getId_reservation() {
		return id_reservation;
	}
	public void setId_reservation(Reservation id_reservation) {
		this.id_reservation = id_reservation;
	}

	public FactureHotel(int id, Hotel id_hotel, Reservation id_reservation) {
		super();
		this.id = id;
		this.id_hotel = id_hotel;
		this.id_reservation = id_reservation;
	}
	@Override
	public String toString() {
		return "FactureHotel [id=" + id + ", id_hotel=" + id_hotel + ", id_reservation=" + id_reservation + "]";
	}

	}
	



package com.cartridge.demo.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "voucher",
uniqueConstraints=
@UniqueConstraint(columnNames={"id", "reservation_id"}))
public class Voucher implements Serializable{


	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	private int id ; 
	
	@OneToOne(fetch = FetchType.EAGER)
	private Reservation reservation;
	private String date_voucher; 

	public Voucher() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}



	public Reservation getReservation() {
		return reservation;
	}

	public void setReservation(Reservation reservation) {
		this.reservation = reservation;
	}

	public String getDate_voucher() {
		return date_voucher;
	}

	public void setDate_voucher(String date_voucher) {
		this.date_voucher = date_voucher;
	}

	public Voucher(int id, Reservation reservation, String date_voucher) {
		super();
		this.id = id;
		this.reservation = reservation;
		this.date_voucher = date_voucher;
	}

	@Override
	public String toString() {
		return "Voucher [id=" + id + ", reservation=" + reservation + ", date_voucher=" + date_voucher + "]";
	}



}

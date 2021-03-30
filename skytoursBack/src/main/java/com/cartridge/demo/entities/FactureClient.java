package com.cartridge.demo.entities;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;




@Entity
public class FactureClient {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String date;
	private double prixt_ht;
	private double prixu_ttc;
	private int tva;
	private double prix_tva;
	@Column(precision = 4, scale = 3)
	private BigDecimal prix_dtimbre;
	private double prixt_ttc;
	private String prixt_ch;
	private String rib;
	private double total_ttc;
	private int reservation;
	
	public FactureClient() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public double getPrixt_ht() {
		return prixt_ht;
	}

	public void setPrixt_ht(double prixt_ht) {
		this.prixt_ht = prixt_ht;
	}

	public double getPrixu_ttc() {
		return prixu_ttc;
	}

	public void setPrixu_ttc(double prixu_ttc) {
		this.prixu_ttc = prixu_ttc;
	}

	public int getTva() {
		return tva;
	}

	public void setTva(int tva) {
		this.tva = tva;
	}


	public double getPrix_tva() {
		return prix_tva;
	}

	public void setPrix_tva(double prix_tva) {
		this.prix_tva = prix_tva;
	}


	public BigDecimal getPrix_dtimbre() {
		return prix_dtimbre;
	}

	public void setPrix_dtimbre(BigDecimal prix_dtimbre) {
		this.prix_dtimbre = prix_dtimbre;
	}

	public double getPrixt_ttc() {
		return prixt_ttc;
	}

	public void setPrixt_ttc(double prixt_ttc) {
		this.prixt_ttc = prixt_ttc;
	}

	public String getPrixt_ch() {
		return prixt_ch;
	}

	public void setPrixt_ch(String prixt_ch) {
		this.prixt_ch = prixt_ch;
	}

	public String getRib() {
		return rib;
	}

	public void setRib(String rib) {
		this.rib = rib;
	}

	public double getTotal_ttc() {
		return total_ttc;
	}

	public void setTotal_ttc(double total_ttc) {
		this.total_ttc = total_ttc;
	}

	public int getReservation() {
		return reservation;
	}

	public void setReservation(int reservation) {
		this.reservation = reservation;
	}

	public FactureClient(int id, String date, double prixt_ht, double prixu_ttc, int tva, double prix_tva,
			BigDecimal prix_dtimbre, double prixt_ttc, String prixt_ch, String rib, double total_ttc, int reservation) {
		super();
		this.id = id;
		this.date = date;
		this.prixt_ht = prixt_ht;
		this.prixu_ttc = prixu_ttc;
		this.tva = tva;
		this.prix_tva = prix_tva;
		this.prix_dtimbre = prix_dtimbre;
		this.prixt_ttc = prixt_ttc;
		this.prixt_ch = prixt_ch;
		this.rib = rib;
		this.total_ttc = total_ttc;
		this.reservation = reservation;
	}

	@Override
	public String toString() {
		return "FactureClient [id=" + id + ", date=" + date + ", prixt_ht=" + prixt_ht + ", prixu_ttc=" + prixu_ttc
				+ ", tva=" + tva + ", prix_tva=" + prix_tva + ", prix_dtimbre=" + prix_dtimbre + ", prixt_ttc="
				+ prixt_ttc + ", prixt_ch=" + prixt_ch + ", rib=" + rib + ", total_ttc=" + total_ttc + ", reservation="
				+ reservation + "]";
	}










	



	

	

}

package com.cartridge.demo.entities;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class Reservation  implements Serializable {
	

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	private String client;
	private String hotel;
	private String typologie;
	private String logement;
	private double prixlogement;
	private String supplement; 
	private int prixsupplement; 
	private String specification; 
	private String date_reservation;
	private String date_arrivee;
	private String date_depart;
	private int duree;
	private int enfant;
	private int bebe;
	private int adulte;
	private int totalp;
	private Double prixachat;
	private Double prixvente;
	private String observations;

	public Reservation() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getClient() {
		return client;
	}

	public void setClient(String client) {
		this.client = client;
	}

	public String getHotel() {
		return hotel;
	}

	public void setHotel(String hotel) {
		this.hotel = hotel;
	}

	public String getTypologie() {
		return typologie;
	}

	public void setTypologie(String typologie) {
		this.typologie = typologie;
	}

	public String getLogement() {
		return logement;
	}

	public void setLogement(String logement) {
		this.logement = logement;
	}


	public double getPrixlogement() {
		return prixlogement;
	}

	public void setPrixlogement(double prixlogement) {
		this.prixlogement = prixlogement;
	}

	public String getSupplement() {
		return supplement;
	}

	public void setSupplement(String supplement) {
		this.supplement = supplement;
	}

	public int getPrixsupplement() {
		return prixsupplement;
	}

	public void setPrixsupplement(int prixsupplement) {
		this.prixsupplement = prixsupplement;
	}
	
	public String getSpecification() {
		return specification;
	}

	public void setSpecification(String specification) {
		this.specification = specification;
	}

	public String getDate_reservation() {
		return date_reservation;
	}

	public void setDate_reservation(String date_reservation) {
		this.date_reservation = date_reservation;
	}

	public String getDate_arrivee() {
		return date_arrivee;
	}

	public void setDate_arrivee(String date_arrivee) {
		this.date_arrivee = date_arrivee;
	}

	public String getDate_depart() {
		return date_depart;
	}

	public void setDate_depart(String date_depart) {
		this.date_depart = date_depart;
	}
	
	
	public int getDuree() {
		return duree;
	}

	public void setDuree(int duree) {
		this.duree = duree;
	}

	public int getEnfant() {
		return enfant;
	}

	public void setEnfant(int enfant) {
		this.enfant = enfant;
	}

	public int getBebe() {
		return bebe;
	}

	public void setBebe(int bebe) {
		this.bebe = bebe;
	}

	public int getAdulte() {
		return adulte;
	}

	public void setAdulte(int adulte) {
		this.adulte = adulte;
	}

	public int getTotalp() {
		return totalp;
	}

	public void setTotalp(int totalp) {
		this.totalp = totalp;
	}

	public Double getPrixachat() {
		return prixachat;
	}

	public void setPrixachat(Double prixachat) {
		this.prixachat = prixachat;
	}

	public Double getPrixvente() {
		return prixvente;
	}

	public void setPrixvente(Double prixvente) {
		this.prixvente = prixvente;
	}



	public String getObservations() {
		return observations;
	}

	public void setObservations(String observations) {
		this.observations = observations;
	}

	public Reservation(int id, String client, String hotel, String typologie, String logement, double prixlogement,
			String supplement, int prixsupplement, String specification, String date_reservation, String date_arrivee,
			String date_depart, int duree, int enfant, int bebe, int adulte, int totalp, Double prixachat,
			Double prixvente, String observations) {
		super();
		this.id = id;
		this.client = client;
		this.hotel = hotel;
		this.typologie = typologie;
		this.logement = logement;
		this.prixlogement = prixlogement;
		this.supplement = supplement;
		this.prixsupplement = prixsupplement;
		this.specification = specification;
		this.date_reservation = date_reservation;
		this.date_arrivee = date_arrivee;
		this.date_depart = date_depart;
		this.duree = duree;
		this.enfant = enfant;
		this.bebe = bebe;
		this.adulte = adulte;
		this.totalp = totalp;
		this.prixachat = prixachat;
		this.prixvente = prixvente;
		this.observations = observations;
	}

	@Override
	public String toString() {
		return "Reservation [id=" + id + ", client=" + client + ", hotel=" + hotel + ", typologie=" + typologie
				+ ", logement=" + logement + ", prixlogement=" + prixlogement + ", supplement=" + supplement
				+ ", prixsupplement=" + prixsupplement + ", specification=" + specification + ", date_reservation="
				+ date_reservation + ", date_arrivee=" + date_arrivee + ", date_depart=" + date_depart + ", duree="
				+ duree + ", enfant=" + enfant + ", bebe=" + bebe + ", adulte=" + adulte + ", totalp=" + totalp
				+ ", prixachat=" + prixachat + ", prixvente=" + prixvente + ", observations=" + observations + "]";
	}









	
	









}

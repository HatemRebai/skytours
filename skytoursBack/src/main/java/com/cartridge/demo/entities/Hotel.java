package com.cartridge.demo.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;




@Entity
public class Hotel  implements  Serializable{
	

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String raison_sociale;
	private String rc;
	private String adresse; 
	private String tel;
	private String emailc;
	private String emailrs;
	private String emaildb;
	private String matricule_fiscale;
	private int specificite;

	public Hotel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getRaison_sociale() {
		return raison_sociale;
	}
	public void setRaison_sociale(String raison_sociale) {
		this.raison_sociale = raison_sociale;
	}
	public String getRc() {
		return rc;
	}
	public void setRc(String rc) {
		this.rc = rc;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getEmailc() {
		return emailc;
	}
	public void setEmailc(String emailc) {
		this.emailc = emailc;
	}
	public String getEmailrs() {
		return emailrs;
	}
	public void setEmailrs(String emailrs) {
		this.emailrs = emailrs;
	}
	public String getEmaildb() {
		return emaildb;
	}
	public void setEmaildb(String emaildb) {
		this.emaildb = emaildb;
	}
	public String getMatricule_fiscale() {
		return matricule_fiscale;
	}
	public void setMatricule_fiscale(String matricule_fiscale) {
		this.matricule_fiscale = matricule_fiscale;
	}

	public int getSpecificite() {
		return specificite;
	}
	public void setSpecificite(int specificite) {
		this.specificite = specificite;
	}
	public Hotel(int id, String raison_sociale, String rc, String adresse, String tel, String emailc, String emailrs,
			String emaildb, String matricule_fiscale, int specificite) {
		super();
		this.id = id;
		this.raison_sociale = raison_sociale;
		this.rc = rc;
		this.adresse = adresse;
		this.tel = tel;
		this.emailc = emailc;
		this.emailrs = emailrs;
		this.emaildb = emaildb;
		this.matricule_fiscale = matricule_fiscale;
		this.specificite = specificite;
	}
	@Override
	public String toString() {
		return "Hotel [id=" + id + ", raison_sociale=" + raison_sociale + ", rc=" + rc + ", adresse=" + adresse
				+ ", tel=" + tel + ", emailc=" + emailc + ", emailrs=" + emailrs + ", emaildb=" + emaildb
				+ ", matricule_fiscale=" + matricule_fiscale + ", specificite=" + specificite + "]";
	}


}

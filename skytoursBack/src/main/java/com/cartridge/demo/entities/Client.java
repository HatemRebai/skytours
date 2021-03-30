package com.cartridge.demo.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Client implements Serializable {
	
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id ; 
	private String nom_prenom ; 
	private String nationalite;
	private int cin_passeport;
	private int tel;
	private String email;

	public Client() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNom_prenom() {
		return nom_prenom;
	}
	public void setNom_prenom(String nom_prenom) {
		this.nom_prenom = nom_prenom;
	}
	public String getNationalite() {
		return nationalite;
	}
	public void setNationalite(String nationalite) {
		this.nationalite = nationalite;
	}
	public int getCin_passeport() {
		return cin_passeport;
	}
	public void setCin_passeport(int cin_passeport) {
		this.cin_passeport = cin_passeport;
	}
	public int getTel() {
		return tel;
	}
	public void setTel(int tel) {
		this.tel = tel;
	}


	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Client(int id, String nom_prenom, String nationalite, int cin_passeport, int tel, String email) {
		super();
		this.id = id;
		this.nom_prenom = nom_prenom;
		this.nationalite = nationalite;
		this.cin_passeport = cin_passeport;
		this.tel = tel;
		this.email = email;
	}
	@Override
	public String toString() {
		return "Client [id=" + id + ", nom_prenom=" + nom_prenom + ", nationalite=" + nationalite + ", cin_passeport="
				+ cin_passeport + ", tel=" + tel + ", email=" + email + "]";
	}

	
	
	

}

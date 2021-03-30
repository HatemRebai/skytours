package com.cartridge.demo.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Agence  implements Serializable {
	

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String raison_sociale;
	private String adresse;
	private String matricule_fiscale;
	private int tel;
	private String email;
	private String responsable;
	private String tel_responsable;
	
	public Agence() {
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

	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	
	public String getMatricule_fiscale() {
		return matricule_fiscale;
	}
	public void setMatricule_fiscale(String matricule_fiscale) {
		this.matricule_fiscale = matricule_fiscale;
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
	public String getResponsable() {
		return responsable;
	}
	public void setResponsable(String responsable) {
		this.responsable = responsable;
	
	}

	public String getTel_responsable() {
		return tel_responsable;
	}
	public void setTel_responsable(String tel_responsable) {
		this.tel_responsable = tel_responsable;
	}
	public Agence(int id, String raison_sociale, String adresse, String matricule_fiscale, int tel, String email,
			String responsable, String tel_responsable) {
		super();
		this.id = id;
		this.raison_sociale = raison_sociale;
		this.adresse = adresse;
		this.matricule_fiscale = matricule_fiscale;
		this.tel = tel;
		this.email = email;
		this.responsable = responsable;
		this.tel_responsable = tel_responsable;
	}
	@Override
	public String toString() {
		return "Agence [id=" + id + ", raisonSociale=" + raison_sociale + ", adresse=" + adresse + ", matriculeFicale="
				+ matricule_fiscale + ", tel=" + tel + ", email=" + email + ", responsable=" + responsable
				+ ", telResponsable=" + tel_responsable + "]";
	}


	
	
	
	
	

}

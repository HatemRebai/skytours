package com.cartridge.demo.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "detail_logement",
uniqueConstraints=
@UniqueConstraint(columnNames={"detail_id", "logement_id" , "du" , "au"}))
public class detailLogement  implements Serializable{
	
	@Id
    @GeneratedValue
	private int id ; 
	private double prixA;
	private double prixV;
	private int tauxR;
	private int tauxM;
	@Column(name = "du")
	private String du; 
	@Column(name = "au")
	private String au;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "detail_id") 
	private DetailHotel detailHotel; 
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "logement_id")
	private Logement logement;

	
	public detailLogement() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getPrixA() {
		return prixA;
	}

	public void setPrixA(double prixA) {
		this.prixA = prixA;
	}

	public double getPrixV() {
		return prixV;
	}

	public void setPrixV(double prixV) {
		this.prixV = prixV;
	}

	public int getTauxR() {
		return tauxR;
	}

	public void setTauxR(int tauxR) {
		this.tauxR = tauxR;
	}

	public int getTauxM() {
		return tauxM;
	}

	public void setTauxM(int tauxM) {
		this.tauxM = tauxM;
	}

	public String getDu() {
		return du;
	}

	public void setDu(String du) {
		this.du = du;
	}

	public String getAu() {
		return au;
	}

	public void setAu(String au) {
		this.au = au;
	}

	public int getDetailHotel() {
		return detailHotel.getId();
	}

	public void setDetailHotel(DetailHotel detailHotel) {
		this.detailHotel = detailHotel;
	}

	public int getLogement() {
		return logement.getId();
	}

	public void setLogement(Logement logement) {
		this.logement = logement;
	}

	public detailLogement(int id, double prixA, double prixV, int tauxR, int tauxM, String du, String au,
			DetailHotel detailHotel, Logement logement) {
		super();
		this.id = id;
		this.prixA = prixA;
		this.prixV = prixV;
		this.tauxR = tauxR;
		this.tauxM = tauxM;
		this.du = du;
		this.au = au;
		this.detailHotel = detailHotel;
		this.logement = logement;
	}

	@Override
	public String toString() {
		return "detailLogement [id=" + id + ", prixA=" + prixA + ", prixV=" + prixV + ", tauxR=" + tauxR + ", tauxM="
				+ tauxM + ", du=" + du + ", au=" + au + ", detailHotel=" + detailHotel + ", logement=" + logement + "]";
	}



	
}

package com.cartridge.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "detail_repartition",
uniqueConstraints=
@UniqueConstraint(columnNames={"detail_id", "repartition_id"}))

public class detailRepartition {
	
	@Id
    @GeneratedValue
	private int id ; 
	private int prixB;
	private int prix1;
	private int prix2;
	private int prix3;
	private int prix4;
	private int prix5;
	private int prix6;
	private int prixT ; 
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "detail_id") 
	private DetailHotel detailHotel; 
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "repartition_id")
	private Repartition repartition;
	
	
	public detailRepartition() {
		super();
		// TODO Auto-generated constructor stub
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}
	

	
	public int getPrixB() {
		return prixB;
	}


	public void setPrixB(int prixB) {
		this.prixB = prixB;
	}


	public int getPrix1() {
		return prix1;
	}


	public void setPrix1(int prix1) {
		this.prix1 = prix1;
	}


	public int getPrix2() {
		return prix2;
	}


	public void setPrix2(int prix2) {
		this.prix2 = prix2;
	}


	public int getPrix3() {
		return prix3;
	}


	public void setPrix3(int prix3) {
		this.prix3 = prix3;
	}


	public int getPrix4() {
		return prix4;
	}


	public void setPrix4(int prix4) {
		this.prix4 = prix4;
	}

		
	public int getPrix5() {
		return prix5;
	}


	public void setPrix5(int prix5) {
		this.prix5 = prix5;
	}


	public int getPrix6() {
		return prix6;
	}


	public void setPrix6(int prix6) {
		this.prix6 = prix6;
	}


	public int getPrixT() {
		return prixT;
	}


	public void setPrixT(int prixT) {
		this.prixT = prixT;
	}


	public int getDetailHotel() {
		return detailHotel.getId();
	}


	public void setDetailHotel(DetailHotel detailHotel) {
		this.detailHotel = detailHotel;
	}


	public int getRepartition() {
		return repartition.getId();
	}


	public void setRepartition(Repartition repartition) {
		this.repartition = repartition;
	}


	public detailRepartition(int id, int prixB, int prix1, int prix2, int prix3, int prix4, int prix5, int prix6,
			int prixT,DetailHotel detailHotel, Repartition repartition) {
		super();
		this.id = id;
		this.prixB = prixB;
		this.prix1 = prix1;
		this.prix2 = prix2;
		this.prix3 = prix3;
		this.prix4 = prix4;
		this.prix5 = prix5;
		this.prix6 = prix6;
		this.prixT = prixT;
		this.detailHotel = detailHotel;
		this.repartition = repartition;
	}





	@Override
	public String toString() {
		return "detailRepartition [id=" + id + ", prixB=" + prixB + ", prix1=" + prix1 + ", prix2=" + prix2 + ", prix3="
				+ prix3 + ", prix4=" + prix4 + ", prix5=" + prix5 + ", prix6=" + prix6 + ", prixT=" + prixT
				+ ", detailHotel=" + detailHotel + ", repartition=" + repartition + "]";
	}



	
}

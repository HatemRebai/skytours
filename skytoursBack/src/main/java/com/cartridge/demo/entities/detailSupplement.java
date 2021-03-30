package com.cartridge.demo.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "detail_supplement",
uniqueConstraints=
@UniqueConstraint(columnNames={"detail_id", "supplement_id"}))
public class detailSupplement implements Serializable{
	@Id
    @GeneratedValue
	private int id ; 
	private int prix;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "detail_id") 
	private DetailHotel detailHotel; 
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "supplement_id")
	private Supplement supplement;

	
	public detailSupplement() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getPrix() {
		return prix;
	}

	public void setPrix(int prix) {
		this.prix = prix;
	}

	public int getDetailHotel() {
		return detailHotel.getId();
	}

	public void setDetailHotel(DetailHotel detailHotel) {
		this.detailHotel = detailHotel;
	}

	public int getSupplement() {
		return supplement.getId();
	}

	public void setSupplement(Supplement supplement) {
		this.supplement = supplement;
	}

	public detailSupplement(int id, int prix, DetailHotel detailHotel, Supplement supplement) {
		super();
		this.id = id;
		this.prix = prix;
		this.detailHotel = detailHotel;
		this.supplement = supplement;
	}

	@Override
	public String toString() {
		return "detailSupplement [id=" + id + ", prix=" + prix + ", detailHotel=" + detailHotel + ", supplement="
				+ supplement + "]";
	}



}

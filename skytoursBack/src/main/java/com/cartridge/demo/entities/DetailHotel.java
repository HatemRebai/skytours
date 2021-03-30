package com.cartridge.demo.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class DetailHotel implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	 @Id
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	 public int id;
	 
	 @OneToOne
	 @JoinColumn(name = "hotel_id", referencedColumnName = "id" , nullable = true)
	 private Hotel hotel;
	 
	 @OneToMany(mappedBy = "detailHotel")
	 private List<detailLogement> detailLogement = new ArrayList<>();
	 
	 @OneToMany(mappedBy = "detailHotel")
	 private List<detailRepartition> detailRepartition = new ArrayList<>();
	 
	 
	 @OneToMany(mappedBy = "detailHotel")
	 private List<detailSupplement> detailSupplement = new ArrayList<>();
	 
	 @OneToMany(mappedBy = "detailHotel")
	 private List<detailTypologie> detailTypologie = new ArrayList<>();
	 
	 @ManyToMany(mappedBy = "DetailHotel")
	 private List<Specification> Specification = new ArrayList<>();
	 
	 public DetailHotel() {
	         super();
	         // TODO Autoted constructor stub
	 }
	 public int getId() {
	         return id;
	 }
	 public void setId(int id) {
	         this.id = id;
	 }
	 public Hotel getHotel() {
	         return hotel;
	 }
	 public void setHotel(Hotel hotel) {
	         this.hotel = hotel;
	 }

	 public void addspecifictaion(Specification specification) {
	         Specification.add(specification);
	 }
	  

	@Override
	public String toString() {
	        return "DetailHotel [id=" + id + ", hotel=" + hotel + "]";
	}
}

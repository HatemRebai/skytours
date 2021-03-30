package com.cartridge.demo.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;


@Entity
public class Supplement  implements Serializable{
	
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id; 
	private String designation;
	
    @ManyToMany
    @JoinTable(
    		   name = "detail_supplement",
               joinColumns = @JoinColumn(name = "supplement_id"),
               inverseJoinColumns = @JoinColumn(name = "detail_id")
              )      
    private List<DetailHotel> DetailHotel = new ArrayList<>();

	public Supplement() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public Supplement(int id, String designation) {
		super();
		this.id = id;
		this.designation = designation;
	}
	@Override
	public String toString() {
		return "Supplement [id=" + id + ", designation=" + designation + "]";
	}
	
}

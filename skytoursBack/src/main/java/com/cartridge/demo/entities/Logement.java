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
import javax.persistence.OneToMany;

@Entity
public class Logement implements Serializable{
	

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id ; 
	private String designation;
	
	 
/*     @JoinTable(	      
    		  name = "detail_logement",
              joinColumns = @JoinColumn(name = "logement_id"),
              inverseJoinColumns = @JoinColumn(name = "detail_id")
               )   */
	
     @OneToMany(mappedBy = "logement")
 	private List<detailLogement> detailLogement = new ArrayList<>();	      

	public Logement() {
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

	public Logement(int id, String designation, List<detailLogement> detailLogement) {
		super();
		this.id = id;
		this.designation = designation;
		this.detailLogement = detailLogement;
	}
	@Override
	public String toString() {
		return "Logement [id=" + id + ", designation=" + designation + ", detailLogement=" + detailLogement + "]";
	}



}
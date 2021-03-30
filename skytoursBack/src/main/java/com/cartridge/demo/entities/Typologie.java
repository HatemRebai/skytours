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
public class Typologie implements Serializable{
	

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String designation;
	private int nbrelit;
	private String typelit ;
	
	
  /*  @ManyToMany
    @JoinTable(
    		  name = "detail_typologie",
              joinColumns = @JoinColumn(name = "typologie_id"),
              inverseJoinColumns = @JoinColumn(name = "detail_id")
             )     
    private List<DetailHotel> DetailHotel = new ArrayList<>();
      */
    @OneToMany(mappedBy = "typologie")
 	private List<detailTypologie> detailTypologie = new ArrayList<>();
	
	public Typologie() {
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
	
	public int getNbrelit() {
		return nbrelit;
	}
	public void setNbrelit(int nbrelit) {
		this.nbrelit = nbrelit;
	}
	
	public String getTypelit() {
		return typelit;
	}
	public void setTypelit(String typelit) {
		this.typelit = typelit;
	}
	public Typologie(int id, String designation, int nbrelit, String typelit,
			List<detailTypologie> detailTypologie) {
		super();
		this.id = id;
		this.designation = designation;
		this.nbrelit = nbrelit;
		this.typelit = typelit;
		this.detailTypologie = detailTypologie;
	}
	@Override
	public String toString() {
		return "Typologie [id=" + id + ", designation=" + designation + ", nbrelit=" + nbrelit + ", typelit=" + typelit
				+ ", detailTypologie=" + detailTypologie + "]";
	}





	

	
	

}

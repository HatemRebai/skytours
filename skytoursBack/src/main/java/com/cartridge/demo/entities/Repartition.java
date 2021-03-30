package com.cartridge.demo.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Columns;

@Entity
public class Repartition  implements Serializable{


	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String repartition;
	
	
	@OneToMany(mappedBy = "repartition")
	private List<detailRepartition> detailRepartition = new ArrayList<>();
	

	public Repartition() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getRepartition() {
		return repartition;
	}
	public void setRepartition(String repartition) {
		this.repartition = repartition;
	}


	public Repartition(int id, String repartition,
			List<detailRepartition> detailRepartition) {
		super();
		this.id = id;
		this.repartition = repartition;
		this.detailRepartition = detailRepartition;
	}

	@Override
	public String toString() {
		return "Repartition [id=" + id + ", repartition=" + repartition + ", detailRepartition=" + detailRepartition
				+ "]";
	}
		

}

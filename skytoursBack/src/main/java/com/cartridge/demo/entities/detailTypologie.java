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
@Table(name = "detail_typologie",
uniqueConstraints=
@UniqueConstraint(columnNames={"detail_id", "typologie_id"}))
public class detailTypologie implements Serializable {

	
	private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue
	private int id ; 

	
	@ManyToOne
	@JoinColumn(name = "detail_id") 
	private DetailHotel detailHotel;
	
/*	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "specification_id")
	private Specification specification; */
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "typologie_id")
	private Typologie typologie;

	
	public detailTypologie() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	

/*	public Specification getSpecification() {
		return specification;
	}

	public void setSpecification(Specification specification) {
		this.specification = specification;
	}*/

	public int getDetailHotel() {
		return detailHotel.getId();
	}

	public void setDetailHotel(DetailHotel detailHotel) {
		this.detailHotel = detailHotel;
	}

	public int getTypologie() {
		return typologie.getId();
	}

	public void setTypologie(Typologie typologie) {
		this.typologie = typologie;
	}

	public detailTypologie(int id, DetailHotel detailHotel, Typologie typologie) {
		super();
		this.id = id;
		this.detailHotel = detailHotel;
		this.typologie = typologie;
	}

	@Override
	public String toString() {
		return "detailTypologie [id=" + id + ", detailHotel=" + detailHotel + ", typologie=" + typologie + "]";
	}


}

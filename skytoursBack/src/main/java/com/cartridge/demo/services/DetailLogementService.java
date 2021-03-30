package com.cartridge.demo.services;

import java.util.List;

import com.cartridge.demo.entities.detailLogement;


public interface DetailLogementService {
	public detailLogement addDL (detailLogement detaillogement);
	public void deletedetailRepartition(detailLogement detaillogement);
	public List<detailLogement> getall();
	public detailLogement getdetailLogById(int id);

}

package com.cartridge.demo.services;

import java.util.List;

import com.cartridge.demo.entities.detailLogement;
import com.cartridge.demo.entities.detailTypologie;

public interface DetailTypologieService {
	public detailTypologie addDT (detailTypologie detailTypologie);
	public void deletedetailRepartition(detailTypologie detailTypologie);
	public List<detailTypologie> getall();
	public detailTypologie getdetailTypById(int id);

}

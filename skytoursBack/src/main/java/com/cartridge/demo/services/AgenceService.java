package com.cartridge.demo.services;

import java.util.List;

import com.cartridge.demo.entities.Agence;

public interface AgenceService {
	public Agence addAgence (Agence agence);
	public Agence getAgence(int id);
	public void deleteAgence(Agence agence);
	public List<Agence> getall();
	

}

package com.cartridge.demo.services;

import java.util.List;

import com.cartridge.demo.entities.FactureClient;


public interface FactureClientService {
	
	public FactureClient addFacture (FactureClient factureClient);
	public List<FactureClient> getall();
	public FactureClient getFacureClientById (int id);

}

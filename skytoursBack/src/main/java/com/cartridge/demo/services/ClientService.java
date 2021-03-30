package com.cartridge.demo.services;

import java.util.List;

import com.cartridge.demo.entities.Client;

public interface ClientService {
	
	public Client addClient (Client client);
	public Client getclientById (int id);
	public Client getByName(String name);
	public List<Client> getBynationnalite(String nationalite);
	public List<Client> getall();
	public void deleteClient (Client client);
	public Client getByIdentif(Integer identif);

}

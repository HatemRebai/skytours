package com.cartridge.demo.services;

import java.util.List;

import com.cartridge.demo.entities.Logement;

public interface LogementService {
	public Logement addLogement(Logement logement);
	public Logement getLogementById (int id);
	public List<Logement>listLogByDesignation (String designation);
	public List<Logement> getAll();
	public String deleteLogement (Logement logement);

}

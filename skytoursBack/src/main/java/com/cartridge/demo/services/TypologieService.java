package com.cartridge.demo.services;

import java.util.List;

import com.cartridge.demo.entities.Typologie;

public interface TypologieService {
	
	public Typologie addTypologie(Typologie typologie);
	public Typologie getTypById (int id);
	public List<Typologie> getAll();
	public Typologie deleteTypologie (Typologie typologie);

}

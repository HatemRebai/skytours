package com.cartridge.demo.services;

import java.util.List;

import com.cartridge.demo.entities.Supplement;

public interface SupplementService {
	
	public void addSupplement(Supplement supplement);
	public Supplement getSupById (int id);
	public List<Supplement> getAll();
	public void deleteSupplement (Supplement supplement);
	
	
	

}

package com.cartridge.demo.services;

import java.util.List;

import com.cartridge.demo.entities.Repartition;

public interface RepartitionService {
	public Repartition addRepartition(Repartition repartition);
	public Repartition getRepById (int id);
	public List<Repartition> getAll();
	public void deleteRepartition (Repartition repartition);

}

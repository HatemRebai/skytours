package com.cartridge.demo.services;

import java.util.List;


import com.cartridge.demo.entities.detailRepartition;

public interface DetailRepartitionService {

	public detailRepartition addDR (detailRepartition detailrepartition);
	public void deletedetailRepartition(detailRepartition detailRepartition);
	public List<detailRepartition> getall();
	public detailRepartition getdetailRepById(int id);
}

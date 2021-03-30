package com.cartridge.demo.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cartridge.demo.entities.FactureClient;
import com.cartridge.demo.repositories.FactureClientRepository;
import com.cartridge.demo.services.FactureClientService;

@Service("FactureClientService")
public class FactureClientServiceImpl implements FactureClientService {
	
	@Autowired
	FactureClientRepository factureClientRepository;

	@Override
	public FactureClient addFacture(FactureClient factureClient) {
		// TODO Auto-generated method stub
		return factureClientRepository.save(factureClient);
	}

	@Override
	public List<FactureClient> getall() {
		// TODO Auto-generated method stub
		return factureClientRepository.findAll();
	}

	@Override
	public FactureClient getFacureClientById(int id) {
		// TODO Auto-generated method stub
		return factureClientRepository.getOne(id);
	}

}

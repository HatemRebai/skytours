package com.cartridge.demo.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cartridge.demo.entities.Supplement;
import com.cartridge.demo.repositories.SupplementRepository;
import com.cartridge.demo.services.SupplementService;

@Service("SupplementService")
public class SupplementServiceImpl  implements SupplementService  {
	
	
	@Autowired
	SupplementRepository supplementRepository;

	@Override
	public void addSupplement(Supplement supplement) {
		supplementRepository.save(supplement);
		
	}

	@Override
	public Supplement getSupById(int id) {
		
		return supplementRepository.getOne(id);
	}

	@Override
	public List<Supplement> getAll() {
		
		return supplementRepository.findAll();
	}

	@Override
	public void deleteSupplement(Supplement supplement) {
		supplementRepository.delete(supplement);
		
	}

}

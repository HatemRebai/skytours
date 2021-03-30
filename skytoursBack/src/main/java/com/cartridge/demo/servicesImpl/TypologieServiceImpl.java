package com.cartridge.demo.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cartridge.demo.entities.Typologie;
import com.cartridge.demo.repositories.TypologieRepository;
import com.cartridge.demo.services.TypologieService;

@Service("TypologieService")
public class TypologieServiceImpl implements TypologieService {
	
	@Autowired
	TypologieRepository typologieRepository;

	@Override
	public Typologie addTypologie(Typologie typologie) {
		return typologieRepository.save(typologie);
		
	}

	@Override
	public Typologie getTypById(int id) {
	
		return typologieRepository.getOne(id);
	}

	@Override
	public List<Typologie> getAll() {
		
		return typologieRepository.findAll();
	}

	@Override
	public Typologie deleteTypologie(Typologie typologie) {
		typologieRepository.delete(typologie);
		return typologie;
		
	}

}

package com.cartridge.demo.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cartridge.demo.entities.Repartition;
import com.cartridge.demo.repositories.RepartitionRepository;
import com.cartridge.demo.services.RepartitionService;

@Service("RepartitionService")
public class RepartitionServiceImpl  implements RepartitionService{
	
	@Autowired
	RepartitionRepository repartitionRepository;

	@Override
	public Repartition addRepartition(Repartition repartition) {
		return repartitionRepository.save(repartition);
		
	}

	@Override
	public Repartition getRepById(int id) {
		
		return repartitionRepository.getOne(id);
	}

	@Override
	public List<Repartition> getAll() {
		
		return repartitionRepository.findAll();
	}

	@Override
	public void deleteRepartition(Repartition repartition) {
		repartitionRepository.delete(repartition);
		
	}

}

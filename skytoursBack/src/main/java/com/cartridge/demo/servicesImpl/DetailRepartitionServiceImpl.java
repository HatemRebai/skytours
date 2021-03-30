package com.cartridge.demo.servicesImpl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cartridge.demo.entities.detailRepartition;
import com.cartridge.demo.repositories.DetailRepartitionRepository;
import com.cartridge.demo.services.DetailRepartitionService;

@Service("DetailRepartitionService")
public class DetailRepartitionServiceImpl  implements DetailRepartitionService{
	
	
	
	@Autowired
	DetailRepartitionRepository DetailRepartitionRepository;
	@PersistenceContext
	EntityManager em;

	@Override
	public detailRepartition addDR(detailRepartition detailrepartition) {

		return DetailRepartitionRepository.save(detailrepartition);
	}


	@Override
	public void deletedetailRepartition(detailRepartition detailRepartition) {
		
		DetailRepartitionRepository.delete(detailRepartition);
		
	}

	@Override
	public List<detailRepartition> getall() {
		
        return DetailRepartitionRepository.findAll();
	}

	@Override
	public detailRepartition getdetailRepById(int id) {
		// TODO Auto-generated method stub
		return DetailRepartitionRepository.getOne(id);
	}

}

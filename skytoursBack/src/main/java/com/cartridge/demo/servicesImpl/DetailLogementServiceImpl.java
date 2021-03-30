package com.cartridge.demo.servicesImpl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cartridge.demo.entities.detailLogement;
import com.cartridge.demo.services.DetailLogementService;
import com.cartridge.demo.repositories.DetailLogementRepository;


@Service("DetailLogementService")
public class DetailLogementServiceImpl  implements DetailLogementService{
	
	@Autowired
	DetailLogementRepository DetailLogementRepository;
	@PersistenceContext
	EntityManager em;

	@Override
	public detailLogement addDL(detailLogement detaillogement) {
		// TODO Auto-generated method stub
		return DetailLogementRepository.save(detaillogement);
	}

	@Override
	public void deletedetailRepartition(detailLogement detaillogement) {
		// TODO Auto-generated method stub
		DetailLogementRepository.delete(detaillogement);
		
	}

	@Override
	public List<detailLogement> getall() {
		// TODO Auto-generated method stub
		return DetailLogementRepository.findAll();
	}

	@Override
	public detailLogement getdetailLogById(int id) {
		// TODO Auto-generated method stub
		return DetailLogementRepository.getOne(id);
	}

}

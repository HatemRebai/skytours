package com.cartridge.demo.servicesImpl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cartridge.demo.entities.detailSupplement;
import com.cartridge.demo.repositories.DetailRepartitionRepository;
import com.cartridge.demo.repositories.DetailSupplementRepository;
import com.cartridge.demo.services.DetailSupplementService;

@Service("DetailSupplementService")
public class DetailSupplementServiceImpl implements DetailSupplementService {
	
	@Autowired
	DetailSupplementRepository detailSupplementRepository;
	@PersistenceContext
	EntityManager em;

	@Override
	public detailSupplement addDS(detailSupplement detailsupplement) {
		// TODO Auto-generated method stub
		return detailSupplementRepository.save(detailsupplement);
	}

	@Override
	public void deleteSupplement(detailSupplement detailsupplement) {
		// TODO Auto-generated method stub
		detailSupplementRepository.delete(detailsupplement);
	}

	@Override
	public List<detailSupplement> getall() {
		// TODO Auto-generated method stub
		return detailSupplementRepository.findAll();
	}

	@Override
	public detailSupplement getdetailSupById(int id) {
		// TODO Auto-generated method stub
		return detailSupplementRepository.getOne(id);
	}

}

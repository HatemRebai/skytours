package com.cartridge.demo.servicesImpl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cartridge.demo.entities.Agence;
import com.cartridge.demo.repositories.AgenceRepository;
import com.cartridge.demo.services.AgenceService;



@Service("AgenceService")
public class AgenceServiceImpl implements AgenceService{


	@Autowired
	AgenceRepository agenceRepository;
	
	@PersistenceContext
	EntityManager em;
	
	@Override
	public Agence addAgence(Agence agence) {
		return agenceRepository.save(agence);
	}

	@Override
	public Agence getAgence(int id) {
		// TODO Auto-generated method stub
		return agenceRepository.getOne(id);
	}

	@Override
	public void deleteAgence(Agence agence) {
		agenceRepository.delete(agence);
		
	}

	@Override
	public List<Agence> getall() {
		TypedQuery<Agence> query  = em.createQuery("SELECT a FROM Agence a ", Agence.class);
		return query.getResultList();
		
	}

}

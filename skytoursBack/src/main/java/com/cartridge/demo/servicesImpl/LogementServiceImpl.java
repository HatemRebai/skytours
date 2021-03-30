package com.cartridge.demo.servicesImpl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cartridge.demo.entities.Logement;
import com.cartridge.demo.repositories.LogementRepository;
import com.cartridge.demo.services.LogementService;

@Service("LogementService")
public class LogementServiceImpl  implements LogementService{
	
	@Autowired
	LogementRepository logementRepository;
	
	@PersistenceContext
	EntityManager em;

	@Override
	public Logement addLogement(Logement logement) {
	 
		return logementRepository.save(logement);
	}

	@Override
	public Logement getLogementById(int id) {
		
		return logementRepository.getOne(id);
	}

	@Override
	public List<Logement> listLogByDesignation(String designation) {
	
		TypedQuery<Logement> query  = em.createQuery("SELECT l FROM Logement l   WHERE l.designation = :designation", Logement.class);
		query.setParameter("designation", designation);
		return query.getResultList();	
	}

	@Override
	public List<Logement> getAll() {
	
		return logementRepository.findAll();
	}

	@Override
	public String deleteLogement(Logement logement) {
		
		logementRepository.delete(logement);
		return "Le logement :"+ logement +"est supprime avec succes";
	}


}

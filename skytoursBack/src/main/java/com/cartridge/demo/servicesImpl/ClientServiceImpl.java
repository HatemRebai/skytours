package com.cartridge.demo.servicesImpl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cartridge.demo.entities.Client;
import com.cartridge.demo.repositories.ClientRepository;
import com.cartridge.demo.services.ClientService;



@Service("ClientService")
public class ClientServiceImpl implements ClientService{
	
	@Autowired
	ClientRepository clientRepository;
	
	@PersistenceContext
	EntityManager em;
	

	@Override
	public Client addClient(Client client) {
		
	return clientRepository.save(client);	
	}

	@Override
	public Client getclientById(int id) {
		return clientRepository.getOne(id);
	}

	@Override
	public List<Client> getall() {
		//return clientRepository.findAll();
		TypedQuery<Client> query  = em.createQuery("SELECT c FROM Client c ", Client.class);
		return query.getResultList();
	}

	@Override
	public void deleteClient(Client client) {
		clientRepository.delete(client);
		
	}

	@Override
	public Client getByName(String name) {
		
		TypedQuery<Client> query  = em.createQuery("SELECT c FROM Client c WHERE c.nom_prenom = :name", Client.class);
		Client c = query.setParameter("name", name).getSingleResult();
		return c;
	}

	@Override
	public Client getByIdentif(Integer identif) {
		
		
		TypedQuery<Client> query  = em.createQuery("SELECT c FROM Client c WHERE c.cin_passeport = :identif", Client.class);
		Client c = query.setParameter("identif", identif).getSingleResult();
		return c;
	}

	@Override
	public List<Client> getBynationnalite(String nationalite) {

		TypedQuery<Client> query  = em.createQuery("SELECT c FROM Client c WHERE c.nationalite = :nationalite", Client.class);
		query.setParameter("nationalite", nationalite);
		return query.getResultList();
	}

}

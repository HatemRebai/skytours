package com.cartridge.demo.controller;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cartridge.demo.entities.Client;
import com.cartridge.demo.entities.Repartition;
import com.cartridge.demo.repositories.RepartitionRepository;
import com.cartridge.demo.services.RepartitionService;

@CrossOrigin("*")
@RestController
@RequestMapping("/repartition")
public class RepartitionController {

	
	@Autowired
	RepartitionRepository repartitionRepository;
	@Autowired
	RepartitionService repartitionService;
    @PersistenceContext
    EntityManager em;
	
	
	@PostMapping("/addR")
	public void saveRepartition(@RequestBody Repartition repartition) {
		
		repartitionService.addRepartition(repartition);
	}
	
	@GetMapping("/listRepartition")
	public List<Repartition> getAll(){
		
		return repartitionService.getAll() ;
	}
	@GetMapping("/repartition/{id}")
	public Repartition getOne(@PathVariable ("id") Integer id){
		
		return repartitionService.getRepById(id);
	}	
	
	@DeleteMapping("/deleteR{id}")
	public Repartition removeOne(@PathVariable("id") Integer id ) {
		
		Repartition r = repartitionService.getRepById(id);
		return r;	
	}

	@PutMapping("/updateR/{id}")
	public @ResponseBody  Repartition updateOne(@RequestBody Repartition repartition ,@PathVariable("id") Integer id) {
		
		Repartition r = repartitionService.getRepById(id);
		r.setRepartition(repartition.getRepartition());
		return repartitionService.addRepartition(r); 
		
	}
	
	@Transactional
	@GetMapping("/getRepNotExit")
	public List<Repartition> noexist() {
        {
    		TypedQuery<Repartition> query  = em.createQuery("SELECT r FROM Repartition r ", Repartition.class);
    		 return query.getResultList();
 
            }

	}
	
	
}



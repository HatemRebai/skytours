package com.cartridge.demo.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cartridge.demo.entities.Specification;
import com.cartridge.demo.repositories.SpecificationRepository;
import com.cartridge.demo.services.SpecificationService;

@Service("SpecificationService")
public class SpecificationServiceImpl implements SpecificationService  {
	
	
	  @Autowired
	  SpecificationRepository specificationRepository;
	  @Override
	  public Specification addSpecification(Specification specification) {
	          return specificationRepository.save(specification);
	  }
	  @Override
	  public Specification getSpecById(int id) {
	          return specificationRepository.getOne(id);
	  }
	  @Override
	  public List<Specification> getAll() {
	          return specificationRepository.findAll();
	  }
	  @Override
	  public void deleteSpecification(Specification specification) {
	          specificationRepository.delete(specification);
	  }

}

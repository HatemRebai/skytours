package com.cartridge.demo.services;

import java.util.List;

import com.cartridge.demo.entities.Specification;

public interface SpecificationService {
	
	 public Specification addSpecification(Specification specification);
	 public Specification getSpecById (int id);
	 public List<Specification> getAll();
	 public void deleteSpecification (Specification specification);

}

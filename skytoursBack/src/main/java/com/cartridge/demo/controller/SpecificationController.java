package com.cartridge.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.cartridge.demo.entities.Specification;
import com.cartridge.demo.repositories.SpecificationRepository;
import com.cartridge.demo.services.SpecificationService;

@CrossOrigin("*")
@RestController
@RequestMapping("/specification")
public class SpecificationController {

	
	@Autowired
	SpecificationService specificationService;
	@Autowired
	SpecificationRepository specificationRepository;
	@PostMapping("/addSpecification")
	public Specification  saveClient(@RequestBody Specification specification) {
	        specificationService.addSpecification(specification);
	        return specification ;
	}
	@GetMapping("/listSpecification")
	public List<Specification> getAll(){
	        return specificationService.getAll() ;
	}
	@GetMapping("/specification/{id}")
	public Specification getOne(@PathVariable ("id") Integer id) {
	        Specification s = specificationService.getSpecById(id);
	        return s;
	}
	@DeleteMapping("/deleteS/{id}")
	public String removeOne(@PathVariable ("id") Integer id ) {
	        Specification  s = specificationService.getSpecById(id);
	        specificationService.deleteSpecification(s);
	        return "supplement supprimer avec succes";
	}
	@PutMapping("/updateS/{id}")
	public @ResponseBody Specification  updateOne(@RequestBody Specification  specification  , @PathVariable ("id") Integer id) {
	        Specification  s = specificationService.getSpecById(id);
	        s.setDesignation(specification.getDesignation());
	        return s;
	}
}

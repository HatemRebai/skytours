package com.cartridge.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cartridge.demo.entities.Specification;

@Repository("specificationrepository")
public interface SpecificationRepository  extends JpaRepository<Specification, Integer> {

}

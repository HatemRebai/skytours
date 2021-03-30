package com.cartridge.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cartridge.demo.entities.Logement;

@Repository("logementrepository")
public interface LogementRepository  extends JpaRepository<Logement, Integer>{

}

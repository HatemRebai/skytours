package com.cartridge.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cartridge.demo.entities.Agence;

@Repository("Agencerepository")
public interface AgenceRepository extends JpaRepository<Agence,Integer > {

}

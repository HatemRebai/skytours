package com.cartridge.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cartridge.demo.entities.detailLogement;

@Repository("Detailogementrepository")
public interface DetailLogementRepository extends JpaRepository<detailLogement, Integer>{

}

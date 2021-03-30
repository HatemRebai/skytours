package com.cartridge.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cartridge.demo.entities.detailRepartition;

@Repository("detailrepartitionrepository")
public interface DetailRepartitionRepository extends JpaRepository<detailRepartition, Integer>{

}

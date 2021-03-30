package com.cartridge.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cartridge.demo.entities.Repartition;

@Repository("repartitionrepository")
public interface RepartitionRepository extends JpaRepository<Repartition, Integer>{

}

package com.cartridge.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cartridge.demo.entities.FactureClient;

@Repository("factureclientrepository")
public interface FactureClientRepository extends JpaRepository<FactureClient, Integer> {

}

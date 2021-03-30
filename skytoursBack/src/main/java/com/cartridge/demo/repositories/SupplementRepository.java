package com.cartridge.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cartridge.demo.entities.Supplement;

@Repository("supplementrepository")
public interface SupplementRepository extends JpaRepository<Supplement, Integer> {

}

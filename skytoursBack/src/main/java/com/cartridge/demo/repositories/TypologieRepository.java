package com.cartridge.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cartridge.demo.entities.Typologie;


@Repository("typologierepository")
public interface TypologieRepository  extends JpaRepository<Typologie, Integer>{

}

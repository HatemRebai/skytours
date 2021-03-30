package com.cartridge.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cartridge.demo.entities.DetailHotel;

@Repository("detailhotelrepository")
public interface DetailHotelRepository  extends JpaRepository<DetailHotel, Integer>  {
	

}

package com.cartridge.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cartridge.demo.entities.Hotel;

@Repository("hotelrepository")
public interface HotelRepository extends JpaRepository<Hotel, Integer> {

}

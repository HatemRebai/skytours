package com.cartridge.demo.services;

import java.util.List;

import com.cartridge.demo.entities.Hotel;


public interface HotelService {
	
	public Hotel addHotel(Hotel hotel);
	public List<Hotel> getall();
	public Hotel getHotelById (int id);
	public Hotel getHotelByName(String name);
	public List<Hotel> getBySpecificite(int specificite);
	public void deleteHotel (Hotel hotel);


}

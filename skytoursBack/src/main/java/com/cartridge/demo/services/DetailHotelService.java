package com.cartridge.demo.services;

import java.util.List;

import com.cartridge.demo.entities.DetailHotel;

public interface DetailHotelService {
	
	  public void addDetailHotel (DetailHotel detailHotel);
	  public List<DetailHotel> getDetails();
	  public DetailHotel geDetailById(int id);
	  public void deleteDetail(DetailHotel detailHotel);

}

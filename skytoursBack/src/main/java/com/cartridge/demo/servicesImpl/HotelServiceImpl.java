package com.cartridge.demo.servicesImpl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cartridge.demo.entities.Hotel;
import com.cartridge.demo.repositories.HotelRepository;
import com.cartridge.demo.services.HotelService;

@Service("HotelService")
public class HotelServiceImpl implements HotelService{
	
	@Autowired
	HotelRepository hotelRepository;
	
	@PersistenceContext
	EntityManager em;
	
	

	@Override
	public Hotel addHotel(Hotel hotel) {
		return hotelRepository.save(hotel);
	}

	@Override
	public List<Hotel> getall() {
		
		return hotelRepository.findAll();
	}
	
	@Override
	public Hotel getHotelById(int id) {
		
		return hotelRepository.getOne(id);
	}
	
	@Override
	public Hotel getHotelByName(String name) {
		
		TypedQuery<Hotel> query  = em.createQuery("SELECT c FROM Hotel h  WHERE h.raison_sociale = :name", Hotel.class);
		Hotel h = query.setParameter("name", name).getSingleResult();;
		return h;
	}

	@Override
	public List<Hotel> getBySpecificite(int specificite) {

		TypedQuery<Hotel> query  = em.createQuery("SELECT c FROM Hotel h  WHERE h.specificite = :specificite", Hotel.class);
		query.setParameter("specificite", specificite);
		return query.getResultList();	}
	
	
	@Override
	public void deleteHotel(Hotel hotel) {
		hotelRepository.delete(hotel);		
	}

}

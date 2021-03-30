package com.cartridge.demo.servicesImpl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cartridge.demo.entities.DetailHotel;
import com.cartridge.demo.repositories.DetailHotelRepository;
import com.cartridge.demo.services.DetailHotelService;

@Service("DetailHotelService")
public class DetailHotelServiceImpl implements DetailHotelService {
	
	@Autowired
	DetailHotelRepository detailHotelRepository;
	
	@PersistenceContext
	EntityManager em;
	
	@Override
	public void addDetailHotel(DetailHotel newdetail) {
	        // TODO Auto-generated method stub
	          detailHotelRepository.save(newdetail);
	
	}
	
	@Override
	public List<DetailHotel> getDetails() {
	        // TODO Auto-generated method stub
	        TypedQuery<DetailHotel> query  = em.createQuery("SELECT d FROM DetailHotel d ", DetailHotel.class);
	        return query.getResultList();
	}
	
	@Override
	public DetailHotel geDetailById(int id) {
	        // TODO Auto-generated method stub
	        return detailHotelRepository.getOne(id);
	}
	
	@Override
	public void deleteDetail(DetailHotel detailHotel) {
	        // TODO Auto-generated method stub
	        detailHotelRepository.delete(detailHotel);
	
	}

}

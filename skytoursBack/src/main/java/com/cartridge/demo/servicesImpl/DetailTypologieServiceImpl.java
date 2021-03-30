package com.cartridge.demo.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cartridge.demo.entities.detailLogement;
import com.cartridge.demo.entities.detailTypologie;
import com.cartridge.demo.repositories.DetailTypologieRepository;
import com.cartridge.demo.services.DetailTypologieService;

@Service("DetailTypologieService")
public class DetailTypologieServiceImpl implements DetailTypologieService{
	
	@Autowired
	DetailTypologieRepository detailTypologieRepository;

	@Override
	public detailTypologie addDT(detailTypologie detailTypologie) {
		// TODO Auto-generated method stub
		return detailTypologieRepository.save(detailTypologie) ;
	}

	@Override
	public void deletedetailRepartition(detailTypologie detailTypologie) {
		// TODO Auto-generated method stub
		detailTypologieRepository.delete(detailTypologie);
	}

	@Override
	public List<detailTypologie> getall() {
		// TODO Auto-generated method stub
		return detailTypologieRepository.findAll();
	}

	@Override
	public detailTypologie getdetailTypById(int id) {
		// TODO Auto-generated method stub
		return detailTypologieRepository.getOne(id);
	}

}

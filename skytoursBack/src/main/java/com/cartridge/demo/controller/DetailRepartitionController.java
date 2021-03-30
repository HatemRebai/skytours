package com.cartridge.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cartridge.demo.entities.Client;
import com.cartridge.demo.entities.DetailHotel;
import com.cartridge.demo.entities.Repartition;
import com.cartridge.demo.entities.detailRepartition;
import com.cartridge.demo.repositories.DetailRepartitionRepository;
import com.cartridge.demo.services.DetailHotelService;
import com.cartridge.demo.services.DetailRepartitionService;
import com.cartridge.demo.services.RepartitionService;

@CrossOrigin("*")
@RestController
@RequestMapping("/detailrepartition")
public class DetailRepartitionController {
	
	
	@Autowired
	DetailRepartitionRepository detailRepartitionRepository;
	
	@Autowired
	DetailRepartitionService detailRepartitionService;
	@Autowired
	DetailHotelService detailHotelService;
	
	@Autowired
	RepartitionService repartitionService ;


	@PostMapping("/addDr/{id}")
	public  detailRepartition addDr (@PathVariable Integer id ,
	@RequestParam Integer myrep , @RequestBody detailRepartition newDetailReapartition) {
		
		
		DetailHotel d = detailHotelService.geDetailById(id);
		Repartition r = repartitionService.getRepById(myrep);
		
		newDetailReapartition.setDetailHotel(d);
		newDetailReapartition.setRepartition(r);
		return detailRepartitionService.addDR(newDetailReapartition);
	}
	
	@GetMapping("/getAllDr")
	public List<detailRepartition> getAll() {
		
		return detailRepartitionService.getall();	
	}
	
	@PutMapping("/updateRepDetail/{id}")
	public @ResponseBody detailRepartition updateOne(@RequestBody detailRepartition detailrepartiton, @PathVariable ("id") Integer id) {
		

		detailRepartition dr = detailRepartitionService.getdetailRepById(id);
		dr.setPrixB(detailrepartiton.getPrixB());
		dr.setPrix1(detailrepartiton.getPrix1());
		dr.setPrix2(detailrepartiton.getPrix2());
		dr.setPrix3(detailrepartiton.getPrix3());
		dr.setPrix4(detailrepartiton.getPrix4());
		dr.setPrix5(detailrepartiton.getPrix5());
		dr.setPrix6(detailrepartiton.getPrix6());
		dr.setPrixT(detailrepartiton.getPrixT());
		
		return detailRepartitionService.addDR(dr);
	}
}



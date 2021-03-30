package com.cartridge.demo.controller;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
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

import com.cartridge.demo.entities.DetailHotel;
import com.cartridge.demo.entities.Repartition;
import com.cartridge.demo.entities.Supplement;
import com.cartridge.demo.entities.detailRepartition;
import com.cartridge.demo.entities.detailSupplement;
import com.cartridge.demo.repositories.DetailSupplementRepository;
import com.cartridge.demo.services.DetailHotelService;
import com.cartridge.demo.services.DetailSupplementService;
import com.cartridge.demo.services.SupplementService;

@CrossOrigin("*")
@RestController
@RequestMapping("/detailsupplement")
public class DetailSupplementController {
	
	@PersistenceContext
	EntityManager em;
	
	@Autowired
	DetailSupplementRepository detailSupplementRepository;
	
	@Autowired
	DetailSupplementService detailSupplementService;
	@Autowired
	DetailHotelService detailHotelService;
	
	@Autowired
	SupplementService supplementService ;

	@PostMapping("/addDs/{id}")
	public  detailSupplement addDr (@PathVariable Integer id ,
	@RequestParam Integer mysup , @RequestBody detailSupplement newDetailSupplement) {
		
		
		DetailHotel d = detailHotelService.geDetailById(id);
		Supplement s = supplementService.getSupById(mysup);
		
		newDetailSupplement.setDetailHotel(d);
		newDetailSupplement.setSupplement(s);
		return detailSupplementService.addDS(newDetailSupplement);
	}
	
	@GetMapping("/getAllDs")
	public List<detailSupplement> getAll() {
		
		return detailSupplementService.getall();	
	}
	
	@PutMapping("/updateSupDetail/{id}")
	public @ResponseBody detailSupplement updateOne(@RequestBody detailSupplement detailsupplement, @PathVariable ("id") Integer id) {
		

		detailSupplement ds = detailSupplementService.getdetailSupById(id);
		ds.setPrix(detailsupplement.getPrix());

		
		return detailSupplementService.addDS(ds);
	}
	
    @Transactional
    @GetMapping("getprixbyIdSupp/{id}")
    public List<?> getListTypologie(@PathVariable Integer id ) {

            Query q = em.createNativeQuery("SELECT prix FROM detail_supplement ds"
            		+ "						WHERE ds.supplement_id =:id ");
            q.setParameter("id", id);
            List<?> author = q.getResultList();
            return author;

    }
}

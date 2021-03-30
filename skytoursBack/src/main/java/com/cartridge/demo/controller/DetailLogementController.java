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
import com.cartridge.demo.entities.Logement;
import com.cartridge.demo.entities.detailLogement;
import com.cartridge.demo.repositories.DetailLogementRepository;
import com.cartridge.demo.services.DetailHotelService;
import com.cartridge.demo.services.DetailLogementService;
import com.cartridge.demo.services.LogementService;

@CrossOrigin("*")
@RestController
@RequestMapping("/detaillogement")
public class DetailLogementController {
	
    @PersistenceContext
    EntityManager em;
	
	@Autowired
	DetailLogementRepository detailLogementRepository;
	@Autowired
	DetailLogementService detailLogementService;
	@Autowired
	DetailHotelService detailHotelService;
	@Autowired
	LogementService LogementService;
	
/*	@PostMapping("/addDl")
	public  detailLogement addDl ( @RequestBody detailLogement newDetailLogement) {
		
		
		DetailHotel d = detailHotelService.geDetailById(id);
		Logement l = LogementService.getLogementById(mylog);
		
		newDetailLogement.setDetailHotel(d);
		newDetailLogement.setLogement(l); 
		return detailLogementService.addDL(newDetailLogement);
	} */

	
	 @PostMapping("/addDl/{id}")
	public  detailLogement addDl (@PathVariable Integer id ,
	@RequestParam Integer mylog , @RequestBody detailLogement newDetailLogement) {
		
		
		DetailHotel d = detailHotelService.geDetailById(id);
		Logement l = LogementService.getLogementById(mylog);
		
		newDetailLogement.setDetailHotel(d);
		newDetailLogement.setLogement(l);
		return detailLogementService.addDL(newDetailLogement);
	}

	@GetMapping("/getAllDl")
	public List<detailLogement> getAll() {
		
		return detailLogementService.getall();	
	}
	
	@PutMapping("/updateLogDetail/{id}")
	public @ResponseBody detailLogement updateOne(@RequestBody detailLogement detailLogement, @PathVariable ("id") Integer id) {
		

		detailLogement dl = detailLogementService.getdetailLogById(id);
		dl.setPrixA(detailLogement.getPrixA());
		dl.setPrixV(detailLogement.getPrixV());
		dl.setTauxM(detailLogement.getTauxM());
		dl.setTauxR(detailLogement.getTauxR());
	
		
		return detailLogementService.addDL(dl);
	}
    @Transactional
    @GetMapping("getprixbyIdLog/{id}")
    public List<?> getListTypologie(@PathVariable Integer id ) {

            Query q = em.createNativeQuery("SELECT prixb FROM detail_logement d"
            		+ "						WHERE d.logement_id =:id ");
            q.setParameter("id", id);
            List<?> author = q.getResultList();
            return author;

    }
}

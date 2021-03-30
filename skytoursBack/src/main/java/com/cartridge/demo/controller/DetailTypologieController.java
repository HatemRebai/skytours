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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cartridge.demo.entities.DetailHotel;
import com.cartridge.demo.entities.Supplement;
import com.cartridge.demo.entities.Typologie;
import com.cartridge.demo.entities.detailSupplement;
import com.cartridge.demo.entities.detailTypologie;
import com.cartridge.demo.repositories.DetailTypologieRepository;
import com.cartridge.demo.services.DetailHotelService;
import com.cartridge.demo.services.DetailTypologieService;
import com.cartridge.demo.services.TypologieService;

@CrossOrigin("*")
@RestController
@RequestMapping("/detailtypologie")
public class DetailTypologieController {

	
    @PersistenceContext
    EntityManager em;
	
	@Autowired
	DetailTypologieRepository detailTypologieRepository;
	@Autowired
	DetailTypologieService  detailTypologieService;
	@Autowired
	DetailHotelService detailHotelService;
	@Autowired
	TypologieService typologieService;
	
	@GetMapping("/addDT/{id}")
	public  detailTypologie addDt (@PathVariable Integer id ,@RequestParam Integer mytyp) {
		
		
		DetailHotel d = detailHotelService.geDetailById(id);
		Typologie t= typologieService.getTypById(mytyp);
		detailTypologie newDetailTypologie = new detailTypologie();
		
		newDetailTypologie.setDetailHotel(d);
		newDetailTypologie.setTypologie(t);
		return detailTypologieService.addDT(newDetailTypologie);
	}
	
	
    @Transactional
    @GetMapping("getTypologiebyDetail/{id}")
    public List<?> getListTypologie(@PathVariable Integer id , @RequestParam Integer nbrP ) {

            Query q = em.createNativeQuery("SELECT designation FROM typologie t , detail_typologie d "
            		+ "						WHERE t.id = d.typologie_id "
            		+ "						AND d.detail_id =:id "
            		+ "						AND t.nbrelit =:nbrP");
            q.setParameter("id", id);
            q.setParameter("nbrP", nbrP);
            List<?> author = q.getResultList();
            return author;

    }
}

package com.cartridge.demo.controller;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cartridge.demo.entities.DetailHotel;
import com.cartridge.demo.entities.Hotel;
import com.cartridge.demo.entities.Logement;
import com.cartridge.demo.entities.Repartition;
import com.cartridge.demo.entities.Specification;
import com.cartridge.demo.entities.Supplement;
import com.cartridge.demo.entities.Typologie;
import com.cartridge.demo.services.DetailHotelService;
import com.cartridge.demo.services.HotelService;
import com.cartridge.demo.services.LogementService;
import com.cartridge.demo.services.RepartitionService;
import com.cartridge.demo.services.SpecificationService;
import com.cartridge.demo.services.SupplementService;
import com.cartridge.demo.services.TypologieService;

@CrossOrigin("*")
@RestController
@RequestMapping("/detailhotel")
public class DetailHotelController {

	
	@Autowired
    DetailHotelService detailHotelService;

    @PersistenceContext
    EntityManager em;

    @Autowired
    HotelService hotelService;
    @Autowired
    LogementService logementService;
    @Autowired
    SpecificationService specificationService;
    @Autowired
    SupplementService supplementService;
    @Autowired
    RepartitionService repartitionService;
    @Autowired
    TypologieService typologieService;




    @PostMapping("/add/{id}")
    public DetailHotel saveDetail (@PathVariable Integer id, DetailHotel newdetail) {

            Hotel h = hotelService.getHotelById(id);
            newdetail.setHotel(h);
            detailHotelService.addDetailHotel(newdetail);
            return newdetail;
    }
    @Transactional
    @GetMapping("/addlogementTodetail/{id}")
    public void savedetailLogement (@PathVariable Integer id, @RequestParam Integer mylog  ) {

            DetailHotel d = detailHotelService.geDetailById(id);
            Logement l = logementService.getLogementById(mylog);
            {
                em.createNativeQuery("INSERT INTO detail_logement "
                        + " (logement_id, detail_id) "
                        + " VALUES (?, ?)")
                .setParameter(1,l )
                .setParameter(2,d)
                .executeUpdate();
                }
    }

    @Transactional
    @GetMapping("/addspecificationTodetail/{id}")
    public void savedetailSpecification (@PathVariable Integer id, @RequestParam Integer myspec  ) {

            DetailHotel d = detailHotelService.geDetailById(id);
            Specification s =specificationService.getSpecById(myspec); 
            {
                em.createNativeQuery("INSERT INTO detail_specification "
                        + " (specification_id, detail_id) "
                        + " VALUES (?, ?)")
                .setParameter(1,s )
                .setParameter(2,d)
                .executeUpdate();
                }
    }

    @Transactional
    @GetMapping("/addsupplementTodetail/{id}")
    public void savedetailSupplement (@PathVariable Integer id, @RequestParam Integer mysup  ) {

            DetailHotel d = detailHotelService.geDetailById(id);
            Supplement s = supplementService.getSupById(mysup);
            {
                em.createNativeQuery("INSERT INTO detail_supplement "
                        + " (supplement_id, detail_id) "
                        + " VALUES (?, ?)")
                .setParameter(1,s )
                .setParameter(2,d)
                .executeUpdate();
                }
    }
     @Transactional
     @GetMapping("/addtypologieTodetail/{id}")
     public void savedetailTypologie (@PathVariable Integer id, @RequestParam Integer mytyp  ) {

             DetailHotel d = detailHotelService.geDetailById(id);
             Typologie t = typologieService.getTypById(mytyp);
             {
                 em.createNativeQuery("INSERT INTO detail_typologie "
                         + " (typologie_id, detail_id) "
                         + " VALUES (?, ?)")
                 .setParameter(1,t )
                 .setParameter(2,d)
                 .executeUpdate();
                 }
     }

     @Transactional
     @GetMapping("/addrepartitionTodetail/{id}")
     public void savedetailRepartition (@PathVariable Integer id, @RequestParam Integer myrep  ) {

             DetailHotel d = detailHotelService.geDetailById(id);
             Repartition r = repartitionService.getRepById(myrep);
             {
                 em.createNativeQuery("INSERT INTO detail_repartition "
                         + " (repartition_id, detail_id) "
                         + " VALUES (?, ?)")
                 .setParameter(1,r )
                 .setParameter(2,d)
                 .executeUpdate();
                 }
     }
     @Transactional
     @GetMapping("getlistLogementbyDetail/{idD}")
     public List<?> getListLogement(@PathVariable Integer idD , @RequestParam String du , @RequestParam String au  ) {

    	// LocalDate date_du  = LocalDate.parse(du);
    	// LocalDate date_au  = LocalDate.parse(au);
             Query q = em.createNativeQuery("SELECT l.id, designation, prixA,prixV "
             		+ "FROM logement l , detail_logement d "
             		+ "WHERE l.id = d.logement_id "
             		+ "AND  d.detail_id =:idD "
             		+ "AND DATE(d.du)<=:du "
             		+ "AND DATE(d.au)>=:au");
             q.setParameter("idD", idD);
             q.setParameter("du", du);
             q.setParameter("au", au);
             List<?> author = q.getResultList();
             return author;

     }

     @Transactional
     @GetMapping("getlistSupplementbyDetail/{id}")
     public List<?> getListSupplement(@PathVariable Integer id  ) {


             Query q = em.createNativeQuery("SELECT s.id,designation,prix FROM supplement s , detail_supplement d "
             		+ "WHERE s.id = d.supplement_id "
             		+ "AND d.detail_id =:id");
             q.setParameter("id", id);
             List<?> author = q.getResultList();
             return author;

     }

     @Transactional
     @GetMapping("getlistRepartitiontbyDetail/{id}")
     public List<?> getListRepartition(@PathVariable Integer id  ) {


             Query q = em.createNativeQuery("SELECT repartition,prixB FROM repartition r , detail_repartition d WHERE r.id = d.repartition_id AND d.detail_id =:id");
             q.setParameter("id", id);
             List<?> author = q.getResultList();
             return author;

     }

     @Transactional
     @GetMapping("getlistSpecificationbyDetail/{id}")
     public List<?> getListSpecification(@PathVariable Integer id  ) {

             Query q = em.createNativeQuery("SELECT s.id , designation FROM specification s , detail_specification d WHERE s.id = d.specification_id AND d.detail_id =:id");
             q.setParameter("id", id);
             List<?> author = q.getResultList();
             return author;

     }

     @Transactional
     @GetMapping("getlistTypologiebyDetail/{id}")
     public List<?> getListTypologie(@PathVariable Integer id , @RequestParam Integer nbrP ) {

             Query q = em.createNativeQuery("SELECT * FROM typologie t , detail_typologie d "
             		+ "						WHERE t.id = d.typologie_id "
             		+ "						AND d.detail_id =:id "
             		+ "						AND t.nbrelit =:nbrP");
             q.setParameter("id", id);
             q.setParameter("nbrP", nbrP);
             List<?> author = q.getResultList();
             return author;

     }
    @GetMapping("/getDetailByHotelId/{id}")
    public int getDeatil(@PathVariable Integer id ) {


            Hotel h = hotelService.getHotelById(id);
            DetailHotel d = detailHotelService.geDetailById(h.getId());
            return d.getId();

    }

    @GetMapping("/DetailHotel/{id}")
    public DetailHotel getone(@PathVariable("id")Integer id){

            DetailHotel d = detailHotelService.geDetailById(id);
            return d;
    }

    @GetMapping("/DetailHotel")
    public List<DetailHotel> getall(){

            return detailHotelService.getDetails();
    }

    @DeleteMapping("/deletDetail/{id}")
    public void deletDetails(@PathVariable("id")Integer id , DetailHotel detailHotel) {

            DetailHotel d = detailHotelService.geDetailById(id);
            detailHotelService.deleteDetail(d);
    }

 /*@PutMapping("/updateDetail/{id}")
 public DetailHotel updateDetail (@PathVariable("id")Integer id , DetailHotel detailHotel) {

         DetailHotel d = detailHotelService.geDetailById(id);

         d.setHotel(detailHotel.getHotel());

         d.setLogement(detailHotel.getLogement());
         d.setRepartition(detailHotel.getRepartition());
         d.setSpecification(detailHotel.getSpecification());
         d.setTypologie(detailHotel.getTypologie());
         d.setSupplement(detailHotel.getSupplement());

         return detailHotelService.addDetailHotel(detailHotel);
 }*/


}

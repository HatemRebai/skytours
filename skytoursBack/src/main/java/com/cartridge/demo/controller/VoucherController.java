package com.cartridge.demo.controller;

import java.util.List;

import com.cartridge.demo.entities.Voucher;
import com.cartridge.demo.repositories.VoucherRepository;
import com.cartridge.demo.services.ReservationService;
import com.cartridge.demo.services.VoucherService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/voucher")
public class VoucherController {
	
	@Autowired
	VoucherRepository voucherRepository;
	@Autowired
	VoucherService voucherService;
	@Autowired
	ReservationService reservationService;
	
	@PostMapping("/addVoucher")
	public Voucher addV	(@RequestBody Voucher voucher) {
		
		
	return voucherService.addVoucher(voucher);
	}
	
	@GetMapping("getAllVoucher")
	public List<Voucher> getAll(){
		
	return voucherService.getAll();
	}
	

}

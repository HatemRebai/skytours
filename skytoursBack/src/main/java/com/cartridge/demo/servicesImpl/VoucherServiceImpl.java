package com.cartridge.demo.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cartridge.demo.entities.Voucher;
import com.cartridge.demo.repositories.VoucherRepository;
import com.cartridge.demo.services.VoucherService;

@Service("VoucherService")
public class VoucherServiceImpl implements VoucherService{
	
	@Autowired
	VoucherRepository voucherRepository;

	@Override
	public Voucher addVoucher(Voucher voucher) {
		return voucherRepository.save(voucher);
		
	}
	@Override
	public Voucher getVouById(int id) {
		
		return voucherRepository.getOne(id);
	}
	@Override
	public List<Voucher> getAll() {
		
		return voucherRepository.findAll();
	}

	@Override
	public void deleteVoucher(Voucher voucher) {
		voucherRepository.delete(voucher);
		
	}

}

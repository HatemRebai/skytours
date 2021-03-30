package com.cartridge.demo.services;

import java.util.List;

import com.cartridge.demo.entities.Voucher;

public interface VoucherService {
	public Voucher addVoucher(Voucher voucher);
	public Voucher getVouById (int id);
	public List<Voucher> getAll();
	public void deleteVoucher (Voucher voucher);

}

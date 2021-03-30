package com.cartridge.demo.services;

import java.util.List;

import com.cartridge.demo.entities.detailSupplement;


public interface DetailSupplementService {
	public detailSupplement addDS (detailSupplement detailsupplement);
	public void deleteSupplement(detailSupplement detailsupplement);
	public List<detailSupplement> getall();
	public detailSupplement getdetailSupById(int id);

}

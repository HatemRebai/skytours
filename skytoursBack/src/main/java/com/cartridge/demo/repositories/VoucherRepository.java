package com.cartridge.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cartridge.demo.entities.Voucher;


@Repository("voucherrepository")
public interface VoucherRepository extends JpaRepository<Voucher, Integer>{
  
}

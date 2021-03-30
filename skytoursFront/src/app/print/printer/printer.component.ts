import { FactureClient } from '../../interfaces/factureclient';
import { FactureclientService } from '../../services/factureclient.service';
import { Voucher } from '../../interfaces/voucher';
import { VoucherService } from '../../services/voucher.service';
import { Client } from '../../interfaces/client';
import { Hotel } from '../../interfaces/hotel';
import { HotelService } from '../../services/hotel.service';
import { ClientService } from '../../services/client.service';
import { Reservation } from '../../interfaces/reservation';
import { ReservationService } from '../../services/reservation.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.css']
})
export class PrinterComponent implements OnInit , AfterViewInit {

  constructor(private reservationService: ReservationService , private clientService: ClientService ,
              private hotelService: HotelService  , private voucherService: VoucherService ,
               private factureclientService: FactureclientService) { }

  reservation: Reservation [];
  myReservation: Array<any> = [];
  voucher: Voucher;
  factureClient: FactureClient;
  myFacture: Array<any> = [];

  idR: any;
  today: any;

  myClient: Client;
  myHotel: Hotel;

  thisClient: any;
  thisHotel: any;

  Sgl: any;
  Dbl: any;
  Trpl: any;
  Qdr: any;
  Familiale: any;
  Suite: any;
  SuiteJunior: any;
  tvaArray = [{value: 7 }, {value: 12 }, {value: 18 }];
  droitTimbreArray = [{value: 0.600 }, {value: 0.650 }, {value: 0.700 }
                     , {value: 0.750 }, {value: 0.800 }, {value: 0.850 }
                     , {value: 0.900}, {value: 0.950 }];
  tva: any;
  prixtva: any;
  droitTimbre: any;
  prix_ht: any;

  str: String;
  isShownV = false;
  isShownR = false;
  isShownF = false;
  isValid = false;
  isVoucher =  false;
  isReservation = false;
  isFacture = false;
  isSubmit = false;
  isButtonAddFClicked = false;


  voucherForm = new FormGroup ({
    id_reservation: new FormControl ('', [Validators.required, ]),
    date_voucher: new FormControl ('', [Validators.required, ]),
    observation: new FormControl ('', [Validators.required, ]),
  });

  factureForm = new FormGroup ({
    id: new FormControl ('', [Validators.required, ]),
    date: new FormControl ('', [Validators.required, ]),
    prixt_ht: new FormControl ('', [Validators.required, ]),
    prixu_ttc: new FormControl ('', [Validators.required, ]),
    tva: new FormControl ('', [Validators.required, ]),
    prix_tva: new FormControl ('', [Validators.required, ]),
    prix_dtimbre: new FormControl ('', [Validators.required, ]),
    prixt_ttc: new FormControl ('', [Validators.required, ]),
    prixt_ch: new FormControl ('', [Validators.required, ]),
    rib: new FormControl ('', [Validators.required, ]),
    reservation: new FormControl ('', [Validators.required, ]),
    total_ttc: new FormControl ('', [Validators.required, ]),

  });


  ngOnInit(): void {
    (async () => {
      this.lastReservation();
      await this.delay(200);
      this.getPrintDetails();
      })();

  }

  ngAfterViewInit(): void {}

  onVoucherButtonClicked() {
    this.isVoucher = !this.isVoucher;
    if (this.isReservation === true || this.isFacture === true ) {
      this.isReservation =  false;
      this.isFacture = false;
    }
    }

  onReservationButtonClicked() {

      this.isReservation = !this.isReservation;
      if (this.isVoucher === true || this.isFacture === true) {
        this.isVoucher =  false;
        this.isFacture = false;
      }
    }
    onFactureButtonClicked() {
      this.isFacture = !this.isFacture;
      if (this.isVoucher === true || this.isReservation === true) {
        this.isVoucher =  false;
        this.isReservation = false;
      }
    }

  onVoucherShow() {
    this.isShownV = !this.isShownV;
    const myvoucher = document.getElementById('printMyRes');
    const style = myvoucher.style.display = 'block';
  }

  onReservationShow() {
    this.isShownR = !this.isShownR;
  }
  onAddFactureClick() {
    this.isButtonAddFClicked = !this.isButtonAddFClicked;
  }
  onFactureShow() {
    this.isShownF = !this.isShownF;
  }

  onPrint() {
    const printContents = document.getElementById('printMe').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();

    document.body.innerHTML = originalContents;
    window.location.reload();

  }

  onPrintRes() {

    const printContents = document.getElementById('printMyRes').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();

    document.body.innerHTML = originalContents;
    window.location.reload();

  }

  onPrintFacture() {

    const printContents = document.getElementById('printMyFac').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();

    document.body.innerHTML = originalContents;
    window.location.reload();

  }

 /* getReservation() {
    this.reservationService.getAll().subscribe((data) => {
      this.reservation = data;
      console.log(data);
   });
  } */
/*
  getReservationById(id: any) {
    this.myReservation = [];
    this.reservationService.getOne(id).subscribe((data) => {
      this.myReservation.push(data);
      console.log( this.myReservation);
    });
  } */

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

 /* resSelected(id: any) {
    (async () => {
      this.getReservationById(id);
      await this.delay(300);
      this.str =  this.myReservation[0].typologie.replace(',', ' ');
      this.thisClient = this.myReservation[0].client;
      this.thisHotel = Number(this.myReservation[0].hotel);
      this.getClientByName(this.thisClient);
      this.getHotelbyId(this.thisHotel);
      this.getNbrOfTypDes();
      console.log(this.myReservation[0].typologie);
    })();
  } */
  lastReservation() {
    this.myReservation = [];
    this.reservationService.getTheLast().subscribe(data => {
      this.myReservation.push(data);
      console.log(this.myReservation);
    });
  }
  getPrintDetails () {
    console.log(this.myReservation);
      const myTypolgie =  this.myReservation[0].typologie;
      this.str =  myTypolgie.replace(',', ' ');
      this.thisClient = this.myReservation[0].client;
      this.thisHotel = Number(this.myReservation[0].hotel);
      this.getClientByName(this.thisClient);
      this.getHotelbyId(this.thisHotel);
      this.getNbrOfTypDes();
  }

  getHotelbyId(id: any) {
    this.hotelService.getOne(id).subscribe((data) => {
      this.myHotel = data;
      console.log(this.myHotel);
    });
  }

  getClientByName(name: any) {
    this.clientService.getByName(name).subscribe((data) => {
      this.myClient = data;
      console.log(this.myClient);
    });
  }

  getNbrOfTypDes() {
    this.Sgl = 0;
    this.Dbl = 0;
    this.Trpl = 0;
    this.Qdr = 0;
    this.Familiale = 0;
    this.Suite = 0;
    this.SuiteJunior = 0;

    (async () => {
    console.log(this.str);
    await this.delay(500);
    if (this.str.includes('SGL') === true) {
      this.Sgl = this.str.match(new RegExp('SGL' , 'g')).length;
      }
      if (this.str.includes('DBL') === true) {
        this.Dbl = this.str.match(new RegExp('DBL' , 'g')).length;
      }
      if (this.str.includes('TRPL') === true) {
        this.Trpl = this.str.match(new RegExp('TRPL' , 'g')).length;
      }
      if (this.str.includes('QDR') === true) {
        this.Qdr = this.str.match(new RegExp('QDR' , 'g')).length;
      }
      if (this.str.includes('Familiale') === true) {
        this.Familiale = this.str.match(new RegExp('Familiale' , 'g')).length;
      }
      if (this.str.includes('Suite') === true) {
        this.Suite = this.str.match(new RegExp('Suite' , 'g')).length;
      }
      if (this.str.includes('Suite Junior') === true) {
        this.SuiteJunior = this.str.match(new RegExp('Suite Junior' , 'g')).length;
      }

  })();
  }
  /*
    (async () => {
      await this.delay(500);
      })();
  */

  addVoucherToLastRes() {
    (async () => {
      this.isSubmit = true;

    this.lastReservation();
    await this.delay(300);
    this.isValid = true;
    this.isShownV = false;
    this.addVoucher();
    const x = document.getElementById('snackbar');

    // Add the "show" class to DIV
    x.className = 'show';
    // After 3 seconds, remove the show class from DIV
    setTimeout(function() { x.className = x.className.replace('show', ''); }, 3000);
    })();

  }

  addVoucher() {
    (async () => {

      this.idR = this.myReservation[0].id;
      const date = new Date();

      const dd = String(date. getDate()). padStart(2, '0');
      const mm = String(date. getMonth() + 1). padStart(2, '0');
      const yyyy = date. getFullYear();
      this.today = yyyy + '-' + mm + '-' + dd;

      this.voucherForm.controls['date_voucher'].setValue(this.today);
      this.voucherForm.controls['id_reservation'].setValue(this.idR);

      await this.delay(500);
      return this.voucherService.add(this.voucherForm.value).subscribe((data) => {
      this.voucher = data;
      console.log(this.voucher);
    });
  })();
  }

  onTvaSelected(event) {
      const Selected = document.getElementById('tva') as HTMLSelectElement;
      const tvaSelected = Number(Selected.value);
      this.tva = tvaSelected;
      this.prix_ht = Number(this.myReservation[0].prixres);
      const nbreP = this.myReservation[0].totalp ;
      this.prixtva = (this.prix_ht  * (Number(this.tva) / 100));
      const tvaDouble = (this.prixtva).toFixed(3) ;
      console.log(tvaDouble);
      const TotalSansTimbre = (this.prixtva + this.prix_ht).toFixed(3) ;
      const prixUTTc = (TotalSansTimbre / nbreP).toFixed(3);
      this.factureForm.controls['prix_tva'].setValue(tvaDouble);
      this.factureForm.controls['prixt_ht'].setValue(this.prix_ht);
      this.factureForm.controls['prixu_ttc'].setValue(prixUTTc);
      this.factureForm.controls['total_ttc'].setValue(TotalSansTimbre);
  }

  ondTimbreSelected(event) {
      const Selected = document.getElementById('timbre') as HTMLSelectElement;
      const timbreSelected = Number(Selected.value);
      this.droitTimbre = timbreSelected;
      const TotalTTc = (this.prixtva + this.prix_ht + Number(this.droitTimbre)).toFixed(3) ;
      this.factureForm.controls['prixt_ttc'].setValue(Number(TotalTTc));
      this.factureForm.controls['prix_dtimbre'].setValue(this.droitTimbre);
      console.log(TotalTTc);

  }

  addfactureToLastRes() {
    (async () => {
      this.isSubmit = true;

    this.lastReservation();
    await this.delay(300);
    this.isShownV = false;
    this.addFacture();
    })();

  }
  addFacture() {
    (async () => {

      this.idR = Number(this.myReservation[0].id);
      const date = new Date();

      const dd = String(date. getDate()). padStart(2, '0');
      const mm = String(date. getMonth() + 1). padStart(2, '0');
      const yyyy = date. getFullYear();
      this.today = yyyy + '-' + mm + '-' + dd;

      this.factureForm.controls['date'].setValue(this.today);
      this.factureForm.controls['tva'].setValue(this.tva);



      this.factureForm.controls['reservation'].setValue(this.idR);
      await this.delay(500);
      return this.factureclientService.add(this.factureForm.value).subscribe((data) => {
      this.myFacture.push(data);
      console.log(this.myFacture);
    });
  })();
  }

}

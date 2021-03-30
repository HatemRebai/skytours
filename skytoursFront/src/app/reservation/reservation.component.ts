import { Detaillogement } from './../interfaces/detaillogement';
import { Specification } from './../interfaces/specification';
import { Supplement } from './../interfaces/supplement';
import { Logement } from './../interfaces/logement';
import { DetaillogementService } from './../services/detaillogement.service';
import { Reservation } from './../interfaces/reservation';
import { ReservationService } from './../services/reservation.service';
import { DetailtypologieService } from './../services/detailtypologie.service';
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { jqxCalendarComponent } from 'jqwidgets-ng/jqxcalendar';
import { Client } from '../interfaces/client';
import { Hotel } from '../interfaces/hotel';
import { Repartition } from '../interfaces/repartition';
import { Typologie } from '../interfaces/typologie';
import { ClientService } from '../services/client.service';
import { DetailhotelService } from '../services/detailhotel.service';
import { HotelService } from '../services/hotel.service';
import { DetailsupplementService } from '../services/detailsupplement.service';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements AfterViewInit {

  @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
  @ViewChild('Button') myHTMLButton: jqxButtonComponent;

 // @ViewChild('myCalendar', { static: false }) myCalendar: jqxCalendarComponent;
  @ViewChild('periode', { static: false }) html: ElementRef;
  @ViewChild('DateNais', { static: false }) DateN: ElementRef;
  @ViewChild('warning', { static: false }) warning: ElementRef;




  client: Client[];
  hotel: Hotel[];
  logement: Logement[];
  detailLogement: Detaillogement [];
  specification: Specification[];
  supplement: Supplement[];
  typologie: Typologie[];
  repartition: Repartition[];
  reservation: Reservation[];
  myReservation: Reservation;
  // logementFormArr: FormArray;
  logArray: Array<any>;
  // specificationFormArr: FormArray;
  specArray: Array<any> = [];
  // typologieFormArr: FormArray;
  typArray: Array<any> = [];
  typArrayRes: Array<any> = [];
  // supplementFormArr: FormArray;
  suppArray: Array<any> = [];
  // repartitionFormArr: FormArray;
  repArray: Array<any> = [];
  idH: any;
  idD: any;

  visibleRrowIndex: number = null;
  nbreChambre = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }
    , { value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }, { value: 9 }, { value: 10 }];
  adultes = [{ value: 0 }, { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];
  enfants = [{ value: 0 }, { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];
  age: any;
  chambreOpt: number;
  ArrayChambre: Array<any> = [];
  Adulte: number;
  NbrAdulte = 0;
  Enfant: number;
  NbrEnfant = 0;
  NbreEnfArr = [];
  NbreBebeArr = [];
  EnfantArr: Array<Array<any>> = [[]];
  DateNaisArr: Array<Array<any>> = [[]];
  Bebe = 0;
  DateNais: any;
  today: any;
  dateArrivee: any;
  dateDepart: any;
  Personne: number;
  periode: number;
  typologieFormArr: FormArray;
  logementFormArr: FormArray;
  myTypologieArr: Array<any> = [];
  myLogementArr: Array<any> = [];
  myPrixALogementArr: Array<any> = [];
  myPrixVLogementArr: Array<any> = [];
  prixlogement: number;
  mySupplementArr: Array<any> = [];
  myPrixSupplementArr: Array<any> = [];
  prixsupplement: number;
  mySpecificationArr: Array<any> = [];
  specificationFormArr: FormArray;
  supplementFormArr: FormArray;
  adulteFormArr: FormArray;
  enfantFormArr: FormArray;
  observations: String;

  FromDate: any;
  ToDate: any;
  DateSys: any;
  isValid = false;
  isSubmitted = false;

  reservationForm = new FormGroup({
    client: new FormControl('', [Validators.required,]),
    hotel: new FormControl('', [Validators.required,]),
    date_reservation: new FormControl('', [Validators.required,]),
    date_arrivee: new FormControl('', [Validators.required,]),
    date_depart: new FormControl('', [Validators.required,]),
    adulte: new FormControl('', [Validators.required,]),
    duree: new FormControl('', [Validators.required,]),
    enfant: new FormControl('', [Validators.required,]),
    bebe: new FormControl('', [Validators.required,]),
    totalp: new FormControl('', [Validators.required,]),
    typologie: new FormControl('', [Validators.required,]),
    logement: new FormControl('', [Validators.required,]),
    prixlogement: new FormControl('', [Validators.required,]),
    supplement: new FormControl('', [Validators.required,]),
    prixsupplement: new FormControl('', [Validators.required,]),
    specification: new FormControl('', [Validators.required,]),
    prixachat: new FormControl('', [Validators.required,]),
    prixvente: new FormControl('', [Validators.required,]),
    observations: new FormControl('', [Validators.required,])

    /*  typologieFormArr: new FormArray([new FormGroup({})]),
      logementFormArr: new FormArray([new FormGroup({})]),
      specificationFormArr: new FormArray([new FormGroup({})]),
      supplementFormArr: new FormArray([new FormGroup({})]), */
  });




  constructor(private clientservice: ClientService, private hotelservice: HotelService,
    private detailhotelService: DetailhotelService, private detailtypologieService: DetailtypologieService,
    private reservationService: ReservationService, private detaillogementService: DetaillogementService,
    private detailsupplementService: DetailsupplementService) {
    setInterval(() => {
      this.DateSys = new Date();
    }, 1000);
  }

  source: any = {
    localdata: null,
    datafields: [
      { name: 'id', type: 'number' },
      { name: 'date_reservation', type: 'string' },
      { name: 'date_arrivee', type: 'string' },
      { name: 'date_depart', type: 'string' },
      { name: 'client', type: 'string' },
      { name: 'hotel', type: 'string' },
      { name: 'logement', type: 'string' },
      { name: 'specification', type: 'string' },
      { name: 'supplement', type: 'string' },
      { name: 'duree', type: 'number' },
      { name: 'totalp', type: 'number' },
      { name: 'prixachat', type: 'double' },
      { name: 'prixvente', type: 'double' }
    ],
    datatype: 'json',
    sortcolumn: 'id',
    sortdirection: 'asc',
    altRows: true,
    sortable: true,
  };


  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [

    { text: 'ID', dataField: 'id', width: 40, cellsAlign: 'center'},
    { text: 'DATE RESERVATION', dataField: 'date_reservation', width: 140, cellsAlign: 'center' },
    { text: 'DU', dataField: 'date_arrivee', width: 90, cellsAlign: 'center' },
    { text: 'AU', dataField: 'date_depart' , width: 90, cellsAlign: 'center'},
    { text: 'HOTEL', dataField: 'hotel' , width: 70, cellsAlign: 'center'},
    { text: 'CLIENT', dataField: 'client' , width: 100, cellsAlign: 'center'},
    { text: 'Logement', dataField: 'logement' , width: 80, cellsAlign: 'center'},
    { text: 'Specification', dataField: 'specification', width: 100, cellsAlign: 'center' },
    { text: 'Supplement', dataField: 'supplement' , width: 90, cellsAlign: 'center'},
    { text: 'T_PAX', dataField: 'totalp', width: 60, cellsAlign: 'center' },
    { text: 'PRIX_ACHAT', dataField: 'prixachat', width: 90, cellsAlign: 'center' },
    { text: 'PRIX_VENTE', dataField: 'prixvente', width: 90, cellsAlign: 'center' },
  ];


  ready = (): void => {

    const localizationObject = {
        filterstringcomparisonoperators: ['contains', 'does not contain'],
        // filter numeric comparison operators.
        filternumericcomparisonoperators: ['less than', 'greater than'],
        // filter date comparison operators.
        filterdatecomparisonoperators: ['less than', 'greater than'],
        // filter bool comparison operators.
        filterbooleancomparisonoperators: ['equal', 'not equal']
    };
    this.myGrid.localizestrings(localizationObject);
  }

  updatefilterconditions = (type: string, defaultconditions: any): string[] => {

    const stringcomparisonoperators = ['CONTAINS', 'DOES_NOT_CONTAIN'];
    const numericcomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
    const datecomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
    const booleancomparisonoperators = ['EQUAL', 'NOT_EQUAL'];
    switch (type) {
        case 'stringfilter':
            return stringcomparisonoperators;
        case 'numericfilter':
            return numericcomparisonoperators;
        case 'datefilter':
            return datecomparisonoperators;
        case 'booleanfilter':
            return booleancomparisonoperators;
    }
  }

  xlsBtnOnClick(): void {
    this.myGrid.exportview('xlsx', 'Liste Reservations');
  }
  pdfBtnOnClick() {
    this.myGrid.exportview('pdf', 'Liste Reservations');
}

  ngAfterViewInit(): void {
    this.getClient();
    this.getHotel();
    this.myGrid.autoshowloadelement();
    this.reservationList();



    /*  this.logementFormArr = this.reservationForm.get('logementFormArr') as FormArray;
      this.specificationFormArr = this.reservationForm.get('specificationFormArr') as FormArray;
      this.typologieFormArr = this.reservationForm.get('typologieFormArr') as FormArray;
      this.supplementFormArr = this.reservationForm.get('supplementFormArr') as FormArray;
      this.adulteFormArr = this.reservationForm.get('adulteFormArr') as FormArray;
      this.enfantFormArr = this.reservationForm.get('enfantFormArr') as FormArray;*/
  }

  getClient() {
    this.clientservice.getClient().subscribe((data) => {
      this.client = data;
      console.log(data);
    });
  }

  getHotel() {
    this.hotelservice.getHotel().subscribe((data) => {
      this.hotel = data;
      console.log(data);
    });
  }

  getDetailByHotelId(id) {
    this.detailhotelService.getDetailByHotelId(id).subscribe((data) => {
      this.idD = data;
      console.log('id Detail est ' + this.idD);
    });
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  isSelected(id) {
    (async () => {
      this.getDetailByHotelId(id);
      await this.delay(300);
      this.detailhotelService.getspecifiationByHotel(this.idD).subscribe((specifiation) => {
        this.specArray = specifiation; // Array.from(new Set(specifiation));
        console.log('specificationArray = ' + this.specArray);
      });

      /*  this.detailhotelService.gettypolologiebyHotel(this.idD).subscribe((typologie) => {
          this.typArray = typologie ; //Array.from(new Set(typolologie));
          console.log('typologie Array =' + this.typArray);
        }); */

      this.detailhotelService.getsupplementByHotel(this.idD).subscribe((supplement) => {
        this.suppArray = supplement; //Array.from(new Set(supplement));
        console.log('suuplementArray = ' + this.suppArray);
      });

      this.detailhotelService.getrepartitionByHotel(this.idD).subscribe((repartition) => {
        this.repArray = repartition; //Array.from(new Set(repartition));
        console.log('repartitionArray = ' + this.repArray);
      });
    })();
  }

  onOptionsSelected(event) {
    this.ArrayChambre = [];
    const Selected = document.getElementById('nbreCH') as HTMLSelectElement;
    const id = Number(Selected.value);
    this.chambreOpt = id;
    console.log(this.chambreOpt);
    for (let i = 1; i <= this.chambreOpt; i++) {
      this.ArrayChambre.push(i);
      console.log(Array.from(new Set(this.ArrayChambre)));
    }
  }

  onPersonneSelected(event) {
    this.Personne = 0;
    this.NbrAdulte = 0;
    this.NbrEnfant = 0;
    this.Bebe = 0;
    for (let i = 0; i <= this.chambreOpt; i++) {
      const SelectedAd = document.getElementById(`adulte${i}`) as HTMLSelectElement;
      const SelectedEnf = document.getElementById(`enfant${i}`) as HTMLSelectElement;
      if (SelectedAd == null && SelectedEnf == null) {
        console.log('Svp selectionne au moins une chambre');
      } else {
        const nbrAdulte = Number(SelectedAd.value);
        this.Adulte = nbrAdulte;
        this.NbrAdulte = this.NbrAdulte + nbrAdulte;
        const nbrEnf = Number(SelectedEnf.value);
        this.Enfant = nbrEnf;
        //  this.NbrEnfant = this.NbrEnfant + nbrEnf;
        // console.log(this.NbrEnfant);
        if (SelectedEnf == null && SelectedAd != null) {
          this.Personne = this.Adulte;
          this.getTypologie();
        } else if (SelectedAd == null && SelectedEnf != null) {
          this.Personne = this.Enfant;
          this.typArray = [];
          this.getTypologie();
        } else {
          const nbrPr = this.Adulte + this.Enfant;
          this.Personne = nbrPr;
          this.typArray = [];
          this.getTypologie();
        }

      }
    }
  }

  ifAgeBebeVerif(event: any, index: any) {

    const dd = String(this.DateSys.getDate()).padStart(2, '0');
    const mm = String(this.DateSys.getMonth() + 1).padStart(2, '0');
    const yyyy = this.DateSys.getFullYear();

    const today = yyyy + '-' + mm + '-' + dd;

    const Age = Math.floor((Date.parse(today) - Date.parse(this.DateNais)) / 86400000);
    // console.log(this.DateNais);
    // console.log(today);
    let enfant = this.NbrEnfant;

    if (Age <= 1827) {
      console.log(Age);
      let bebe = 0;
      if (enfant >= 1 && bebe === 0) {
        console.log('Age <=  1827 and bebe = 0 and Enfant > 0');
        bebe++;
        enfant--;
        console.log(enfant);
        console.log(bebe);
      } else if (enfant >= 1 && bebe > 0) {
        console.log('Age <=  1827 and both > 0');
        bebe = bebe;
        console.log(enfant);
        console.log(bebe);
      } else if (enfant < 0) {
        console.log(' Age <=  1827 and enfant < 0');
        enfant = 0;
        console.log(enfant);
        console.log(bebe);
        bebe = bebe;
      }
      this.Bebe = this.Bebe + bebe;
      this.NbrEnfant = enfant;
      bebe = 0;
      console.log(bebe);
    }

    // this.NbrEnfant = this.NbreEnfArr.reduce((a, b) => (Number(a) + Number(b)) - this.Bebe);
  }

  ifAgeEnfantVerif(event) {

    const dd = String(this.DateSys.getDate()).padStart(2, '0');
    const mm = String(this.DateSys.getMonth() + 1).padStart(2, '0');
    const yyyy = this.DateSys.getFullYear();

    const today = yyyy + '-' + mm + '-' + dd;

    const Age = Math.floor((Date.parse(today) - Date.parse(this.DateNais)) / 86400000);
    //  console.log(this.DateNais);
    //  console.log(today);
    if (Age > 1827 && Age <= 4382) {
      console.log(Age);
      let bebe = this.Bebe;
      let enfant = this.NbrEnfant;
      if (bebe >= 1 && enfant === 0) {
        console.log(' Age entre (1827 , 4382) and bebe >= 1 and Enfant = 0');
        bebe--;
        enfant++;
      } else if (bebe >= 1 && enfant > 0) {
        console.log(' Age entre (1827 , 4382) and bebe < 1');
        bebe--;
        enfant++;
      } else if (bebe < 1 && enfant > 0) {
        console.log(' Age entre (1827 , 4382) and bebe < 1');
        bebe = 0;
        //enfant = enfant ;
      }
      this.Bebe = bebe;
      this.NbrEnfant = enfant;
      console.log(bebe);
    }

    //  this.NbrEnfant = this.NbreEnfArr.reduce((a, b) => (Number(a) + Number(b)) - this.Bebe);
  }

  ifAgeAdulteVerif(event) {
    const dd = String(this.DateSys.getDate()).padStart(2, '0');
    const mm = String(this.DateSys.getMonth() + 1).padStart(2, '0');
    const yyyy = this.DateSys.getFullYear();

    const today = yyyy + '-' + mm + '-' + dd;

    const Age = Math.floor((Date.parse(today) - Date.parse(this.DateNais)) / 86400000);
    // console.log(this.DateNais);
    // console.log(today);


    if (Age > 4382) {
      console.log(Age);
      let bebe = this.Bebe;
      let enfant = this.NbrEnfant;
      if (bebe > 0 && enfant > 0) {
        if (bebe > enfant) {
          console.log(' Age >  4382 and both > 0  and bebe > enfant');
          this.NbrAdulte++;
          bebe--;
          enfant = 0;
        } else if (bebe < enfant) {
          console.log(' Age >  4382 and both > 0 and bebe < enfant');
          this.NbrAdulte++;
          bebe = 0;
          enfant--;
        }
      } else if (bebe <= 0 && enfant > 0) {
        console.log(' Age >  4382 and bebe  <= 0 and enfant > 0');
        this.NbrAdulte++;
        bebe = 0;
        enfant--;
      } else if (bebe > 0 && enfant <= 0) {
        console.log(' Age >  4382 and bebe  > 0  and enfant <= 0');
        this.NbrAdulte++;
        bebe--;
        enfant = 0;
      } else if (bebe <= 0 && enfant <= 0) {
        console.log(' Age >  4382 and bebe  >= 1  and enfant <1 ');
        this.NbrAdulte++;
        bebe = 0;
        enfant = 0;
      }
      this.Bebe = bebe;
      this.NbrEnfant = enfant;
      // bebe = 0;
      console.log(bebe);
    }
    // this.NbrEnfant = this.NbreEnfArr.reduce((a, b) => (Number(a) + Number(b)) - this.Bebe);

  }

  getTypologie() {
    this.detailtypologieService.typolologiebyHotel(this.idD, this.Personne).subscribe((typologie) => {
      this.typArray.push(typologie);
      //Array.from(new Set(typolologie));
      console.log('typologie Array =' + this.typArray);

    });

  }

  onEnfantSelected(event, j) {
    // this.NbrEnfant = 0;
    const arr = this.EnfantArr[j - 1] = [];
    const selectedOptions = event.target['options'];
    const selectedIndex = selectedOptions.selectedIndex;
    const selectElementValue = selectedOptions[selectedIndex].value;


    this.NbreBebeArr[j - 1] = this.Bebe;
    console.log(this.NbreBebeArr);
    this.NbreEnfArr[j - 1] = (Number(selectElementValue));
    console.log(this.NbreEnfArr);
    this.NbrEnfant = this.NbreEnfArr.reduce((a, b) => (Number(a) + Number(b)) - Number(this.Bebe));


    for (let i = 0; i <= selectElementValue - 1; i++) {
      arr.push(i);
      console.log(this.EnfantArr);
    }
    // this.EnfantArr = [];
    /*
    this.EnfantArr ==[]
    if (this.EnfantArr === []) {
      this.EnfantArr.push(nb);
    } else {
      this.EnfantArr [j - 1] = nb;
    }
    console.log(this.EnfantArr);
    */
  }

  onOptionSelectChange(event) {
    const selectedOptions = event.target['options'];
    const selectedIndex = selectedOptions.selectedIndex;
    const selectElementText = selectedOptions[selectedIndex].text;
    console.log(selectElementText);
  }

  onPeriodeSelect(event) {
    (async () => {
      /* const dateArrivee = document.getElementById('dateA').textContent;
       const dateDepart = document.getElementById('dateD').textContent;
       console.log(dateArrivee);
       console.log(dateDepart); */
      const dd = String(this.DateSys.getDate()).padStart(2, '0');
      const mm = String(this.DateSys.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = this.DateSys.getFullYear();
      this.today = yyyy + '-' + mm + '-' + dd;
      this.dateArrivee = this.reservationForm.get('date_arrivee').value;
      console.log(this.dateArrivee);
      this.dateDepart = this.reservationForm.get('date_depart').value;
      console.log(this.dateDepart);
      this.periode = Math.floor((Date.parse(this.dateDepart) - Date.parse(this.dateArrivee)) / 86400000);
      console.log(this.periode);

      if (this.periode <= 0) {

        this.html.nativeElement.innerHTML = `<label class="text-danger">selectionner une date de depart
   superieur a la date d'arrivee ! </label> ` ;
        this.dateDepart = '';
        this.periode = 0;

      } else if ((Math.floor((Date.parse(this.dateArrivee) - Date.parse(this.today)) / 86400000) < 0) ||
        (Math.floor((Date.parse(this.dateDepart) - Date.parse(this.today)) / 86400000) < 0)) {

        this.html.nativeElement.innerHTML = `<label class="text-danger"> selectionner une date
  d'arrivee et une date de depart superieur a la date aujourd'hui ! </label> ` ;

        this.dateDepart = '';
        this.dateArrivee = '';
        this.periode = 0;
      } else {


        await this.delay(300);
        this.html.nativeElement.innerHTML = `<label class="text-primary">Nombre de jours : &nbsp; ${this.periode}</label>`;
      }
      this.detailhotelService.getlogementByIdHotel(this.idD, this.dateArrivee, this.dateDepart).subscribe((logement) => {
        this.logArray = logement;
        this.detailLogement = logement; // Array.from(new Set(logement));
        console.log(this.detailLogement);
        console.log(this.detailLogement[0][3]);
        console.log(this.detailLogement[0][2]);
        console.log(this.detailLogement[0][1]);
        console.log('logementArray = ' + JSON.parse(JSON.stringify(this.logArray)));
      });

    })();
  }

  onLogementSelectChange(event, i: any) {
    const selectedOptions = event.target['options'];
    const selectedIndex = selectedOptions.selectedIndex;
    const selectElementText = selectedOptions[selectedIndex].text;
    const selectElementValue = selectedOptions[selectedIndex].value;

    if (selectElementText === '') {
      this.myLogementArr.push(selectElementText);
      this.myPrixVLogementArr.push(selectElementValue);
      this.myPrixALogementArr.push(this.detailLogement[0][3]);
      console.log(this.myPrixALogementArr);
      this.myPrixVLogementArr.push(this.detailLogement[0][2]);
      console.log(this.myPrixVLogementArr);
      this.logementFormArr.push(new FormControl('logement' + i));
      this.logementFormArr.push(new FormControl('prixlogement' + i));

    } else if (selectElementText !== '') {
      this.myLogementArr[i] = selectElementText;
      this.myPrixVLogementArr[i] = selectElementValue;
      /*  this.logementFormArr.removeAt(i);
        this.logementFormArr.removeAt(i++);
        this.logementFormArr.push(new FormControl('logement' + i));
        this.logementFormArr.push(new FormControl('prixlogement' + i));

        console.log(this.logementFormArr.controls); */
    }
    console.log(this.myLogementArr);
    console.log(this.myPrixVLogementArr);
    console.log(this.myPrixALogementArr);

    /*   return this.detaillogementService.getPrixByIdLog(Number(selectElementValue)).subscribe((data) => {
         this.myLogement.push(data) ;
       }); */
  }

  onSpecificationSelectChange(event, i: any) {
    const selectedOptions = event.target['options'];
    const selectedIndex = selectedOptions.selectedIndex;
    const selectElementText = selectedOptions[selectedIndex].text;
    const selectElementValue = selectedOptions[selectedIndex].value;
    if (selectElementText === '') {
      this.mySpecificationArr.push(selectElementText);
      /*  this.specificationFormArr.push(new FormControl('specification' + i));
        console.log(this.specificationFormArr.controls); */

      //  this.myPrixLogementArr.push(selectElementValue);
    } else if (selectElementText !== '') {
      /*  this.specificationFormArr.removeAt(i);
        this.specificationFormArr.push(new FormControl('specification' + i));
        console.log(this.specificationFormArr.controls); */
      this.mySpecificationArr[i] = selectElementText;
      //   this.myPrixLogementArr[i] = selectElementValue;
    }
    console.log(this.mySpecificationArr);
    this.isValid = true;

  }

  onSupplementSelectChange(event, i: any) {
    const selectedOptions = event.target['options'];
    const selectedIndex = selectedOptions.selectedIndex;
    const selectElementText = selectedOptions[selectedIndex].text;
    const selectElementValue = selectedOptions[selectedIndex].value;
    if (selectElementText === '') {
      this.mySupplementArr.push(selectElementText);
      this.myPrixSupplementArr.push(selectElementValue);
      /* this.supplementFormArr.push(new FormControl('supplement' + i));
       this.supplementFormArr.push(new FormControl('prixsupp' + i));
       console.log(this.supplementFormArr.controls); */

    } else if (selectElementText !== '') {
      this.mySupplementArr[i] = selectElementText;
      this.myPrixSupplementArr[i] = selectElementValue;

    }

    console.log(this.mySupplementArr);
    /*  this.supplementFormArr.removeAt(i);
      this.supplementFormArr.removeAt(i++);
      this.supplementFormArr.push(new FormControl('supplement' + i));
      this.supplementFormArr.push(new FormControl('prixsupp' + i));
      console.log(this.myPrixSupplementArr); */

    /* return this.detailsupplementService.getPrixByIdSupp(Number(selectElementValue)).subscribe((data) => {
        this.myPrixSupplement = data ;
      });*/

  }

  addReservation() {

    (async () => {
      const arr = [];
      for (let i = 0; i <= this.typArray.length - 1; i++) {
        arr.push(String(this.typArray[i]));
      }
      console.log(arr);

      /* const hotel = document.getElementById('idHotel') as HTMLSelectElement;
       const idHotel = hotel.value;
       const client = document.getElementById('idClient') as HTMLSelectElement;
       const idClient = client.value;
       this.reservationForm.controls['idclient'].setValue(idClient);
       console.log(idClient);
       console.log(idHotel);
       this.reservationForm.controls['idhotel'].setValue(idHotel);*/

      this.reservationForm.controls['date_reservation'].setValue(this.today);

      const logement = Array.from(new Set(this.myLogementArr)).toString();
      if (this.myLogementArr.length === 0) {
        this.prixlogement = 0;
      } else {
        this.prixlogement = this.myPrixVLogementArr.reduce((a, b) => (Number(a) + Number(b)) * Number(this.periode));
      }

      const supplement = this.mySupplementArr.toString();
      if (this.myPrixSupplementArr.length === 0) {
        this.prixsupplement = 0;
      } else {
        this.prixsupplement = this.myPrixSupplementArr.reduce((a, b) => (Number(a) + Number(b)) * Number(this.periode));
      }


      const typologie = Array.from(new Set(arr)).toString();
      const prixreservation = Number(this.prixlogement) + Number(this.prixsupplement);

      const specification = Array.from(new Set(this.mySpecificationArr)).toString();
      const totalPax = this.NbrAdulte + this.NbrEnfant + this.Bebe;

      this.reservationForm.controls['prixachat'].setValue(prixreservation);
      this.reservationForm.controls['prixvente'].setValue(prixreservation);
      this.reservationForm.controls['logement'].setValue(logement);
      this.reservationForm.controls['prixlogement'].setValue(this.prixlogement);
      this.reservationForm.controls['supplement'].setValue(supplement);
      this.reservationForm.controls['prixsupplement'].setValue(this.prixsupplement);
      this.reservationForm.controls['typologie'].setValue(typologie);
      this.reservationForm.controls['specification'].setValue(specification);
      this.reservationForm.controls['adulte'].setValue(this.NbrAdulte);
      this.reservationForm.controls['enfant'].setValue(this.NbrEnfant);
      this.reservationForm.controls['bebe'].setValue(this.Bebe);
      this.reservationForm.controls['duree'].setValue(this.periode);
      this.reservationForm.controls['totalp'].setValue(totalPax);
      this.reservationForm.controls['observations'].setValue(this.observations);
      console.log(this.observations);



      this.reservationService.add(this.reservationForm.value).subscribe(data => {
        console.log(data);
        this.reservation = data;
        console.log(this.reservation);
      });
      await this.delay(300);
      this.isSubmitted = true;
    })();

  }

  lastReservation() {
    this.reservationService.getTheLast().subscribe((data) => {
      this.myReservation = data;
      console.log(this.myReservation);
    });
  }

  reservationList() {
    this.reservationService.getAll().subscribe((data) => {
      this.source.localdata = data;
      this.myGrid.updatebounddata();
    });

  }

}

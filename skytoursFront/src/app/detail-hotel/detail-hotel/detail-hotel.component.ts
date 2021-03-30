import { DetailTypologie } from './../../interfaces/detailtypologie';
import { DetailtypologieService } from './../../services/detailtypologie.service';
import { DetailsupplementService } from './../../services/detailsupplement.service';
import { Detailsupplement } from './../../interfaces/detailsupplement';
import { DetailRepartition } from './../../interfaces/detailrepartition';
import { DetaillogementService } from './../../services/detaillogement.service';
import { DetailrepartitionService } from './../../services/detailrepartition.service';
import { SpecificationService } from './../../services/specification.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Hotel } from '../../interfaces/hotel';
import { Logement } from '../../interfaces/logement';
import { HotelService } from '../../services/hotel.service';
import { LogementService } from '../../services/logement.service';
import { Repartition } from '../../interfaces/repartition';
import { Specification } from '../../interfaces/specification';
import { Supplement } from '../../interfaces/supplement';
import { Typologie } from '../../interfaces/typologie';
import { DetailhotelService } from '../../services/detailhotel.service';
import { RepartitionService } from '../../services/repartition.service';
import { SupplementService } from '../../services/supplement.service';
import { TypologieService } from '../../services/typologie.service';
import { DetailHotel } from '../../interfaces/detailhotel';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';

enum CheckBoxType { remise, marge, NONE }


@Component({
  selector: 'app-detail-hotel',
  templateUrl: './detail-hotel.component.html',
  styleUrls: ['./detail-hotel.component.css']
})

export class DetailHotelComponent implements AfterViewInit {


  constructor(
    private detailrepartitionService: DetailrepartitionService  , private detaillogementService: DetaillogementService ,
    private logementService: LogementService, private specificationService: SpecificationService,
    private typologieService: TypologieService, private supplementService: SupplementService,
    private repartitionService: RepartitionService, private hotelService: HotelService,
    private detailhotelService: DetailhotelService , private detailsupplementService: DetailsupplementService ,
    private detailtypologieService: DetailtypologieService
    ) { }


  @ViewChild('myGrid') myGrid: jqxGridComponent;
  @ViewChild('RepDataTable') RepDataTable: jqxDataTableComponent;
  @ViewChild('LogDataTable') LogDataTable: jqxDataTableComponent;
  @ViewChild('SuppDataTable') SuppDataTable: jqxDataTableComponent;


  logement: Logement[];
  specification: Specification[];
  supplement: Supplement[];
  typologie: Typologie[];
  repartition: Repartition[];
  detailRepartition: DetailRepartition;
  detailsupplement: Detailsupplement;
  detailTypologie: DetailTypologie;
  hotel: Hotel[];
  thisHotel: Hotel;
  detailHotel: DetailHotel;
  convention = [{id: 1 , value: 'remise'} , {id: 2 , value: 'marge'}];

  id: any;
  idlog: any;
  idspec: any;
  idsup: any;
  idtyp: any;
  idrep: any;
  idD: any;

 // logementFormArr: FormArray;
//  logArray: Array<any> = [];
  specificationFormArr: FormArray;
  specArray: Array<any> = [];
  typologieFormArr: FormArray;
  typArray: Array<any> = [];
  supplementFormArr: FormArray;
  suppArray: Array<any> = [];
  repartitionFormArr: FormArray;
  repArray: Array<any> = [];

  periodes = [{value: 0 }, {value: 1 }, {value: 2 }, {value: 3 }, {value: 4 }, {value: 5},
              {value: 6 }, {value: 7 }, {value: 8 }, {value: 9 }, {value: 10 }];
  periodeArray: Array<any> = [];
  nbrePeriode: number;
  prixA = 0;
  prixV = 0;
  tauxRemise = 0;
  tauxMarge = 0;
  arrayPrixA = [];
  arrayPrixV = [];
  myprixA = 0;
  myprixV = 0;
  DateD: any;
  DateF: any;
  isRemise = false;
  isMarge = false;
  check_box_type = CheckBoxType;

  currentlyChecked: CheckBoxType;


  detailForm = new FormGroup({
    idhotel: new FormControl('', [Validators.required, ])
  });

  detailLogementForm = new FormGroup({
   // logementFormArr: new FormArray([new FormGroup({})]),
    id: new FormControl ('', [Validators.required, ]),
    prixA: new FormControl ('', [Validators.required, ]),
    prixV: new FormControl ('', [Validators.required, ]),
    tauxM: new FormControl ('', [Validators.required, ]),
    tauxR: new FormControl ('', [Validators.required, ]),
    du: new FormControl ('', [Validators.required, ]),
    au: new FormControl ('', [Validators.required, ]),

  });

  detailSpecificationForm = new FormGroup({
    specificationFormArr: new FormArray([new FormGroup({})])
  });

  detailTypologieForm = new FormGroup({
    typologieFormArr: new FormArray([new FormGroup({})])
  });

  detailSupplementForm = new FormGroup({
    supplementFormArr: new FormArray([new FormGroup({})]),
  });

  detailRepartitionForm = new FormGroup({
    repartitionFormArr: new FormArray([new FormGroup({})]),
  });

  rowIndex: number;
  prixB: number;
  prix1: number;
  prix2: number;
  prix3: number;
  prix4: number;
  prix5: number;
  prix6: number;
 // logprixB: number;
  suppPrix: number;

/* les boutons utilsees au toolbar de deux datatables */
  myCancelButton: jqwidgets.jqxButton;
  myUpdateButton: jqwidgets.jqxButton;
 /* logCancelButton: jqwidgets.jqxButton;
  logUpdateButton: jqwidgets.jqxButton; */
  suppCancelButton: jqwidgets.jqxButton;
  suppUpdateButton: jqwidgets.jqxButton;

/*  DataTable du Logement DetailHotel*/
  source: any = {
    localdata: null,
    datafields: [
      { name: 'id', type: 'number' },
      { name: 'repartition', type: 'string' },
      { name: 'prixB', type: 'number' },
      { name: 'prix1', type: 'number' },
      { name: 'prix2', type: 'number' },
      { name: 'prix3', type: 'number' },
      { name: 'prix4', type: 'number' },
      { name: 'prix5', type: 'number' },
      { name: 'prix6', type: 'number' },
      { name: 'prixT', type: 'number' }
    ],
    datatype: 'json',
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);


  columns: any[] = [

    { text: 'ID', dataField: 'id', width: 80, cellsAlign: 'center', editable: false },
    { text: 'Designation', dataField: 'repartition', editable: false },
    { text: 'Prix_Total', dataField: 'prixT', width: 80, cellsAlign: 'center', editable: false },
    { text: 'Prixb', dataField: 'prixB', cellsAlign: 'center' },
    { text: 'Prix1', dataField: 'prix1', cellsAlign: 'center' },
    { text: 'Prix2', dataField: 'prix2', cellsAlign: 'center' },
    { text: 'Prix3', dataField: 'prix3', cellsAlign: 'center' },
    { text: 'Prix4', dataField: 'prix4', cellsAlign: 'center' },
    { text: 'Prix5', dataField: 'prix5', cellsAlign: 'center' },
    { text: 'Prix6', dataField: 'prix6', cellsAlign: 'center' },

  ];
/*  DataTable du Logement DetailHotel*/
/*  logsource: any = {
    localdata: null,
    datafields: [
      { name: 'id', type: 'number' },
      { name: 'designation', type: 'string' },
      { name: 'logprixB', type: 'number' },

    ],
    datatype: 'json',
  };

  logdataAdapter: any = new jqx.dataAdapter(this.logsource);


  logcolumns: any[] = [

    { text: 'ID', dataField: 'id', width: 80, cellsAlign: 'center', editable: false },
    { text: 'Designation', dataField: 'designation', editable: false },
    { text: 'Prix', dataField: 'logprixB', width: 80, cellsAlign: 'center' },

  ]; */

  suppsource: any = {
    localdata: null,
    datafields: [
      { name: 'id', type: 'number' },
      { name: 'designation', type: 'string' },
      { name: 'prix', type: 'number' },

    ],
    datatype: 'json',
  };

  suppdataAdapter: any = new jqx.dataAdapter(this.suppsource);


  suppcolumns: any[] = [

    { text: 'ID', dataField: 'id', width: 80, cellsAlign: 'center', editable: false },
    { text: 'Designation', dataField: 'designation', editable: false },
    { text: 'Prix', dataField: 'prix', width: 80, cellsAlign: 'center' },

  ];
  renderToolbar = (toolBar: any): void => {
    const theme = jqx.theme;
    const toTheme = (className: string): string => {
      if (theme === '') { return className; }
      return className + ' ' + className + '-' + theme;
    };
    // appends buttons to the status bar.
    const container = document.createElement('div');
    const fragment = document.createDocumentFragment();
    container.style.cssText = 'overflow: hidden; position: hidden; height: "100%"; width: "100%"';
    const createButtons = (name: string, cssClass: string): any => {
      this[name] = document.createElement('div');
      this[name].style.cssText = 'padding: 3px; margin: 2px; float: left; border: none';
      const iconDiv = document.createElement('div');
      iconDiv.style.cssText = 'margin: 4px; width: 16px; height: 16px;';
      iconDiv.className = cssClass;
      this[name].appendChild(iconDiv);
      return this[name];
    };

    const buttons = [

      createButtons('cancelButton', toTheme('jqx-icon-cancel')),
      createButtons('updateButton', toTheme('jqx-icon-save'))
    ];


    for (let i = 0; i < buttons.length; i++) {
      fragment.appendChild(buttons[i]);
    }


    container.appendChild(fragment);
    toolBar[0].appendChild(container);
    const otherButtonsOptions: jqwidgets.ButtonOptions = {
      height: 25, width: 25
    };

    this.myCancelButton = jqwidgets.createInstance(buttons[0], 'jqxButton', otherButtonsOptions);
    this.myUpdateButton = jqwidgets.createInstance(buttons[1], 'jqxButton', otherButtonsOptions);


    const cancelTooltopOptions: jqwidgets.TooltipOptions = {
      position: 'bottom', content: 'Cancel'
    };
    const updateTooltopOptions: jqwidgets.TooltipOptions = {
      position: 'bottom', content: 'Save Changes'
    };

    this.myCancelButton.addEventHandler('click', (event: any) => {
      if (!this.myCancelButton.disabled) {
        // cancel changes.
        this.RepDataTable.endRowEdit(this.rowIndex, true);
      }
    });

    this.myUpdateButton.addEventHandler('click', (event: any) => {
      (async () => {
        const Selectedid = document.getElementById('mySelect') as HTMLSelectElement;
        const id = Number(Selectedid.value);
        console.log(id);
        this.detailhotelService.add(id, this.detailForm.value).subscribe((data) => {
        });
        this.detailhotelService.getDetailByHotelId(id).subscribe((idD) => {
          this.idD = idD;
          console.log(this.idD);
        });
        await this.delay(200);
        const Data = this.RepDataTable.getSelection();
        const newdata = Data[0];
        console.log('this is new data :', newdata);
        const idR = newdata.id;
        const newJson = {
          prixb: ` ${newdata.prixB} `, prix1: ` ${newdata.prix1}  `, prix2: ` ${newdata.prix2}
          `, prix3: ` ${newdata.prix3}`, prix4: ` ${newdata.prix4}`, prix5: ` ${newdata.prix5}`
          , prix6: ` ${newdata.prix6}`, prixT: ` ${newdata.prixT} `
        };
        console.log('this is id', idR);
        console.log('this is new data :', newJson);
        console.log('this is id', idR);
        this.detailrepartitionService.addRepartitionDetail(this.idD, idR, newJson)
          .subscribe((data) => {
            this.source.localdata = data;
          });
        this.isvalid(idR);
      })();

    });

  }
 /* logrenderToolbar = (logtoolBar: any): void => {
    const theme = jqx.theme;
    const tologTheme = (className: string): string => {
      if (theme === '') { return className; }
      return className + ' ' + className + '-' + theme;
    };
    const container = document.createElement('div');
    const fragment = document.createDocumentFragment();
    container.style.cssText = 'overflow: hidden; position: hidden; height: "100%"; width: "100%"';
    const createLogButtons = (name: string, cssClass: string): any => {
      this[name] = document.createElement('div');
      this[name].style.cssText = 'padding: 3px; margin: 2px; float: left; border: none';
      const iconDiv = document.createElement('div');
      iconDiv.style.cssText = 'margin: 4px; width: 16px; height: 16px;';
      iconDiv.className = cssClass;
      this[name].appendChild(iconDiv);
      return this[name];
    };

    const logbuttons = [

      createLogButtons('logcancelButton', tologTheme('jqx-icon-cancel')),
      createLogButtons('logupdateButton', tologTheme('jqx-icon-save'))
    ];

    for (let i = 0; i < logbuttons.length; i++) {
      fragment.appendChild(logbuttons[i]);
    }

    container.appendChild(fragment);
    logtoolBar[0].appendChild(container);
    const logButtonsOptions: jqwidgets.ButtonOptions = {
      height: 25, width: 25
    };

    this.logCancelButton = jqwidgets.createInstance(logbuttons[0], 'jqxButton', logButtonsOptions);
    this.logUpdateButton = jqwidgets.createInstance(logbuttons[1], 'jqxButton', logButtonsOptions);

    this.logCancelButton.addEventHandler('click', (event: any) => {
      if (!this.logCancelButton.disabled) {
        // cancel changes.
        this.LogDataTable.endRowEdit(this.rowIndex, true);
      }
    });

    this.logUpdateButton.addEventHandler('click', (event: any) => {
      (async () => {
        const Selectedid = document.getElementById('mySelect') as HTMLSelectElement;
        const id = Number(Selectedid.value);
        console.log(id);
        this.detailhotelService.add(id, this.detailForm.value).subscribe((data) => {
        });
        this.detailhotelService.getDetailByHotelId(id).subscribe((idD) => {
          this.idD = idD;
          console.log(this.idD);
        });
        await this.delay(200);
        const Data = this.LogDataTable.getSelection();
        const newdata = Data[0];
        const idL = newdata.id;
        const newJson = {
          prixB: ` ${newdata.logprixB} `};
         this.detaillogementService.addLogementDetail(this.idD, idL, newJson)
          .subscribe((data) => {
            this.logsource.localdata = data;
          });
      })();
    });
  } */
  supprenderToolbar = (supptoolBar: any): void => {
    const theme = jqx.theme;
    const tosupTheme = (className: string): string => {
      if (theme === '') { return className; }
      return className + ' ' + className + '-' + theme;
    };
    const container = document.createElement('div');
    const fragment = document.createDocumentFragment();
    container.style.cssText = 'overflow: hidden; position: hidden; height: "100%"; width: "100%"';
    const createLogButtons = (name: string, cssClass: string): any => {
      this[name] = document.createElement('div');
      this[name].style.cssText = 'padding: 3px; margin: 2px; float: left; border: none';
      const iconDiv = document.createElement('div');
      iconDiv.style.cssText = 'margin: 4px; width: 16px; height: 16px;';
      iconDiv.className = cssClass;
      this[name].appendChild(iconDiv);
      return this[name];
    };

    const buttons = [

      createLogButtons('supcancelButton', tosupTheme('jqx-icon-cancel')),
      createLogButtons('supupdateButton', tosupTheme('jqx-icon-save'))
    ];

    for (let i = 0; i < buttons.length; i++) {
      fragment.appendChild(buttons[i]);
    }

    container.appendChild(fragment);
    supptoolBar[0].appendChild(container);
    const suppButtonsOptions: jqwidgets.ButtonOptions = {
      height: 25, width: 25
    };

    this.suppCancelButton = jqwidgets.createInstance(buttons[0], 'jqxButton', suppButtonsOptions);
    this.suppUpdateButton = jqwidgets.createInstance(buttons[1], 'jqxButton', suppButtonsOptions);

    this.suppCancelButton.addEventHandler('click', (event: any) => {
      if (!this.suppCancelButton.disabled) {
        // cancel changes.
        this.SuppDataTable.endRowEdit(this.rowIndex, true);
      }
    });

    this.suppUpdateButton.addEventHandler('click', (event: any) => {
      (async () => {
        const Selectedid = document.getElementById('mySelect') as HTMLSelectElement;
        const id = Number(Selectedid.value);
        console.log(id);
        this.detailhotelService.add(id, this.detailForm.value).subscribe((data) => {
        });
        this.detailhotelService.getDetailByHotelId(id).subscribe((idD) => {
          this.idD = idD;
          console.log(this.idD);
        });
        await this.delay(200);
        const Data = this.SuppDataTable.getSelection();
        const newdata = Data[0];
        const idS = newdata.id;
        const newJson = {
          prix: ` ${newdata.prix} `};
          this.detailsupplementService.addSupplementDetail(this.idD, idS, newJson)
          .subscribe((data) => {
            this.suppsource.localdata = data;
          });
      })();
    });
  }

  ngAfterViewInit(): void {
    this.getHotel();
    this.getSpecification();
    this.getTypologie();

   // this.LogDataTable.autoShowLoadElement();
    this.getLogement();
    this.RepDataTable.autoShowLoadElement();
    this.getRepartition();
    this.SuppDataTable.autoShowLoadElement();
    this.getSupplement();


   // this.logementFormArr = this.detailLogementForm.get('logementFormArr') as FormArray;
    this.specificationFormArr = this.detailSpecificationForm.get('specificationFormArr') as FormArray;
    this.typologieFormArr = this.detailTypologieForm.get('typologieFormArr') as FormArray;
    this.supplementFormArr = this.detailSupplementForm.get('supplementFormArr') as FormArray;
    this.repartitionFormArr = this.detailRepartitionForm.get('repartitionFormArr') as FormArray;

  }

  onRowEndEdit(event: any): void {

    const Data = this.RepDataTable.getSelection();
    const newdata = Data[0];
    this.prixB = Number(newdata.prixB);
    console.log(this.prixB);

    if (Number(newdata.prix1) === 0) {
      this.prix1 = this.prixB;
      newdata.prix1 = this.prixB;
    } else if (newdata.prix1 === '') {
      this.prix1 = 0;
      newdata.prix1 = 0;
    } else {
      this.prix1 = this.prixB - (this.prixB * (Number(newdata.prix1) / 100));
      newdata.prix1 = this.prix1;
    }

    if (newdata.prix2 === '') {
      this.prix2 = 0;
      newdata.prix2 = 0;
    } else if (Number(newdata.prix2) === 0) {
      this.prix2 = this.prixB;
      newdata.prix2 = this.prixB;
    } else {
      this.prix2 = this.prixB - (this.prixB * (Number(newdata.prix2) / 100));
      newdata.prix2 = this.prix2;
    }

    if (newdata.prix3 === '') {
      this.prix3 = 0;
      newdata.prix3 = 0;
    } else if (Number(newdata.prix3) === 0) {
      this.prix3 = this.prixB;
      newdata.prix3 = this.prixB;
    } else {
      this.prix3 = this.prixB - (this.prixB * (Number(newdata.prix3) / 100));
      newdata.prix3 = this.prix3;
    }

    if (newdata.prix4 === '') {
      this.prix4 = 0;
      newdata.prix4 = 0;
    } else if (Number(newdata.prix4) === 0) {
      this.prix4 = this.prixB;
      newdata.prix4 = this.prixB;
    } else {
      this.prix4 = this.prixB - (this.prixB * (Number(newdata.prix4) / 100));
      newdata.prix4 = this.prix4;
    }

    if (newdata.prix5 === '') {
      this.prix5 = 0;
      newdata.prix5 = 0;
    } else if (Number(newdata.prix5) === 0) {
      this.prix5 = this.prixB;
      newdata.prix5 = this.prixB;
    } else {
      this.prix5 = this.prixB - (this.prixB * (Number(newdata.prix5) / 100));
      newdata.prix5 = this.prix5;
    }

    if (newdata.prix6 === '') {
      this.prix6 = 0;
      newdata.prix6 = 0;
    } else if (Number(newdata.prix6) === 0) {
      this.prix6 = this.prixB;
      newdata.prix6 = this.prixB;
    } else {
      this.prix6 = this.prixB - (this.prixB * (Number(newdata.prix1) / 100));
      newdata.prix6 = this.prix6;
    }

    const prixTotal = this.prixB + this.prix1 + this.prix2 + this.prix3 + this.prix4 + this.prix5 + this.prix6;

    console.log(prixTotal);

    newdata.prixb = this.prixB;
    newdata.prixT = prixTotal;

    this.source.datafields.prixT = prixTotal;
    console.log(newdata);
  }

/*  onLogRowEndEdit(event: any): void {
    const Data = this.LogDataTable.getSelection();
    const newdata = Data[0];
    this.logprixB = Number(newdata.logprixB);
    console.log(this.logprixB);

  } */
  onSuppRowEndEdit(event: any): void {
    const Data = this.SuppDataTable.getSelection();
    const newdata = Data[0];
    this.suppPrix = Number(newdata.prix);
    console.log(this.suppPrix);

  }
  getHotel() {
    this.hotelService.getHotel().subscribe((data) => {
      this.hotel = data;
      console.log(data);
    });
  }

  selectedHId(e) {
    (async () => {

    const select = document.getElementById('mySelect') as HTMLSelectElement;
    // tslint:disable-next-line:no-unused-expression
    this.id = select.options[select.selectedIndex].value;
    console.log(this.id);

    await this.delay(300);
    this.detailhotelService.add(Number(this.id), this.detailForm.value).subscribe((data) => {
    });
  })();
  }
  getIdDetail() {
   /* const Selectedid = document.getElementById('mySelect') as HTMLSelectElement;
    const id = Number(Selectedid.value);
    console.log(id); */
    this.detailhotelService.getDetailByHotelId(Number(this.id)).subscribe((idD) => {
      this.idD = Number(idD);
      console.log(this.idD);
    });
  }

  getLogement() {
    this.logementService.getAll().subscribe((data) => {
      this.logement = data;
    //  this.logsource.localdata = data;
  //    this.LogDataTable.updateBoundData();
      console.log(this.logement);
    });
  }

  getSpecification() {
    this.specificationService.getAll().subscribe((data) => {
      this.specification = data;
      console.log(data);
    });
  }

  getTypologie() {
    this.typologieService.getAll().subscribe((data) => {
      this.typologie = data;
      console.log(data);
    });
  }

  getSupplement() {
    this.supplementService.getAll().subscribe((data) => {
      this.supplement = data;
      this.suppsource.localdata = data;
      this.SuppDataTable.updateBoundData();
      console.log(data);
    });
  }

  getRepartition() {
    this.repartitionService.getAll().subscribe((data) => {
      // this.repartition = data;
      this.source.localdata = data;
      this.RepDataTable.updateBoundData();
      // this.myGrid.updatebounddata();
      console.log(data);
    });
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

/*  onLogementCheckboxChange(e, id) {
    if (e.target.checked) {
      this.logArray.push(id);
      console.log('tabLog = ' + this.logArray);
      this.logementFormArr.push(new FormControl('logement' + id));
      console.log(this.logementFormArr.controls);
    } else {
      let i = 0;
      const val = ('logement' + e.target.value);
      this.logementFormArr.controls.forEach((item: FormControl) => {
        if (item.value === val) {
          this.logArray = this.logArray.filter(m => m !== id);
          console.log(this.logArray);
          this.logementFormArr.removeAt(i);
          console.log(this.logementFormArr.controls);
          return;
        }
        i++;
      });
    }
  } */

  onSpecificationCheckboxChange(e, id) {
    if (e.target.checked) {
      this.specArray.push(id);
      console.log(this.specArray);
      this.specificationFormArr.push(new FormControl('specification' + id));
      console.log(this.specificationFormArr.controls);
    } else {
      let i = 0;
      const val = ('specification' + e.target.value);
      this.specificationFormArr.controls.forEach((item: FormControl) => {
        if (item.value === val) {
          this.specArray = this.specArray.filter(m => m !== id);
          console.log(this.specArray);
          this.specificationFormArr.removeAt(i);
          console.log(this.specificationFormArr.controls);
          return;
        }
        i++;
      });
    }
  }
  onTypologieCheckboxChange(e, id) {
    if (e.target.checked) {
      this.typArray.push(id);
      console.log(this.typArray);
      this.typologieFormArr.push(new FormControl('typologie' + id));
      console.log(this.typologieFormArr.controls);
    } else {
      let i = 0;
      const val = ('typologie' + e.target.value);
      this.typologieFormArr.controls.forEach((item: FormControl) => {
        if (item.value === val) {
          this.typArray = this.typArray.filter(m => m !== id);
          console.log(this.typArray);
          this.typologieFormArr.removeAt(i);
          console.log(this.typologieFormArr.controls);
          return;
        }
        i++;
      });
    }
  }

  onSupplementCheckboxChange(e, id) {
    if (e.target.checked) {
      this.suppArray.push(id);
      console.log(this.suppArray);
      this.supplementFormArr.push(new FormControl('supplement' + id));
      console.log(this.supplementFormArr.controls);
    } else {
      let i = 0;
      const val = ('supplement' + e.target.value);
      this.supplementFormArr.controls.forEach((item: FormControl) => {
        if (item.value === val) {
          this.suppArray = this.suppArray.filter(m => m !== id);
          console.log(this.suppArray);
          this.supplementFormArr.removeAt(i);
          console.log(this.supplementFormArr.controls);
          return;
        }
        i++;
      });
    }
  }
  /*Checked(e: any): void {

    const args = e.args;
    const rowIndex = args.rowindex;
    this.myGrid .unselectrow(rowIndex);
    const data = this.myGrid.getrowdata(rowIndex);
    const id = data.id;
    console.log('this is id', id);
    console.log('this is  data :', data);
  }*/

  /*addDetail() {

   this.detailhotelService.add(id, this.detailForm.value ).subscribe((data) => {
   console.log(this.detailForm.value);
  // localStorage.setItem('idHotel', JSON.stringify(this.id));
  // this.idD =localStorage.setItem('idDetail', JSON.stringify(this.detailHotel.id));

   });

  }*/

  /*
  addSpecTodetail() {
  const myidD = Number(localStorage.getItem('idDetail'));
  for (let i = 0 ; i < this.logArray.length ; i) {
  this.idspec = this.specArray[i];
  console.log(this.idspec);
  this.detailhotelService.addlogTodetail(myidD, this.idspec).subscribe((data) => {
  });
  }
  }
   addSupTodetail() {
  const myidD = Number(localStorage.getItem('idDetail'));
  for (let i = 0 ; i < this.logArray.length ; i) {
  this.idsup = this.suppArray[i];
  console.log(this.idsup);
  this.detailhotelService.addlogTodetail(myidD, this.idsup);
  }
  }

  addTypTodetail() {
  const myidD = Number(localStorage.getItem('idDetail'));
  for (let i = 0 ; i < this.logArray.length ; i) {
  this.idtyp = this.typArray[i];
  console.log(this.idtyp);
  this.detailhotelService.addlogTodetail(myidD, this.idtyp).subscribe((data) => {
  });
  }
  }

  getDetailByHotelId() {
  const Selected = document.getElementById('mySelect') as HTMLSelectElement;
  // tslint:disable-next-line:radix
  const value = parseInt(Selected.value);
  this.detailhotelService.getDetailByHotelId(value).subscribe((data) => {
  console.log(data);

  this.idD = data;
  });
  }

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

  onCelldoubleclick(event: any): void {
    const args = event.args = true;
    this.myGrid.editable(args);
  }

  onCellvaluechanged(event: any): void {

    const args = event.args;
    const rowIndex = args.rowindex;
    this.myGrid.unselectrow(rowIndex);
    const newdata = this.myGrid.getrowdata(rowIndex);
    const idR = newdata.id;
    const iSchecked = newdata.checkid;
    console.log('this is id', idR);
    console.log('this is new data :', newdata);

    (async () => {
    const Selectedid = document.getElementById('mySelect') as HTMLSelectElement;
    const id = Number(Selectedid.value);
    console.log(id);
    this.detailhotelService.add(id, this.detailForm.value ).subscribe((data) => {
    });
    this.detailhotelService.getDetailByHotelId(id).subscribe((idD) => {
    this.idD = idD;
    console.log(this.idD);
    });

    await this.delay(300);

    if ( iSchecked === true) {
      this.detailhotelService.addRepartitionDetail(this.idD, idR, newdata).subscribe((data) => {
      });
    }
  })();


    // this.editdata(ids, newdata);
  } */

  editdata(event, id, detailrepartition) {
    /* return  this.repartitionService.put(id, detailrepartition)
       .subscribe((data) => {
        // this.source.localdata = data;
         this.RepDataTable.refresh
       });*/
    const args = event.args;
    const rowIndex = args.rowindex;
    this.myGrid.unselectrow(rowIndex);
    const newdata = this.myGrid.getrowdata(rowIndex);
    const idR = newdata.id;
    console.log('this is id', idR);
    console.log('this is new data :', newdata);
    return this.detailrepartitionService.addRepartitionDetail(id, idR, detailrepartition)
      .subscribe((data) => {
        this.source.localdata = data;
        this.RepDataTable.refresh();

      });
  }


  addDetails() {
    (async () => {

      const Selectedid = document.getElementById('mySelect') as HTMLSelectElement;
      const id = Number(Selectedid.value);
      console.log(id);
      this.detailhotelService.add(id, this.detailForm.value).subscribe((data) => {
      });
      this.detailhotelService.getDetailByHotelId(id).subscribe((idD) => {
        this.idD = idD;
        console.log(this.idD);
      });

      await this.delay(300);
   /*   for (let i = 0; i < this.logArray.length; i++) {
        this.idlog = this.logArray[i];
        this.detailhotelService.addlogTodetail(this.idD, this.idlog).subscribe((data) => {
        });
      }*/

      for (let j = 0; j < this.specArray.length; j++) {
        this.idspec = this.specArray[j];
        this.detailhotelService.addspecTodetail(this.idD, this.idspec).subscribe((data) => {
        });
      }

      for (let k = 0; k < this.suppArray.length; k++) {
        this.idsup = this.suppArray[k];
        this.detailhotelService.addsupTodetail(this.idD, this.idsup).subscribe((data) => {
        });
      }

      for (let l = 0; l < this.typArray.length; l++) {
        this.idtyp = this.typArray[l];
        this.detailtypologieService.addTypologieDetail(this.idD, this.idtyp ).subscribe((data) => {
        });
      }

      for (let m = 0; m < this.repArray.length; m++) {
        this.idrep = this.repArray[m];
        this.detailhotelService.addrepTodetail(this.idD, this.idrep).subscribe((data) => {
        });
      }
    })();
  }
  /*atLeastOneCheckboxCheckedValidator (minRequired = 1 ): ValidatorFn {
 return function validate(formGroup: FormGroup) {
 let checked = 0;

 Object.keys(formGroup.controls).forEach(key => {
 const control = formGroup.controls[key];

 if (control.value) {
 checked;
 }
 });
 if (checked < minRequired) {
 return {
 requireCheckboxToBeChecked: true,
 };
 }

 return null;
 }
 }*/

  /* Ici n trouve la partie modification du details Hotel*/

  isvalid(id) {
    this.repartitionService.setValidate(id).subscribe((data) => {
      this.detailRepartition = data;
    });
  }
  getlist() {
    this.detailrepartitionService.getAll().subscribe((data) => {
      this.detailRepartition = data;
      console.log(this.detailRepartition);
    });
  }

  onNbrePeriodeSelected(event) {
    this.getIdDetail();
    this.periodeArray = [];
    const Selected = document.getElementById('nbreP') as HTMLSelectElement;
    const id = Number(Selected.value);
      this.nbrePeriode = id;
      console.log(this.nbrePeriode);
      for (let i = 1 ; i <= this.nbrePeriode; i++) {
        this.periodeArray.push(i);
      console.log(Array.from(new Set(this.periodeArray)));
      }
    }

       /* (async () => {
        this.getIdDetail();
        await this.delay(500);
        })(); */
    onSelect(Selecteditem: any , i: any) {

      const id = Selecteditem.id;
      const prixAtindex = document.getElementById(`${id}${i}`);
      const prix = prixAtindex.id;
      const myLogId = Number(id);
      if (this.isRemise === true) {
        const myprixA = Number(this.prixV) - (Number(this.prixV) * Number(Number(this.tauxRemise)) / 100);
        this.arrayPrixA.push(myprixA);
        this.arrayPrixV.push(this.prixV);
        this.prixA = myprixA ;

      } else if (this.isMarge === true) {
        const myprixV = Number(this.prixA) + (Number(this.prixA) * (Number(this.tauxMarge) / 100));
        this.arrayPrixV.push(this.prixV);
        this.arrayPrixA.push(myprixV);
        this.prixV =  myprixV;

      }
      console.log(id);
      console.log(this.prixA);
      console.log(this.prixV);
      console.log(this.tauxMarge);
      console.log(this.tauxRemise);
      console.log(this.DateD);
      console.log(this.DateF);
      console.log(this.arrayPrixA);
      console.log(this.arrayPrixV);
      // this.detailLogementForm.controls['logement'].setValue(myLogId);
     // this.detailLogementForm.controls['detailHotel'].setValue(this.idD);
      this.detailLogementForm.controls['prixA'].setValue(this.prixA);
      this.detailLogementForm.controls['prixV'].setValue(this.prixV);
      this.detailLogementForm.controls['tauxM'].setValue(this.tauxMarge);
      this.detailLogementForm.controls['tauxR'].setValue(this.tauxRemise);
      this.detailLogementForm.controls['du'].setValue(this.DateD);
      this.detailLogementForm.controls['au'].setValue(this.DateF);
      /*    detailHotel: new FormControl ('', [Validators.required, ]),
    logement: new FormControl ('', [Validators.required, ]),
    prixA: new FormControl ('', [Validators.required, ]),
    prixV: new FormControl ('', [Validators.required, ]),
    tauxM: new FormControl ('', [Validators.required, ]),
    tauxR: new FormControl ('', [Validators.required, ]),
    du: new FormControl ('', [Validators.required, ]),
    au: new FormControl ('', [Validators.required, ]),*/
    this.detaillogementService.addLogementDetail(Number(this.idD), myLogId, this.detailLogementForm.value)
    .subscribe((data) => {
    });

    }

    onSelectRemise(targetType: CheckBoxType) {
      const x = <HTMLInputElement>document.getElementById('remise');
      const y = <HTMLInputElement>document.getElementById('marge');

      this.isMarge = false ;
      this.isRemise = true;
    }

    onSelectMarge(targetType: CheckBoxType) {
      const x = <HTMLInputElement>document.getElementById('remise');
      const y = <HTMLInputElement>document.getElementById('marge');
      this.isMarge = true;
      this.isRemise = false;
    }
}

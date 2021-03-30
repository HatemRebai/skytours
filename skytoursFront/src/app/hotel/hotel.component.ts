import { HotelService } from './../services/hotel.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, FormControl } from '@angular/forms';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements AfterViewInit {

  @ViewChild('myGrid') myGrid: jqxGridComponent;
  @ViewChild('Button') myHTMLButton: jqxButtonComponent;

  constructor(private hotelservice: HotelService ) {

    this.hotelForm.valueChanges
        .subscribe(data => this.checkFormValidity(data));
  }

  state: any = null;
  specificites = [{ value: 1 }, {value: 2}, {value: 3}, {value: 4}, {value: 5 }];
  hotelForm = new FormGroup({
    raison_sociale: new FormControl ('', [Validators.required]),
    rc: new FormControl ('', [Validators.required]),
    adresse: new FormControl ('', [Validators.required]),
    tel: new FormControl ('',
    [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(13)
    ]),
      emailc: new FormControl ('', [Validators.required, Validators.email]),
      emaildb: new FormControl ('', [Validators.required, Validators.email]),
      emailrs: new FormControl ('', [Validators.required, Validators.email]),
      matricule_fiscale: new FormControl ('', [Validators.required, ]),
      specificite: new FormControl ('', [Validators.required, ])
  });

  errMsgs: any = {
    raison_sociale: [],
    rc: [],
    adresse: [],
    tel: [],
    emailc: [],
    emaildb: [],
    emailrs: [],
    matricule_fiscale: [],
    specificite: [],
   };
  translations: any = {
  raison_sociale: {
    required: 'Le Raison Sociale du hotel est obligatoire',
  },
  rc: {
    required: 'Le Registre de Commerce du hotel est obligatoire',
  },
  adresse: {
    required: 'Adresse du hotel est obligatoire',
  },
  tel: {
    required: 'Le numero telephone du hotel est obligatoire',
    minlength: 'longuer du telephone est au minimum  8 symbols',
    maxlength: 'longuer du telephone doit etre  au maximum 13 symbols'
  },
  emailc: {
    required: 'email Commercial est obligatoire.',
    email: 'votre email doit etre sous la forme example@domaine.com '
},
  emaildb: {
    required: 'email du debiteur est obligatoire.',
    email: 'votre email doit etre sous la forme example@domaine.com '
  },
  emailrs: {
    required: 'email du resrvation is required.',
    email: 'votre email doit etre sous la forme example@domaine.com '
  },
  matricule_fiscale: {
    required: 'Le matricule fiscale du hotel est obligatoire'
},
  specificite: {
    required: 'La specificite du hotel est obligatoire'
}
  };
  source: any = {
    localdata: null,
    datafields: [
      { name: 'id', type: 'number' },
      { name: 'raison_sociale', type: 'string' },
      { name: 'adresse', type: 'string' },
      { name: 'tel', type: 'String' },
      { name: 'emailc', type: 'string' },
      { name: 'emaildb', type: 'string' },
      { name: 'emailrs', type: 'string' },
      { name: 'matricule_fiscale', type: 'String' },
      { name: 'specificite', type: 'number' }
    ],
    datatype: 'json',
    sortcolumn: 'raison_sociale',
    sortdirection: 'asc',
    altRows: true,
    sortable: true,
    editable: false,
    selectionMode: 'singleRow',
};

dataAdapter: any = new jqx.dataAdapter(this.source);

columns: any[] = [

  { text: 'HOTEL_ID', dataField: 'id', width: 75 , cellsAlign: 'center', editable: false},
  { text: 'Raison_Sociale', dataField: 'raison_sociale', width: 120 },
  { text: 'Adresse', dataField: 'adresse', width: 150 },
  { text: 'TEL', dataField: 'tel' , columntype: 'numberinput',  width: 80,
  initeditor: (row, cellvalue, editor) => {
      editor.jqxNumberInput({ decimalDigits: 0, digits: 13 });
  }
},
  { text: 'Matricule_Fiscale', dataField: 'matricule_fiscale', width: 110},
  { text: 'Specificite', dataField: 'specificite', width: 80 , cellsAlign: 'center', columntype: 'numberinput',
  initeditor: (row, cellvalue, editor) => {
      editor.jqxNumberInput({ decimalDigits: 0, digits: 13 });
  }},
  { text: 'Email_Commerciale', dataField: 'emailc'},
  { text: 'Email_Debiteur', dataField: 'emaildb'},
  { text: 'Email_Reservation', dataField: 'emailrs'}
];

  checkForSpecialOrDigit(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } => {
        const name = control.value;
        const no = regex.test(name);
        return no ? null : { specialOrDigit: false };
    };
  }

  checkForCapitalLetter(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } => {
        const name = control.value;
        const no = regex.test(name);
        return no ? null : { capital: false };
    };
  }

  checkForLowerCaseLetter(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } => {
        const name = control.value;
        const no = regex.test(name);
        return no ? null : { lowercase: false };
    };
  }

  checkFormValidity(data?: any): void {
    // tslint:disable-next-line:forin
    for (const k in this.errMsgs) {
        this.errMsgs[k] = [];
        if (this.hotelForm.controls[k].errors && this.hotelForm.controls[k].dirty) {
            for (const e in this.hotelForm.controls[k].errors) {
                if (this.translations[k][e]) {
                    this.errMsgs[k].push(this.translations[k][e]);
                }
            }
        }
    }
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
    this.myGrid .unselectrow(rowIndex);
    const newdata = this.myGrid.getrowdata(rowIndex);
    const ids = newdata.id;
    console.log('this is id', ids);
    console.log('this is new data :', newdata);
    this.editdata(ids, newdata);
  }

  buttonClicked(): void {
    const value = this.myGrid.exportdata('xls', 'grid.xls');
  }


  ngAfterViewInit(): void {
    this.myGrid.autoshowloadelement();
    this.getData();
  }

  getData(): void {
    this.hotelservice.getHotel()
        .subscribe((data) => {
            this.source.localdata = data;
            this.myGrid.updatebounddata();
            console.log(data);
        });
  }


  // tslint:disable-next-line:typedef
  editdata(id , hotel ) {
    return  this.hotelservice.putData(id, hotel)
      .subscribe((data) => {
        this.source.localdata = data;
        this.myGrid.refresh();
      });
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  addHotel() {
    (async () => {
    this.hotelservice.add(this.hotelForm.value).subscribe((data) => {
      console.log(data);
    });
    this.hotelForm.reset();
    await this.delay(300);
    this.myGrid.loadstate(this.getData());
  })();
  }
}

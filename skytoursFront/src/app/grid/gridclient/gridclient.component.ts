import { ClientService } from './../../services/client.service';
import { Component, OnDestroy, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import {  FormGroup, Validators, ValidatorFn, AbstractControl, FormControl } from '@angular/forms';
import { Client } from './../../interfaces/client';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-gridclient',
  templateUrl: './gridclient.component.html',
  styleUrls: ['./gridclient.component.css']
})
export class GridclientComponent {

  @ViewChild('myGrid') myGrid: jqxGridComponent;

  @ViewChild('Button') myHTMLButton: jqxButtonComponent;

 autoload: boolean;
 state: any = null;
 client: Client [];
 clt: Client;
 submitted = false;
 success = false;

 errMsgs: any = {
  cin_passeport: [],
  nationalite: [],
  nom_prenom: [],
  tel: [],
  email: [],
};
  constructor(private clientservice: ClientService , private toastr: ToastrService) {

    this.myForm.valueChanges
        .subscribe(data => this.checkFormValidity(data));

  }

  myForm = new FormGroup({
    cin_passeport: new FormControl ('',
     [
       Validators.required,
       this.checkForSpecialOrDigit(/((@|!|#|\$|%|\^|&|\*|\(|\)|_|\+|\-|=)|[0-9])/),
       this.checkForCapitalLetter(/[A-Z]/),
       this.checkForLowerCaseLetter(/[a-z]/)
   ]),
    nom_prenom: new FormControl('', [ Validators.required, ]),
    nationalite: new FormControl ('', [Validators.required, ]),
    tel: new FormControl ('',
   [
       Validators.required,
       Validators.minLength(8),
       Validators.maxLength(13)
   ]),
     email: new FormControl ('', [Validators.required, Validators.email])

 });

  translations: any = {
  cin_passeport: {
    required: 'The Cin Number OR Passeport Number is required',
    minlength: 'The length must be  8 symbols',
    maxlength: 'The length must not exceed 13 symbols',

  },
  nationalite: {
    required: 'The nationality is required'
  },
  nom_prenom: {
    required: 'The name is required',
  },

  tel: {
    required: 'The phone number is required.',
    minlength: 'The length must be  8 symbols',
    maxlength: 'The length must not exceed 13 symbols'
  },
  email: {
    // required: 'The email is required.',
    email: 'This is not a valid email.'
}
  };

  source: any = {
    localdata: null,
    datafields: [
      { name: 'id', type: 'number' },
      { name: 'cin_passeport', type: 'number' },
      { name: 'nom_prenom', type: 'string' },
      { name: 'email', type: 'string' },
      { name: 'nationalite', type: 'string' },
      { name: 'tel', type: 'number' }
    ],
    datatype: 'json',
    sortcolumn: 'non_prenom',
    sortdirection: 'asc',
    altRows: true,
    sortable: true,
    editable: false,
    selectionMode: 'singleRow',
};

dataAdapter: any = new jqx.dataAdapter(this.source);
columns: any[] = [
  { text: 'CLIENT_ID', dataField: 'id', width: 80 , cellsAlign: 'center', editable: false},
  { text: 'CIN_PASSEPORT_ID', dataField: 'cin_passeport', width: 150 , columntype: 'numberinput',
  initeditor: (row, cellvalue, editor) => {
      editor.jqxNumberInput({ decimalDigits: 0, digits: 8 });
  }},
  { text: 'Nationalite', dataField: 'nationalite', width: 120},
  { text: 'Nom_Complet', dataField: 'nom_prenom', width: 150 },
  { text: 'Email', dataField: 'email'},
  { text: 'TEL', dataField: 'tel' , columntype: 'numberinput',
  initeditor: (row, cellvalue, editor) => {
      editor.jqxNumberInput({ decimalDigits: 0, digits: 13 });
  }
}];

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
      if (this.myForm.controls[k].errors && this.myForm.controls[k].dirty) {
          for (const e in this.myForm.controls[k].errors) {
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

// tslint:disable-next-line:use-life-cycle-interface
ngAfterViewInit(): void {

  this.getData();
  this.myGrid.autoshowloadelement();
}

getData(): void {
  this.clientservice.getClient().subscribe((data) => {
    this.source.localdata = data;
    this.myGrid.updatebounddata();
  });
}
 delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

addClt(): void {
  (async () => {
     this.clientservice.addClient(this.myForm.value).subscribe((data) => {
    console.log(data);
  });
  this.myForm.reset();
  await this.delay(300);
  this.myGrid.loadstate(this.getData());
})();
}

showNotification(from, align) {
  const color = Math.floor((Math.random() * 5) + 1);
  this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Le client est bien <b> Ajouter</b>'
  + '- a la base de donnes', '', {
    timeOut: 5000,
    closeButton: true,
    enableHtml: true,
    toastClass: 'alert alert-success alert-with-icon',
    positionClass: 'toast-' + from + '-' +  align
  });
}

// tslint:disable-next-line:typedef
editdata(id , client ) {
  return  this.clientservice.putData(id, client)
    .subscribe((data) => {
      this.source.localdata = data;
      this.myGrid.refresh();
    });
}
}

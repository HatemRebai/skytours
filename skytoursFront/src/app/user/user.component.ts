import { UserService } from './../services/user.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { User } from '../interfaces/user';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements AfterViewInit, OnInit {

  @ViewChild('myGrid') myGrid: jqxGridComponent;

  constructor(private userService: UserService) {

    this.userForm.valueChanges
        .subscribe(data => this.checkFormValidity(data));
  }

  user: any;
  state: any = null;
  userForm = new FormGroup ({
    nom: new FormControl ('', [Validators.required, ]),
    prenom: new FormControl ('', [Validators.required, ]),
    username: new FormControl ('', [Validators.required, ]),
    email: new FormControl ('',
    [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(13)
    ]),
    password: new FormControl ('',
    [
        Validators.required,
        Validators.minLength(8),
    ])
  });
  errMsgs: any = {
    nom: [],
    prenom: [],
    username: [],
    email: [],
    password: []
  };
  translations: any = {
  nom: {
    required: 'Le nom est obligatoire',
  },
  prenom: {
    required: 'Le Prenom est obligatoire'
  },
  username: {
    required: 'username  est obligatoire'
  },
  email: {
    required: 'Email est obligatoire',
    email: 'email doit etre comme example@domaine.com'
  },
  password: {
    required: 'email est obligatoire.',
    minlength: 'password doit etre au min 8 symbols',
}
  };

  source: any = {
    localdata: null,
    datafields: [
      { name: 'id', type: 'number' },
      { name: 'nom', type: 'string' },
      { name: 'prenom', type: 'String' },
      { name: 'username', type: 'string' },
      { name: 'email', type: 'String' },
      { name: 'password', type: 'string' }
    ],
    datatype: 'json',
    sortcolumn: 'username',
    sortdirection: 'asc',
    altRows: true,
    sortable: true,
    editable: false,
    selectionMode: 'singleRow',
};

dataAdapter: any = new jqx.dataAdapter(this.source);

columns: any[] = [

  { text: 'USER_ID', dataField: 'id', width: 80 , cellsAlign: 'center', editable: false},
  { text: 'Nom', dataField: 'nom', width: 150 },
  { text: 'Prenom', dataField: 'prenom', width: 220},
  { text: 'Username', dataField: 'username', width: 150 },
  { text: 'Email', dataField: 'email'},
  { text: 'Password', dataField: 'password' , columntype: 'numberinput',
 /* initeditor: (row, cellvalue, editor) => {
      editor.jqxNumberInput({ decimalDigits: 0, digits: 13 });
  }*/
}];

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.myGrid.autoshowloadelement();
    this.getUsers();

  }

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
        if (this.userForm.controls[k].errors && this.userForm.controls[k].dirty) {
            for (const e in this.userForm.controls[k].errors) {
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
    this.update(ids, newdata);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  addUser() {
    (async () => {
    this.userService.save(this.userForm.value).subscribe((data) => {
      console.log(data);
      console.log(this.userForm.value);
    });
      this.userForm.reset();
      await this.delay(300);
      this.myGrid.loadstate(this.getUsers());
    })();

  }
  update(id, user: any) {
    return  this.userService.Update(id, user)
    .subscribe((data) => {
      this.user = data;
  });
  }
  getUsers() {
  this.userService.getUsers().subscribe((data) => {
      this.user = data;
      this.source.localdata = data;
      this.myGrid.updatebounddata();
  });
  }
}

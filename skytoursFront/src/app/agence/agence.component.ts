import { Agence } from './../interfaces/agence';
import { AgenceService } from './../services/agence.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, ValidatorFn, AbstractControl, FormControl } from '@angular/forms';


@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {


  constructor(private agenceservice: AgenceService) {

    this.agenceForm.valueChanges
        .subscribe(data => this.checkFormValidity(data));
  }
  agence: Agence;
  state: any = null;
  agenceForm = new FormGroup ({
    raison_sociale: new FormControl ('', [Validators.required, ]),
    matricule_fiscale: new FormControl ('', [Validators.required, ]),
    adresse: new FormControl ('', [Validators.required, ]),
    tel: new FormControl ('',
    [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(13)
    ]),
    email: new FormControl ('', [Validators.required, Validators.email]),
    responsable: new FormControl ('', [Validators.required, ]),
    tel_responsable: new FormControl ('',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(13)
       ])
  });
  errMsgs: any = {
    raison_sociale: [],
    matricule_fiscale: [],
    adresse: [],
    tel: [],
    email: [],
    responsable: [],
    tel_responsable: []

  };
  translations: any = {
  raison_sociale: {
    required: 'Le Raison Sociale du l"agrnce est obligatoire',
  },
  matricule_fiscale: {
    required: 'Le matricule fiscale du l"agence est obligatoire'
  },
  adresse: {
    required: 'L"adresse du l"agence  est obligatoire'
  },
  tel: {
    required: 'Le numero telephone du hotel est obligatoire',
    minlength: 'tel doit etre au min 8 symbols',
    maxlength: 'tel ne doit pas depasse 13 symbols'
  },
  email: {
    required: 'email est obligatoire.',
    email: 'This is not a valid email n"est pas valide'
},
  responsable: {
    required: 'Le nom du responsable est obligatoire'
},
  tel_responsable: {
    required: 'Le numero telephone du responsblae est obligatoire',
    minlength: 'tel doit etre au min 8 symbols',
    maxlength: 'tel ne doit pas depasse 13 symbols'
}
  };


  ngOnInit(): void {
    this.getAgence();
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
        if (this.agenceForm.controls[k].errors && this.agenceForm.controls[k].dirty) {
            for (const e in this.agenceForm.controls[k].errors) {
                if (this.translations[k][e]) {
                    this.errMsgs[k].push(this.translations[k][e]);
                }
            }
        }
    }
  }

  addAgence() {
    this.agenceservice.addAgence(this.agenceForm.value).subscribe((data) => {
      console.log(data);
      console.log(this.agenceForm.value);
    });
  }
  update(id, agence) {
    return  this.agenceservice.putData(id, agence)
    .subscribe((data) => {
      this.agence = data;
  });
  }
  getAgence() {
  this.agenceservice.getAll()
  .subscribe((data) => {
      this.agence = data;
      console.log(data);
  });
  }
}

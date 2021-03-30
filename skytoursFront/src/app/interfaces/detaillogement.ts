export interface Detaillogement {
  id: number ;
  detailHotel: number;
  logement: number;
  prixA: number;
  prixV: number;
  tauxM: number;
  tauxR: number;
  du: String;
  au: String;

    /*    detailHotel: new FormControl ('', [Validators.required, ]),
    logement: new FormControl ('', [Validators.required, ]),
    prixA: new FormControl ('', [Validators.required, ]),
    prixV: new FormControl ('', [Validators.required, ]),
    tauxM: new FormControl ('', [Validators.required, ]),
    tauxR: new FormControl ('', [Validators.required, ]),
    du: new FormControl ('', [Validators.required, ]),
    au: new FormControl ('', [Validators.required, ]),*/
}

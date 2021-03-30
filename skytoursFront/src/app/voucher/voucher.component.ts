import { VoucherService } from './../services/voucher.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit , AfterViewInit {

  @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;

  constructor(private voucherService: VoucherService) { }



  source: any = {
    localdata: null,
    datafields: [
      { name: 'id', type: 'number' },
      { name: 'date_voucher', type: 'string' },
      { name: 'reservation_id',  map: 'reservation>id'},
      { name: 'date_reservation', map: 'reservation>date_reservation' },
      { name: 'date_arrivee', map: 'reservation>date_arrivee' },
      { name: 'date_depart', map: 'reservation>date_depart' },
      { name: 'client', map: 'reservation>client' },
      { name: 'hotel', map: 'reservation>hotel' },
      { name: 'logement', map: 'reservation>logement' },
      { name: 'specification', map: 'reservation>specification' },
      { name: 'supplement', map: 'reservation>supplement' },
      { name: 'duree', map: 'reservation>duree' },
      { name: 'totalp', map: 'reservation>totalp' } ,
      { name: 'prixachat', map: 'reservation>prixachat' },
      { name: 'prixvente', map: 'reservation>prixvente' }

    ],
    datatype: 'json',
    sortcolumn: 'id',
    sortdirection: 'asc',
    altRows: true,
    sortable: true,
  };


  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [

    { text: 'DATE_ARRIVEE', dataField: 'date_arrivee', width: 90, cellsAlign: 'center' },
    { text: 'DATE_DEPART', dataField: 'date_depart' , width: 90, cellsAlign: 'center'},
    { text: 'ID', dataField: 'id', width: 40, cellsAlign: 'center'},
    { text: 'DATE_VOUCHER', dataField: 'date_voucher', width: 90, cellsAlign: 'center' },
    { text: 'RESERVATION_ID', dataField: 'reservation_id', width: 90, cellsAlign: 'center' },
    { text: 'DATE RESERVATION', dataField: 'date_reservation', width: 140, cellsAlign: 'center' },
    { text: 'CLIENT', dataField: 'client' , width: 100, cellsAlign: 'center'},
    { text: 'HOTEL', dataField: 'hotel' , width: 70, cellsAlign: 'center'},
    { text: 'Logement', dataField: 'logement' , width: 80, cellsAlign: 'center'},
    { text: 'Specification', dataField: 'specification', width: 100, cellsAlign: 'center' },
    { text: 'Supplement', dataField: 'supplement' , width: 90, cellsAlign: 'center'},
    { text: 'T_PAX', dataField: 'totalp', width: 60, cellsAlign: 'center' },
    { text: 'PRIX_A', dataField: 'prixachat', width: 60, cellsAlign: 'center' },
    { text: 'PRIX_V', dataField: 'prixvente', width: 60, cellsAlign: 'center' },

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


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.myGrid.autoshowloadelement();
    this.listVoucher();
  }

  listVoucher() {
    this.voucherService.getAll().subscribe((data) => {
      this.source.localdata = data;
      this.myGrid.updatebounddata();
  });
}
}

import { LogementService } from './../../services/logement.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
export class LogementComponent implements AfterViewInit {

  @ViewChild('myGrid') myGrid: jqxGridComponent;
  @ViewChild('Button') myHTMLButton: jqxButtonComponent;

  constructor(private logementservice: LogementService) { }

logementForm = new FormGroup ({
  designation: new FormControl ('', [Validators.required]),

});
source: any = {
  localdata: null,
  datafields: [
    { name: 'id', type: 'number' },
    { name: 'designation', type: 'string' }
  ],
  datatype: 'json',
  sortcolumn: 'designation',
  sortdirection: 'asc',
  altRows: true,
  sortable: true,
  editable: false,
  selectionMode: 'singleRow',
};

dataAdapter: any = new jqx.dataAdapter(this.source);

columns: any[] = [

{ text: 'ID', dataField: 'id', width: 80 , cellsAlign: 'center', editable: false},
{ text: 'Type de Chmabre', dataField: 'designation' }
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
ngAfterViewInit(): void {
  this.myGrid.autoshowloadelement();
  this.getdata();
}
getdata(): void {
  this.logementservice.getAll()
      .subscribe((data) => {
          this.source.localdata = data;
          this.myGrid.updatebounddata();
          console.log(data);
      });
}

// tslint:disable-next-line:typedef
editdata(id , logement ) {
  return  this.logementservice.put(id, logement)
    .subscribe((data) => {
      this.source.localdata = data;
      this.myGrid.refresh();
    });
}
delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

adddata() {
  (async () => {
  this.logementservice.add(this.logementForm.value).subscribe((data) => {
    console.log(data);
  });
  this.logementForm.reset();
  await this.delay(300);
  this.myGrid.loadstate(this.getdata());
})();
}
}

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { constructor } from 'ajv';
import { ready } from 'jquery';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { SpecificationService } from '../../services/specification.service';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements AfterViewInit {

  @ViewChild('Grid') myGrid: jqxGridComponent;
   @ViewChild('Button') myHTMLButton: jqxButtonComponent;

    constructor(private specificationService: SpecificationService) { }

    specificationForm = new FormGroup ({
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
  { text: 'designation', dataField: 'designation' }
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

 delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
    }

addData() {
      (async () => {
      this.specificationService.add(this.specificationForm.value).subscribe((data) => {
        console.log(data);
      });
      this.specificationForm.reset();
      await this.delay(300);
      this.myGrid.loadstate(this.getdata());
    })();
    }

getdata(): void {
      this.specificationService.getAll()
          .subscribe((data) => {
              this.source.localdata = data;
              this.myGrid.updatebounddata();
              console.log(data);
          });
    }
    // tslint:disable-next-line:typedef
editdata(id , specification ) {
    return  this.specificationService.put(id, specification)
      .subscribe((data) => {
        this.source.localdata = data;
        this.myGrid.refresh();
      });
  }

}

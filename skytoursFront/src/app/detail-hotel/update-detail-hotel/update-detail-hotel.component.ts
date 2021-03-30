import { Detailsupplement } from './../../interfaces/detailsupplement';
import { DetailsupplementService } from './../../services/detailsupplement.service';
import { DetaillogementService } from './../../services/detaillogement.service';
import { Detaillogement } from './../../interfaces/detaillogement';
import { DetailrepartitionService } from './../../services/detailrepartition.service';
import {  DetailRepartition } from './../../interfaces/detailrepartition';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';

@Component({
  selector: 'app-update-detail-hotel',
  templateUrl: './update-detail-hotel.component.html',
  styleUrls: ['./update-detail-hotel.component.css']
})
export class UpdateDetailHotelComponent implements AfterViewInit {



constructor(private detailrepartitionService: DetailrepartitionService ,
            private detaillogementService: DetaillogementService ,
            private detailsuppplementService: DetailsupplementService) {}


  @ViewChild('RepDataTable') RepDataTable: jqxDataTableComponent;
  @ViewChild('LogDataTable') LogDataTable: jqxDataTableComponent;
  @ViewChild('SuppDataTable') SuppDataTable: jqxDataTableComponent;

  detailRepartition: DetailRepartition;
  detaillogement: Detaillogement;
  detailsupplement: Detailsupplement;

  repCancelButton: jqwidgets.jqxButton;
  repUpdateButton: jqwidgets.jqxButton;
  logCancelButton: jqwidgets.jqxButton;
  logUpdateButton: jqwidgets.jqxButton;
  suppCancelButton: jqwidgets.jqxButton;
  suppUpdateButton: jqwidgets.jqxButton;
  rowIndex: number;
  prixB: number;
  prix1: number;
  prix2: number;
  prix3: number;
  prix4: number;
  prix5: number;
  prix6: number;
  logprix: number;
  suppPrix: number;

  source: any = {
    localdata: null,
    datafields: [
      { name: 'id', type: 'number' },
      { name: 'repartition', type: 'number' },
      { name: 'detailHotel', type: 'number' },
      { name: 'prixB', type: 'number' },
      { name: 'prixT', type: 'number' },
      { name: 'prix1', type: 'number' },
      { name: 'prix2', type: 'number' },
      { name: 'prix3', type: 'number' },
      { name: 'prix4', type: 'number' },
      { name: 'prix5', type: 'number' },
      { name: 'prix6', type: 'number' },
    ],
    datatype: 'json',
  };
    dataAdapter: any = new jqx.dataAdapter(this.source);
    columns: any[] = [

      { text: 'ID', dataField: 'id', width: 80 , cellsAlign: 'center', editable: false},
      { text: 'ID_REAPARTITION', dataField: 'repartition' , editable: false},
      { text: 'ID_DETAIL', dataField: 'detailHotel' , editable: false},
      { text: 'Prix_Total', dataField: 'prixT', width: 80 , cellsAlign: 'center', editable: false},
      { text: 'Prixb', dataField: 'prixB', cellsAlign: 'center'},
      { text: 'Prix1', dataField: 'prix1', cellsAlign: 'center'},
      { text: 'Prix2', dataField: 'prix2', cellsAlign: 'center'},
      { text: 'Prix3', dataField: 'prix3', cellsAlign: 'center'},
      { text: 'Prix4', dataField: 'prix4', cellsAlign: 'center'},
      { text: 'Prix5', dataField: 'prix5', cellsAlign: 'center'},
      { text: 'Prix6', dataField: 'prix6', cellsAlign: 'center'},
    ];

    /* DetailLogement Datatable  */
    logsource: any = {
      localdata: null,
      datafields: [
        { name: 'id', type: 'number' },
        { name: 'logement', type: 'number' },
        { name: 'detailHotel', type: 'number' },
        { name: 'prixB', type: 'number' },
      ],
      datatype: 'json',
    };
      logdataAdapter: any = new jqx.dataAdapter(this.logsource);
      logcolumns: any[] = [

        { text: 'ID', dataField: 'id', width: 80 , cellsAlign: 'center', editable: false},
        { text: 'ID_LOGEMENT', dataField: 'logement' , editable: false},
        { text: 'ID_DETAIL', dataField: 'detailHotel' , editable: false},
        { text: 'Prix', dataField: 'prixB', cellsAlign: 'center'},
      ];

      /* DetailSuppelement Datatable  */
    suppsource: any = {
      localdata: null,
      datafields: [
        { name: 'id', type: 'number' },
        { name: 'supplement', type: 'number' },
        { name: 'detailHotel', type: 'number' },
        { name: 'prix', type: 'number' },
      ],
      datatype: 'json',
    };
      supdataAdapter: any = new jqx.dataAdapter(this.suppsource);
      suppcolumns: any[] = [

        { text: 'ID', dataField: 'id', width: 80 , cellsAlign: 'center', editable: false},
        { text: 'ID_SUPPLEMENT', dataField: 'supplement' , editable: false},
        { text: 'ID_DETAIL', dataField: 'detailHotel' , editable: false},
        { text: 'Prix', dataField: 'prix', cellsAlign: 'center'},
      ];
/* DetailRepartition render Toolbar */
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
        //  createButtons('editButton', toTheme('jqx-icon-edit')),
        //  createButtons('deleteButton', toTheme('jqx-icon-delete')),
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
      // we use TypeScript way of creating widgets here
    //  this.myEditButton = jqwidgets.createInstance(buttons[0], 'jqxButton', otherButtonsOptions);
   //   this.myDeleteButton = jqwidgets.createInstance(buttons[1], 'jqxButton', otherButtonsOptions);
      this.repCancelButton = jqwidgets.createInstance(buttons[0], 'jqxButton', otherButtonsOptions);
      this.repUpdateButton = jqwidgets.createInstance(buttons[1], 'jqxButton', otherButtonsOptions);

  /*    const editTooltopOptions: jqwidgets.TooltipOptions = {
              position: 'bottom', content: 'Edit'
          };
      const deleteTooltopOptions: jqwidgets.TooltipOptions = {
              position: 'bottom', content: 'Delete'
          };
          */
      const cancelTooltopOptions: jqwidgets.TooltipOptions = {
              position: 'bottom', content: 'Cancel'
          };
      const updateTooltopOptions: jqwidgets.TooltipOptions = {
              position: 'bottom', content: 'Save Changes'
        };

        this.repCancelButton.addEventHandler('click', (event: any) => {
          if (!this.repCancelButton.disabled) {
              // cancel changes.
              this.RepDataTable.endRowEdit(this.rowIndex, true);
            //  thisRep.clearSelection();
          }
      });

      this.repUpdateButton.addEventHandler('click', (event: any) => {

        const Data = this.RepDataTable.getSelection();
        const newdata =  Data[0];
        const idR = newdata.id;
       /* const prixB = Number(newdata.prixb);

        const px1 = prixB  - (prixB * (Number(newdata.prix1) / 100));
        const px2 = prixB  - (prixB * (Number(newdata.prix2) / 100));
        const px3 = prixB  - (prixB * (Number(newdata.prix3) / 100));
        const px4 = prixB  - (prixB * (Number(newdata.prix4) / 100));
        const px5 = prixB  - (prixB * (Number(newdata.prix5) / 100));
        const px6 = prixB  - (prixB * (Number(newdata.prix6) / 100));

        const prixTotal = prixB + px1 + px2 + px3 + px4 + px5 + px6;

        newdata.prixT = prixTotal;
        this.source.datafields.prixT = prixTotal; */

        const newJson = { prixb: ` ${newdata.prixB} `, prix1: ` ${newdata.prix1}  `, prix2: ` ${newdata.prix2}
        `, prix3: ` ${newdata.prix3}`, prix4: ` ${newdata.prix4}` ,  prix5: ` ${newdata.prix5}`
        , prix6: ` ${newdata.prix6}` , prixT: ` ${newdata.prixT} `};

        console.log('this is id', idR);
        console.log('this is new data :', newJson);
           return  this.detailrepartitionService.put(idR, newJson).subscribe((data) => {
          this.source.localdata = data;
        });
      });
}
/* DetailLogement render Toolbar */
logrenderToolbar = (toolBar: any): void => {
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
    //  createButtons('editButton', toTheme('jqx-icon-edit')),
    //  createButtons('deleteButton', toTheme('jqx-icon-delete')),
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
  // we use TypeScript way of creating widgets here
//  this.myEditButton = jqwidgets.createInstance(buttons[0], 'jqxButton', otherButtonsOptions);
//   this.myDeleteButton = jqwidgets.createInstance(buttons[1], 'jqxButton', otherButtonsOptions);
  this.logCancelButton = jqwidgets.createInstance(buttons[0], 'jqxButton', otherButtonsOptions);
  this.logUpdateButton = jqwidgets.createInstance(buttons[1], 'jqxButton', otherButtonsOptions);

/*    const editTooltopOptions: jqwidgets.TooltipOptions = {
          position: 'bottom', content: 'Edit'
      };
  const deleteTooltopOptions: jqwidgets.TooltipOptions = {
          position: 'bottom', content: 'Delete'
      };
      */
  const cancelTooltopOptions: jqwidgets.TooltipOptions = {
          position: 'bottom', content: 'Cancel'
      };
  const updateTooltopOptions: jqwidgets.TooltipOptions = {
          position: 'bottom', content: 'Save Changes'
    };

    this.logCancelButton.addEventHandler('click', (event: any) => {
      if (!this.logCancelButton.disabled) {
          // cancel changes.
          this.LogDataTable.endRowEdit(this.rowIndex, true);
        //  thisRep.clearSelection();
      }
  });

  this.logUpdateButton.addEventHandler('click', (event: any) => {

    const Data = this.LogDataTable.getSelection();
    const newdata =  Data[0];
    const idL = newdata.id;

    const newJson = { prixB: ` ${newdata.prixB} `};

    console.log('this is id', idL);
    console.log('this is new data :', newJson);
       return  this.detaillogementService.put(idL, newJson).subscribe((data) => {
      this.logsource.localdata = data;
    });
  });

}
/* DetailSupplement Render Toolbar */
supprenderToolbar = (toolBar: any): void => {
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
    //  createButtons('editButton', toTheme('jqx-icon-edit')),
    //  createButtons('deleteButton', toTheme('jqx-icon-delete')),
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
  // we use TypeScript way of creating widgets here
//  this.myEditButton = jqwidgets.createInstance(buttons[0], 'jqxButton', otherButtonsOptions);
//   this.myDeleteButton = jqwidgets.createInstance(buttons[1], 'jqxButton', otherButtonsOptions);
  this.suppCancelButton = jqwidgets.createInstance(buttons[0], 'jqxButton', otherButtonsOptions);
  this.suppUpdateButton = jqwidgets.createInstance(buttons[1], 'jqxButton', otherButtonsOptions);

/*    const editTooltopOptions: jqwidgets.TooltipOptions = {
          position: 'bottom', content: 'Edit'
      };
  const deleteTooltopOptions: jqwidgets.TooltipOptions = {
          position: 'bottom', content: 'Delete'
      };
      */
  const cancelTooltopOptions: jqwidgets.TooltipOptions = {
          position: 'bottom', content: 'Cancel'
      };
  const updateTooltopOptions: jqwidgets.TooltipOptions = {
          position: 'bottom', content: 'Save Changes'
    };

    this.suppCancelButton.addEventHandler('click', (event: any) => {
      if (!this.suppCancelButton.disabled) {
          // cancel changes.
          this.SuppDataTable.endRowEdit(this.rowIndex, true);
        //  thisRep.clearSelection();
      }
  });

  this.suppUpdateButton.addEventHandler('click', (event: any) => {

    const Data = this.SuppDataTable.getSelection();
    const newdata =  Data[0];
    const idL = newdata.id;

    const newJson = { prix: ` ${newdata.prix} `};

    console.log('this is id', idL);
    console.log('this is new data :', newJson);
       return  this.detailsuppplementService.put(idL, newJson).subscribe((data) => {
      this.suppsource.localdata = data;
    });
  });

}

ngAfterViewInit(): void {

  this.RepDataTable.autoShowLoadElement();
  this.RepDetailList();
  this.LogDataTable.autoShowLoadElement();
  this.LogDetailList();
  this.SuppDataTable.autoShowLoadElement();
  this.SuppDetailList();

}


  onRowEndEdit(event: any) {

    const Data = this.RepDataTable.getSelection();
    const newdata =  Data[0];
    this.prixB = Number(newdata.prixB);

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
        this.prix3 =  this.prixB - (this.prixB * (Number(newdata.prix3) / 100));
        newdata.prix3 = this.prix3;
      }

      if (newdata.prix4 === '') {
        this.prix4 = 0;
        newdata.prix4= 0;
      } else  if (Number(newdata.prix4) === 0) {
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

    const prixTotal = this.prixB + this.prix1 + this.prix2 + this.prix3  + this.prix4 + this.prix5  + this.prix6 ;

    console.log(prixTotal);

    newdata.prixb = this.prixB;
    newdata.prixT = prixTotal;

    this.source.datafields.prixT = prixTotal;
    console.log(newdata);

  }
  onLogRowEndEdit(event: any) {
    const Data = this.LogDataTable.getSelection();
    const newdata =  Data[0];
    console.log(newdata);
    this.logprix = Number(newdata.prixB);

  }
  onSuppRowEndEdit(event: any) {
    const Data = this.SuppDataTable.getSelection();
    const newdata =  Data[0];
    console.log(newdata);
    this.suppPrix = Number(newdata.prixB);

  }

RepDetailList() {
  this.detailrepartitionService.getAll().subscribe((data) => {
    this.detailRepartition = data;
    this.source.localdata = data;
    this.RepDataTable.updateBoundData();
    console.log( this.detailRepartition);
     });

}

SuppDetailList() {
  this.detailsuppplementService.getAll().subscribe((data) => {
    this.detailsupplement = data;
    this.suppsource.localdata = data;
    this.SuppDataTable.updateBoundData();
    console.log( this.detailsupplement);
     });

}

LogDetailList() {
  this.detaillogementService.getAll().subscribe((data) => {
    this.detaillogement = data;
    this.logsource.localdata = data;
    this.LogDataTable.updateBoundData();
    console.log( this.detaillogement);
     });

}
/*
editRepdata(event) {

     const args = event.args;
     const rowIndex = args.rowindex;
    // thisRep.unselectRow(rowIndex);
     const newdata = this.RepDataTable.getSelection();
     const idR = newdata[0].id;
     console.log('this is id', idR);
     console.log('this is new data :', newdata);
        return  this.detailrepartitionService.put(idR, newdata)
     .subscribe((data) => {
       this.source.localdata = data;
     });
 } */

}

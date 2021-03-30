import { VoucherComponent } from './../../voucher/voucher.component';
import { DetailHotelComponent } from './../../detail-hotel/detail-hotel/detail-hotel.component';
import { HotelComponent } from './../../hotel/hotel.component';
import { ReservationComponent } from './../../reservation/reservation.component';
import { AgenceComponent } from './../../agence/agence.component';
import { GridclientComponent } from './../../grid/gridclient/gridclient.component';
import { UserComponent } from './../../user/user.component';
import { LoginComponent } from './../../login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LogementComponent } from '../../detail-hotel/logement/logement.component';
import { RepartitionComponent } from '../../detail-hotel/repartition/repartition.component';
import { SpecificationComponent } from '../../detail-hotel/specification/specification.component';
import { SupplementComponent } from '../../detail-hotel/supplement/supplement.component';
import { TypologieComponent } from '../../detail-hotel/typologie/typologie.component';
import { UpdateDetailHotelComponent } from '../../detail-hotel/update-detail-hotel/update-detail-hotel.component';
import { PrinterComponent } from '../../print/printer/printer.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxCalendarModule } from 'jqwidgets-ng/jqxcalendar';
import { jqxDataTableModule } from 'jqwidgets-ng/jqxdatatable';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    jqxCalendarModule,
    jqxButtonModule,
    jqxDataTableModule,
    jqxGridModule,
    ToastrModule.forRoot() ,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UserComponent,
    GridclientComponent,
    AgenceComponent,
    ReservationComponent,
    HotelComponent,
    DetailHotelComponent,
    LogementComponent,
    SpecificationComponent,
    TypologieComponent,
    SupplementComponent,
    RepartitionComponent,
    UpdateDetailHotelComponent,
    PrinterComponent,
    VoucherComponent

  ],
  providers: [],
})

export class AdminLayoutModule {}

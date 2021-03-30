import { VoucherComponent } from './../../voucher/voucher.component';
import { UserComponent } from './../../user/user.component';
import { UpdateDetailHotelComponent } from './../../detail-hotel/update-detail-hotel/update-detail-hotel.component';
import { RepartitionComponent } from './../../detail-hotel/repartition/repartition.component';
import { TypologieComponent } from './../../detail-hotel/typologie/typologie.component';
import { SpecificationComponent } from './../../detail-hotel/specification/specification.component';
import { SupplementComponent } from './../../detail-hotel/supplement/supplement.component';
import { ReservationComponent } from './../../reservation/reservation.component';
import { DetailHotelComponent } from './../../detail-hotel/detail-hotel/detail-hotel.component';
import { LogementComponent } from './../../detail-hotel/logement/logement.component';
import { HotelComponent } from './../../hotel/hotel.component';
import { AgenceComponent } from './../../agence/agence.component';
import { GridclientComponent } from './../../grid/gridclient/gridclient.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { PrinterComponent } from '../../print/printer/printer.component';


export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'users',      component: UserComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'client',  component: GridclientComponent },
    { path: 'agence',        component: AgenceComponent },
    { path: 'hotel',        component: HotelComponent },
    { path: 'detailhotel',     component: DetailHotelComponent },
    { path: 'logement',     component: LogementComponent },
    { path: 'specification',     component: SpecificationComponent },
    { path: 'typologie',     component: TypologieComponent },
    { path: 'supplement',     component: SupplementComponent },
    { path: 'repartition',     component: RepartitionComponent },
    { path: 'reservation',        component: ReservationComponent },
    { path: 'updatedetailhotel',        component: UpdateDetailHotelComponent  },
    { path: 'printer',  component: PrinterComponent },
    { path: 'voucher',  component: VoucherComponent },
];

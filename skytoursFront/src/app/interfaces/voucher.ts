import { Reservation } from './reservation';
export interface Voucher {

  id: number;
  date_voucher: string;
  id_reservation: Reservation;

}

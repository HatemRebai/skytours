import { Reservation } from './reservation';

export interface FactureClient {
  id: number;
  date: string;
  prixt_ht: number;
  prixu_ttc: number;
  tva: number;
  prix_tva: number;
  prix_dtimbre: number;
  prixt_ttc: number;
  prixt_ch: string;
  rib: string;
  reservation: Reservation;
  total_ttc: number;
}

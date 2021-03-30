export interface Reservation {

  id: number;
  hotel: String;
  client: String;
  typologie: String;
  date_reservation: String;
  date_arrivee: String;
  date_depart: String;
  logement: String;
  prixlogement: number;
  specification: String;
  supplement: String;
  prixsupplement: number;
  duree: number;
  adulte: number;
  enfant: number;
  bebe: number;
  totalp: number;
  prixres: number;
  observations: String;
}

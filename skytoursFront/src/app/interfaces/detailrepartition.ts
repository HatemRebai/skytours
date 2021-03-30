import { DetailHotel } from './detailhotel';
import { Repartition } from './repartition';

export interface DetailRepartition {
  id: number;
  prixb: number;
  prix1: number;
  prix2: number;
  prix3: number;
  prix4: number;
  prix5: number;
  prix6: number;
  prixT: number;
  repartition: Repartition [];
  detailHotel: DetailHotel[];

}

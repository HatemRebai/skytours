import { Hotel } from './hotel';
import { Logement } from './logement';
import { Repartition } from './repartition';
import { Specification } from './specification';
import { Supplement } from './supplement';
import { Typologie } from './typologie';

export interface DetailHotel {
    id: number;
    idhotel: Hotel;
    logement: Logement [];
    repartition: Repartition [];
    specification: Specification [];
    typologie: Typologie[];
    supplement: Supplement [];
  }

import { certificat } from "./Certificat";
import { Ordonance } from "./Ordonance";

export enum EtatConsultation {
  VALIDE, ANNULE
}
export class Consultation {
  idConsultation: string;
  lieu: string;
  observation: string;
  etat: EtatConsultation;
  dateConsultation: Date;
  certificat: certificat;
  ordonance: Ordonance;
}
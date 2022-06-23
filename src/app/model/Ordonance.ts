import { Consultation } from "./Consultation";
import { Medicament } from "./Medicament";
import { Prescription } from "./Prescription";
export enum EtatOrdonance {
    ACTIVE, DESACTIVE
}
export class Ordonance {
    idOrdonance: string;
    dateOrdonance: Date;
    
    etat: EtatOrdonance;
    nouveaute: boolean;

    medicaments :Medicament[];
   
}
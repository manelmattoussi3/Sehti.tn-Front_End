import { Consultation } from "./Consultation";
import { Prescription } from "./Prescription";
export enum EtatOrdonance {
    ACTIVE, DESACTIVE
}
export class Ordonance {
    idOrdonance: string;
    dateOrdonance: Date;
    numOrdonance: number;
    etat: EtatOrdonance;
    nouveaute: boolean;

    prescriptions :Prescription[];
    consultation: Consultation;
}
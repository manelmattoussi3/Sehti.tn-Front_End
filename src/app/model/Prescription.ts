import { Medicament } from "./Medicament";
import { Ordonance } from "./Ordonance";
export enum EtatMedicament {
    TRAITE,NONTRAITE
}
export class Prescription {
    idPre: string;
    dateDebut: Date;
    dateFin: Date;
    dose: number;
    nbrFois: number;
    unite: string;
    etat: EtatMedicament;

    medicament: Medicament;

}
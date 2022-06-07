import { DemandeAcce } from "./DemandeAcce";

export enum PraticienType {
    MEDECIN, ANALYSEUR, RADIOLOGUE
}
export enum FilierePraticien {
    SPECIALISTE, FAMILLE, GENIRALISTE
}
export class praticien {
    idPraticien: string;
    type: PraticienType;
    lieuExercice: string;
    ville: string;
    disponibilite: boolean;
    specialite: string;
    filiere: FilierePraticien;
    demandesacces: DemandeAcce[];
}
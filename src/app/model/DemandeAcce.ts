import { dossierMedical } from "./DossierMedical";
import { praticien } from "./Praticien";

export enum EtatAcce {
    EnAttente, ACCEPT, REFUSE, PERMANENT, ANNULE 
}
export class DemandeAcce {
    idDemande: string;
    etat: EtatAcce;
    dateCreation:Date ;
    praticien: praticien;

    dossierMedical: dossierMedical;
}
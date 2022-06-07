import { Consultation } from "./Consultation";
import { dossierMedical } from "./DossierMedical";
import { OperationAnalyse } from "./OperationAnalyse";
import { OperationRadio } from "./OperationRadio";

export class FicheConsultation {
    idFiche: string;
    observation: string;
    dateCreation: Date;
    radio: OperationRadio;
    consultation: Consultation;
    analyse: OperationAnalyse;

    dossier: dossierMedical;
}
import { Consultation } from "./Consultation";
import { DemandeAcce } from "./DemandeAcce";
import { FicheConsultation } from "./FicheConsultation";
import { LettreConfidentielle } from "./LettreConfidentielle";
import { OperationAnalyse } from "./OperationAnalyse";
import { OperationRadio } from "./OperationRadio";
import { patient } from "./patient";

export enum GroupSanguin {
  Aplus, Amoins, Bplus, Bmoins, ABplus, ABmoins, Oplus, Omoins
}
export class dossierMedical {
  idDossier: string;
  numDossier: number;
  dateCreation: Date;
  codeAcce: string;
  observation: string;
  poids: number;
  taille: number;
  perimetreCarnien: number;
  sang: GroupSanguin;
  patient: patient;
  demandesacces: DemandeAcce[];
  fiche:FicheConsultation[];
  lettres: LettreConfidentielle[];
  

}
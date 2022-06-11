export enum ExamenRadio {
    IRM, TEP, SCANNERX, ECHOGRAPHIE_DOPPLER, ECHOGRAPHIE_SCINTIGRAPHIE, TOMOGRAPHIE
}
export enum etatAnalyse {
    Terminé,EnCours 
  }
export class OperationRadio {
    idOperation: string;
    observation: string;
    dateOperation: Date;
    motif: string;
    resultat: string;
    etablissement: string;
    type: ExamenRadio;
    etat:etatAnalyse;
    codeRadio:String;
}
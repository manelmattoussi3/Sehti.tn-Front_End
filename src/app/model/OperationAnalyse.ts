export enum ExamenAnalyse {
  SANG,URINE,BACTERIOLOGIQUE,SEPARASITOLOGIQUE
 
  }
  export enum etatAnalyse {
    Terminé,EnCours 
  }
export class OperationAnalyse {
    idOperation: string;
    observation: string;
    codeAnalyse: string;
    dateAnalyse: Date;
    motif: string;
    resultat: string;
    etablissement: string;
    type: ExamenAnalyse;
    etat: etatAnalyse;
}
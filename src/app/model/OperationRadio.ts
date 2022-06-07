export enum ExamenRadio {
    IRM, TEP, SCANNERX, ECHOGRAPHIE_DOPPLER, ECHOGRAPHIE_SCINTIGRAPHIE, TOMOGRAPHIE
}
export class OperationRadio {
    idOperation: string;
    observation: string;
    dateOperation: Date;
    motif: string;
    resultat: string;
    etablissement: string;
    type: ExamenRadio;
}
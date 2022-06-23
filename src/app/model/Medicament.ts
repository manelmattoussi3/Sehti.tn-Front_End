import { Prescription } from "./Prescription";

export enum ClasseMedical {
    Allergologie,Anesthésie,Antalgique,Antipyrétique,Anti_inflammatoires,
    cardiologie,Dermatologie,Endocrinologie,Gastro,Gynécologie,Hématologie,
    Immunologie,Infectiologie,Neurologie,Néphrologie,Ophtalmologie,Autre
}
export class Medicament {
    idMedicament: string;
    name: string;
    classe: ClasseMedical;

    prescription :Prescription;
}
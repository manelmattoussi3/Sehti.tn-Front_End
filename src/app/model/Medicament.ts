import { Prescription } from "./Prescription";

export enum ClasseMedical {

}
export class Medicament {
    idMedicament: string;
    name: string;
    classe: ClasseMedical;

    prescriptions :Prescription[];
}
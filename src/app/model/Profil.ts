import { appUser } from "./AppUser";
export enum RoleType {
    ADMIN, PHARMACIEN
}
export class profil {

    idProfil: string;

    description: string;

    role: RoleType;


    user: appUser;
}
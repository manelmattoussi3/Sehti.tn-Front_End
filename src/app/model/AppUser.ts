import { profil } from "./Profil";

export class appUser {
    idUser: string;
    dateBirth: Date;
    nom: string;
    prenom: string;
    adresse: string;
    email: string;
    password: string;
    genre: string;
    image: string;
    tel: string;

    profil: profil;
}
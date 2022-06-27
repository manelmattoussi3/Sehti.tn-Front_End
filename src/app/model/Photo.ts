import { Binary } from "@angular/compiler";
import { appUser } from "./AppUser";

export class Photo {
    id: string;

    title: string;
    prenom: string;
    image: Binary;
    email: string;
    user: appUser;
}
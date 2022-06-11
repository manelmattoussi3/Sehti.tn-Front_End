import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DossierLettreComponent } from '../dossier-lettre/dossier-lettre.component';
import { DemandeAcce } from '../model/DemandeAcce';
import { dossierMedical } from '../model/DossierMedical';
import { FicheConsultation } from '../model/FicheConsultation';
import { LettreConfidentielle } from '../model/LettreConfidentielle';
import { DossierMedicalService } from '../service/dossier-medical.service';
import { LettreConfidentielleService } from '../service/lettre-confidentielle.service';

@Component({
  selector: 'app-detail-dossier-medical',
  templateUrl: './detail-dossier-medical.component.html',
  styleUrls: ['./detail-dossier-medical.component.css']
})
export class DetailDossierMedicalComponent implements OnInit {
  id: string;
  dossier: dossierMedical;
  demande: DemandeAcce;
  listDossier: dossierMedical[];
  isMenuOpened: boolean = false;
  listFiches: FicheConsultation[];
  fiche: FicheConsultation;
  lettre: LettreConfidentielle;
  listeLettre: LettreConfidentielle[];
  idLettre: any;
  display: boolean = false;
  displayfiche: boolean = false;
  constructor(private route: ActivatedRoute, private service: DossierMedicalService, private dialog: MatDialog, private servicel: LettreConfidentielleService) { }

  ngOnInit(): void {
    this.dossier = new dossierMedical();
    this.demande = new DemandeAcce();
    this.id = this.route.snapshot.params['idDemande'];
    this.service.AccederDossierByDemande(this.id).subscribe(data => {
      console.log(data)
      this.dossier = data;
      this.listeLettre = this.dossier.lettres;
      this.listFiches = this.dossier.fiche;
      console.log(this.listFiches);
    }, error => console.log(error));

    this.toggleMenu();
  }
  getLettre() {
    this.lettre = new LettreConfidentielle();
    this.idLettre = this.route.snapshot.params['idLettre'];
    this.servicel.getLettreById(this.idLettre).subscribe(data => {
      console.log(data)
      this.lettre = data;
    }, error => console.log(error));
  }
 
  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
  AfficherLettre() {
    this.display = true;
  }
  AfficherFiche() {
    this.displayfiche = true;
  }
}





